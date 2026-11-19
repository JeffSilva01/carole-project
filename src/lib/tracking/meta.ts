import { loadScript } from "./load-script"

type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push: Pixel
  loaded: boolean
  version: string
}
const meta = window as Window & { fbq?: Pixel; _fbq?: Pixel }

export function startMeta(id: string) {
  if (meta.fbq) return
  const pixel = Object.assign(
    (...args: unknown[]) => {
      if (pixel.callMethod) pixel.callMethod(...args)
      else pixel.queue.push(args)
    },
    { queue: [] as unknown[][], loaded: true, version: "2.0" },
  ) as Pixel
  pixel.push = pixel
  meta.fbq = meta._fbq = pixel
  pixel("set", "autoConfig", false, id)
  pixel("init", id)
  pixel("track", "PageView")
  loadScript("https://connect.facebook.net/en_US/fbevents.js")
}

export function stopMeta() {
  meta.fbq?.("consent", "revoke")
}
