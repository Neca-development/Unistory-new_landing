export const useDevice = (width = 640) => {
  if(typeof window !== 'undefined') {
    return window.matchMedia(`(max-width: ${width}px)`).matches
  }

  return false
}