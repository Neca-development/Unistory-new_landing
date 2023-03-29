export const useDetectDeviceType = (width = 640) => {
  if(typeof window !== 'undefined') {
    return window.matchMedia(`(max-width: ${width}px)`).matches
  }

  return false
}