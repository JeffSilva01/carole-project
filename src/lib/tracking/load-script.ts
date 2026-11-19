export function loadScript(url: string, id?: string) {
  const script = document.createElement("script")
  script.async = true
  if (id) script.id = id
  script.src = url
  document.head.append(script)
}
