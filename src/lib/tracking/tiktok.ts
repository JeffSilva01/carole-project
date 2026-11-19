import { loadScript } from "./load-script"

type Queue = unknown[][] & { _i?: Record<string, Queue>; _t?: Record<string, number>; _o?: Record<string, object> }
const tiktok = window as Window & { TikTokAnalyticsObject?: string; ttq?: Queue }
let pixelQueue: Queue | undefined

export function startTikTok(id: string) {
  if (tiktok.ttq) return
  const queue: Queue = []
  const instance: Queue = []
  const url = "https://analytics.tiktok.com/i18n/pixel/events.js"
  Object.assign(instance, { _u: url })
  queue._i = { [id]: instance }
  queue._t = { [id]: Date.now() }
  queue._o = { [id]: {} }
  Object.assign(queue, {
    instance: (pixelId: string) => queue._i?.[pixelId],
    page: () => queue.push(["page"]),
    revokeConsent: () => queue.push(["revokeConsent"]),
  })
  tiktok.TikTokAnalyticsObject = "ttq"
  tiktok.ttq = queue
  pixelQueue = queue
  queue.push(["page"])
  loadScript(`${url}?sdkid=${encodeURIComponent(id)}&lib=ttq`)
}

export function stopTikTok() {
  const pixel = pixelQueue as (Queue & { revokeConsent?: () => void }) | undefined
  pixel?.revokeConsent?.()
}
