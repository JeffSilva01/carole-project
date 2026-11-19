import { cert, getApps, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

export const config = {
  path: "/api/cotacoes",
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ["ip", "domain"] },
};

const limit = 8192;
const plans = ["Individual", "Familiar", "Empresarial", "Por Adesão"];

function reply(status, message) {
  return Response.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(status === 405 && { Allow: "POST" }),
      },
    },
  );
}

async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let body = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return JSON.parse(body + decoder.decode());
    bytes += value.byteLength;
    if (bytes > limit) {
      await reader.cancel();
      throw new RangeError();
    }
    body += decoder.decode(value, { stream: true });
  }
}

function validate(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return;
  const { nome, whatsapp, cidade, tipo, idade, pessoas, mensagem, token } =
    data;

  const text = (value, max) =>
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= max;

  const integer = (value, min, max) =>
    Number.isSafeInteger(value) && value >= min && value <= max;

  if (!text(nome, 120) || !text(cidade, 120) || !plans.includes(tipo)) return;

  if (!text(whatsapp, 30) || !/^[+\d().\s-]+$/.test(whatsapp)) return;

  const phone = whatsapp.replace(/\D/g, "");

  if (!/^(?:55)?[1-9]\d{9,10}$/.test(phone)) return;

  if (idade !== undefined && !integer(idade, 0, 120)) return;

  if (pessoas !== undefined && !integer(pessoas, 1, Number.MAX_SAFE_INTEGER))
    return;

  if (mensagem !== undefined && !text(mensagem, 1000)) return;

  if (!text(token, 2048)) return;

  return {
    nome: nome.trim(),
    whatsapp: phone,
    cidade: cidade.trim(),
    tipo,
    ...(idade !== undefined && { idade }),
    ...(pessoas !== undefined && { pessoas }),
    ...(mensagem !== undefined && { mensagem: mensagem.trim() }),
  };
}

export default async function handler(request, context) {
  if (request.method !== "POST") return reply(405, "Método indisponível.");

  const { QUOTE_ORIGIN, TURNSTILE_SECRET_KEY, FIREBASE_SERVICE_ACCOUNT_JSON } =
    process.env;

  if (
    !QUOTE_ORIGIN ||
    !TURNSTILE_SECRET_KEY ||
    !FIREBASE_SERVICE_ACCOUNT_JSON
  ) {
    console.error("QUOTE_CONFIG", context?.requestId);
    return reply(503, "Envio indisponível. Tente novamente mais tarde.");
  }

  if (request.headers.get("origin") !== QUOTE_ORIGIN)
    return reply(403, "Origem inválida.");

  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  ) {
    return reply(415, "Formato inválido.");
  }

  let data;

  try {
    data = await readBody(request);
  } catch (error) {
    return error instanceof RangeError
      ? reply(413, "O envio excede o tamanho permitido.")
      : reply(400, "Dados inválidos.");
  }

  const quote = validate(data);

  if (!quote)
    return reply(400, "Verifique os dados e a validação de segurança.");

  let stage = "QUOTE_TURNSTILE";

  try {
    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET_KEY,
          response: data.token,
        }),
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!verification.ok) throw new Error();

    const result = await verification.json();

    if (
      !result.success ||
      result.action !== "cotacao" ||
      result.hostname !== new URL(QUOTE_ORIGIN).hostname
    ) {
      return reply(
        403,
        "Validação de segurança expirada ou inválida. Tente novamente.",
      );
    }

    stage = "QUOTE_FIRESTORE";

    const app =
      getApps().find(({ name }) => name === "cotacoes") ??
      initializeApp(
        { credential: cert(JSON.parse(FIREBASE_SERVICE_ACCOUNT_JSON)) },
        "cotacoes",
      );

    await getFirestore(app)
      .collection("cotacoes")
      .doc()
      .create({
        ...quote,
        createdAt: FieldValue.serverTimestamp(),
      });

    return reply(201, "Recebemos sua solicitação de cotação!");
  } catch {
    console.error(stage, context?.requestId);
    return reply(503, "Envio indisponível. Tente novamente mais tarde.");
  }
}
