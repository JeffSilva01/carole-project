import { loadScript } from "./load-script"

const google = window as Window & { dataLayer?: unknown[] }
let loaded = false
const configured = new Set<string>()

function tag(..._args: unknown[]) {
  (google.dataLayer ??= []).push(arguments)
}

const denied = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
}

export function startGoogle(analyticsId: string, adsId: string) {
  const firstId = analyticsId || adsId
  if (!firstId) return
  if (!loaded) tag("consent", "default", denied)
  tag("consent", "update", {
    ...denied,
    analytics_storage: analyticsId ? "granted" : "denied",
    ad_storage: adsId ? "granted" : "denied",
  })
  if (!loaded) {
    loaded = true
    tag("js", new Date())
  }

  const page = {
    page_location: location.origin + location.pathname,
    page_referrer: "",
    send_page_view: false,
    allow_google_signals: false,
    cookie_expires: 15552000,
    cookie_update: false,
    allow_ad_personalization_signals: false,
  }
  if (analyticsId && !configured.has(analyticsId)) {
    configured.add(analyticsId)
    tag("config", analyticsId, page)
    tag("event", "page_view", { ...page, send_to: analyticsId })
  }
  if (adsId && !configured.has(adsId)) {
    configured.add(adsId)
    tag("config", adsId, page)
  }
  if (!document.getElementById("google-tracking-script")) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(firstId)}`, "google-tracking-script")
  }
}

