import { useEffect } from 'react'
import {
  GENERAL_CHAT_WIDGET_ID,
  LEADCONNECTOR_LOADER_URL,
  LEADCONNECTOR_RESOURCES_URL,
} from '../data/chatWidgets'

const CHAT_WIDGET_SCRIPT_ID = 'leadconnector-chat-widget-loader'

export function LeadConnectorChat() {
  useEffect(() => {
    let timeoutId: number | undefined

    const loadWidget = () => {
      timeoutId = window.setTimeout(() => {
        const existingWidget = document.querySelector(`script[data-widget-id="${GENERAL_CHAT_WIDGET_ID}"]`)
        if (document.getElementById(CHAT_WIDGET_SCRIPT_ID) || existingWidget) return

        const script = document.createElement('script')
        script.id = CHAT_WIDGET_SCRIPT_ID
        script.src = LEADCONNECTOR_LOADER_URL
        script.async = true
        script.dataset.resourcesUrl = LEADCONNECTOR_RESOURCES_URL
        script.dataset.widgetId = GENERAL_CHAT_WIDGET_ID
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
