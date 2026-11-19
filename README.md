# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Cotações no Firestore

1. Crie um banco Cloud Firestore e uma conta de serviço dedicada. Conceda a ela uma função IAM personalizada com `datastore.entities.create` no banco de cotações. A coleção `cotacoes` é criada no primeiro envio. Aplique `firestore.rules` em um banco exclusivo para este backend. Se o projeto já usa regras para outros dados, preserve-as e confirme que nenhum caminho sobreposto permite acesso à coleção `cotacoes`.
2. Crie um widget Turnstile com os domínios autorizados. Na Netlify, defina `PUBLIC_TURNSTILE_SITE_KEY` no escopo **Builds**. No escopo **Functions**, configure `QUOTE_ORIGIN` com a origem HTTPS exata sem barra final, `TURNSTILE_SECRET_KEY` e `FIREBASE_SERVICE_ACCOUNT_JSON` com o JSON inteiro da conta de serviço. Marque as duas últimas variáveis como secretas e restrinja as credenciais de produção ao contexto **Production**. Use outro widget, origem e projeto Firebase em previews.
3. Faça o deploy na Netlify e confira no log de pós-processamento a regra de limite de `/api/cotacoes`. Envie uma cotação de teste no preview, confira o documento no console do Firebase e verifique que clientes não conseguem ler nem gravar diretamente.

Em desenvolvimento, inicie o Astro com `astro dev --background`. A rota é servida pela Netlify Function e pode ser exercitada em um preview ou chamada diretamente em testes Node. Para testes com o emulador do Firestore, configure `FIRESTORE_EMULATOR_HOST` somente no ambiente de teste e use um projeto de demonstração.
