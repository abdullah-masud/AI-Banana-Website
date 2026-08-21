type LeadConnectorWindow = Window & {
  leadConnector?: {
    chatWidget?: {
      openWidget?: () => void
    }
  }
}

const MAX_OPEN_ATTEMPTS = 20
const RETRY_DELAY_MS = 150

let pendingRetry: number | undefined

export function openLeadConnectorChat() {
  if (pendingRetry !== undefined) window.clearTimeout(pendingRetry)

  let attempts = 0

  const openIfReady = () => {
    const openWidget = (window as LeadConnectorWindow).leadConnector?.chatWidget?.openWidget
    if (typeof openWidget !== 'function') return false

    try {
      openWidget()
      return true
    } catch {
      return false
    }
  }

  const stopWaiting = () => {
    window.removeEventListener('LC_chatWidgetLoaded', handleWidgetLoaded)
    if (pendingRetry !== undefined) window.clearTimeout(pendingRetry)
    pendingRetry = undefined
  }

  const tryToOpen = () => {
    attempts += 1
    if (openIfReady() || attempts >= MAX_OPEN_ATTEMPTS) {
      stopWaiting()
      return
    }

    pendingRetry = window.setTimeout(tryToOpen, RETRY_DELAY_MS)
  }

  function handleWidgetLoaded() {
    if (openIfReady()) stopWaiting()
  }

  window.addEventListener('LC_chatWidgetLoaded', handleWidgetLoaded)
  tryToOpen()
}
