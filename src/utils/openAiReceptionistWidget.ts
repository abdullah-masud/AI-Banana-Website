import {
  AI_RECEPTIONIST_WIDGET_ID,
  LEADCONNECTOR_LOADER_URL,
  LEADCONNECTOR_RESOURCES_URL,
} from '../data/chatWidgets'

const AI_RECEPTIONIST_SCRIPT_ID = 'leadconnector-ai-receptionist-loader'
const LOAD_TIMEOUT_MS = 12_000

type ChatWidgetApi = {
  openWidget?: () => void
  closeWidget?: () => void
}

type LeadConnectorWindow = Window & {
  leadConnector?: { chatWidget?: ChatWidgetApi }
}

type ChatWidgetElement = HTMLElement & {
  widgetId?: string
}

let aiReceptionistOpen: (() => void) | undefined
let loadPromise: Promise<void> | undefined
let generalChatApi: ChatWidgetApi | undefined

function findAiReceptionistWidget() {
  return Array.from(document.querySelectorAll<ChatWidgetElement>('chat-widget'))
    .find((widget) => widget.widgetId === AI_RECEPTIONIST_WIDGET_ID)
}

function hideAiReceptionistWhenClosed(widget: ChatWidgetElement) {
  const handleClosed = () => {
    if (widget.dataset.active === 'false') {
      widget.style.display = 'none'
      window.removeEventListener('lc-widget-closed', handleClosed)
    }
  }

  window.addEventListener('lc-widget-closed', handleClosed)
}

function showAndOpenAiReceptionist() {
  const widget = findAiReceptionistWidget()
  if (!widget || !aiReceptionistOpen) return

  generalChatApi?.closeWidget?.()
  widget.style.display = ''
  aiReceptionistOpen()
  hideAiReceptionistWhenClosed(widget)
}

function loadAiReceptionistWidget() {
  if (loadPromise) return loadPromise

  loadPromise = new Promise<void>((resolve) => {
    generalChatApi = (window as LeadConnectorWindow).leadConnector?.chatWidget

    const concealWidget = new MutationObserver(() => {
      const widget = findAiReceptionistWidget()
      if (widget) {
        widget.style.display = 'none'
        concealWidget.disconnect()
      }
    })

    concealWidget.observe(document.body, { childList: true, subtree: true })

    const timeoutId = window.setTimeout(() => {
      concealWidget.disconnect()
      window.removeEventListener('LC_chatWidgetLoaded', handleLoaded)
      resolve()
    }, LOAD_TIMEOUT_MS)

    function handleLoaded(event: Event) {
      const eventRoot = (event as CustomEvent<HTMLElement>).detail?.getRootNode()
      const widget = eventRoot instanceof ShadowRoot
        ? eventRoot.host as ChatWidgetElement
        : findAiReceptionistWidget()

      if (widget?.widgetId !== AI_RECEPTIONIST_WIDGET_ID) return

      const leadConnectorWindow = window as LeadConnectorWindow
      aiReceptionistOpen = leadConnectorWindow.leadConnector?.chatWidget?.openWidget

      if (generalChatApi && leadConnectorWindow.leadConnector) {
        leadConnectorWindow.leadConnector.chatWidget = generalChatApi
      }

      widget.style.display = 'none'
      window.clearTimeout(timeoutId)
      concealWidget.disconnect()
      window.removeEventListener('LC_chatWidgetLoaded', handleLoaded)
      resolve()
    }

    window.addEventListener('LC_chatWidgetLoaded', handleLoaded)

    if (!document.getElementById(AI_RECEPTIONIST_SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = AI_RECEPTIONIST_SCRIPT_ID
      script.src = LEADCONNECTOR_LOADER_URL
      script.async = true
      script.dataset.resourcesUrl = LEADCONNECTOR_RESOURCES_URL
      script.dataset.widgetId = AI_RECEPTIONIST_WIDGET_ID
      document.body.appendChild(script)
    }
  })

  return loadPromise
}

export function openAiReceptionistWidget() {
  if (aiReceptionistOpen) {
    showAndOpenAiReceptionist()
    return
  }

  void loadAiReceptionistWidget().then(showAndOpenAiReceptionist)
}
