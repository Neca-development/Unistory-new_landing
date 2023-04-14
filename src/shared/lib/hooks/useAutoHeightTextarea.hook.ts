import { useEffect } from "react"

const normalizeTextareaHeight = 0

export const useAutoHeightTextarea = (ref: HTMLTextAreaElement | null, value?: string) => {
  useEffect(() => {
    if(ref) {
      ref.style.height = "0px"
  
      const scrollValue = ref.scrollHeight

      ref.style.height = scrollValue - normalizeTextareaHeight + 'px'
    }
  }, [ref, value])
}