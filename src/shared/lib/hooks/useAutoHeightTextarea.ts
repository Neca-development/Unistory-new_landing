import { useEffect } from "react"

export const useAutoHeightTextarea = (ref: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if(ref) {
      ref.style.height = "0px"
  
      const scrollValue = ref.scrollHeight
      ref.style.height = scrollValue + 'px'
    }
  }, [ref, value])
}