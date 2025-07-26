export {}

declare global {
  interface Window {
    fbq?: (...args) => void
  }
}
