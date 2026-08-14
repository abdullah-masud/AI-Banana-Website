import { useEffect } from 'react'

const CHAT_WIDGET_SCRIPT_ID = 'leadconnector-chat-widget-loader'
const CHAT_WIDGET_ID = '6a7cd8798ce6e21783d93638'

export function LeadConnectorChat() {
  useEffect(() => {
    let timeoutId: number | undefined

    const loadWidget = () => {
      timeoutId = window.setTimeout(() => {
        const existingWidget = document.querySelector(`script[data-widget-id="${CHAT_WIDGET_ID}"]`)
        if (document.getElementById(CHAT_WIDGET_SCRIPT_ID) || existingWidget) return

        const script = document.createElement('script')
        script.id = CHAT_WIDGET_SCRIPT_ID
        script.src = 'https://widgets.leadconnectorhq.com/loader.js'
        script.async = true
        script.dataset.resourcesUrl = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
        script.dataset.widgetId = CHAT_WIDGET_ID
        document.body.appendChild(script)
      }, 0)
    }

    if (document.readyState === 'complete') loadWidget()
    else window.addEventListener('load', loadWidget, { once: true })

    return () => {
      window.removeEventListener('load', loadWidget)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return null
}
