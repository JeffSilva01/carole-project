import { clearTrackingCookies, consentTestMode, type Preferences } from "./consent"

export const analyticsId = (import.meta.env.PUBLIC_GA4_MEASUREMENT_ID ?? "").trim()
const adsId = (import.meta.env.PUBLIC_GOOGLE_ADS_ID ?? "").trim()
const metaId = (import.meta.env.PUBLIC_META_PIXEL_ID ?? "").trim()
const tiktokId = (import.meta.env.PUBLIC_TIKTOK_PIXEL_ID ?? "").trim()
const advertisingPaths = new Set<string>()
const eligible = advertisingPaths.has(location.pathname)
export const advertisingAvailable = eligible && Boolean(adsId || metaId || tiktokId)
let activeAnalytics = false
let activeAdvertising = false
let revision = 0

export async function applyPreferences(preferences: Preferences) {
  if (consentTestMode) return
  const current = ++revision
  const analytics = Boolean(preferences.analytics && analyticsId)
  const advertising = preferences.advertising && advertisingAvailable
  if ((activeAnalytics && !analytics) || (activeAdvertising && !advertising)) {
    if (!analytics) {
      Reflect.set(window, `ga-disable-${analyticsId}`, true)
      clearTrackingCookies(["_ga", "_gid", "_gat"])
    }
    if (!advertising) {
      clearTrackingCookies(["_gcl", "_fbp", "_fbc", "_ttp", "ttcsid"])
      const [meta, tiktok] = await Promise.all([import("./meta"), import("./tiktok")])
      if (current !== revision) return
      meta.stopMeta()
      tiktok.stopTikTok()
    }
    location.reload()
    return
  }

  if (analytics || (advertising && adsId)) {
    const google = await import("./google")
    if (current !== revision) return
    google.startGoogle(analytics ? analyticsId : "", advertising ? adsId : "")
    activeAnalytics = analytics
    activeAdvertising ||= Boolean(advertising && adsId)
  }
  if (advertising) {
    const [meta, tiktok] = await Promise.all([import("./meta"), import("./tiktok")])
    if (current !== revision) return
    if (metaId) meta.startMeta(metaId)
    if (tiktokId) tiktok.startTikTok(tiktokId)
    activeAdvertising = true
  }
}
