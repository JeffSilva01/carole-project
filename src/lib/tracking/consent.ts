export const consentTestMode = import.meta.env.DEV && import.meta.env.PUBLIC_COOKIE_CONSENT_TEST_MODE === "true"

const key = consentTestMode ? "cookie-preferences-test" : "cookie-preferences"
const version = "1"
const lifetime = 180 * 24 * 60 * 60 * 1000

export type Preferences = { analytics: boolean; advertising: boolean }

export function readPreferences(): Preferences | null {
  try {
    const record = JSON.parse(localStorage.getItem(key) ?? "null")
    if (
      record?.version === version &&
      Date.now() >= record.savedAt && Date.now() - record.savedAt < lifetime &&
      typeof record.analytics === "boolean" && typeof record.advertising === "boolean"
    ) return record
  } catch {
    // Unavailable storage requires a fresh choice.
  }
  return null
}

export function savePreferences(preferences: Preferences) {
  try {
    localStorage.setItem(key, JSON.stringify({ ...preferences, version, savedAt: Date.now() }))
  } catch {
    // Keep the choice in memory for this page.
  }
}

export function clearTrackingCookies(prefixes: string[]) {
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0].trim()
    if (!prefixes.some((prefix) => name.startsWith(prefix))) continue
    document.cookie = `${name}=; Max-Age=0; Path=/`
    const hostname = location.hostname
    const domains = hostname.split(".").map((_, index, parts) => parts.slice(index).join("."))
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}`
    }
  }
}
