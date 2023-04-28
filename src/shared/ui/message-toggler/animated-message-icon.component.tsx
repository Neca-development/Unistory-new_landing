import { useEffect, useState } from "react";
import { IconComponent } from "../icon.component";

export function AnimatedMessageIcon() {
  const [commentAnim, setCommentAnim] = useState(1)
  
  useEffect(() => {
    let interval = setInterval(() => {
      setCommentAnim(prevState => prevState < 3 ? prevState + 1 : 1)
    }, 500)

    return () => {
      clearInterval(interval)
    }

  }, [])
  
  return (
    <>
      <IconComponent
        name="message"
        className={'p-2 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'}
      />
      <span className="flex items-center gap-[0.095rem] absolute top-[1.205rem] left-[0.9325rem]">
        {Array.from({length: commentAnim}).map((_, idx) => <span className="block rounded-[50%] w-[0.125rem] h-[0.125rem] bg-light-text-primary dark:bg-dark-text-primary" key={idx} />)}
      </span>
    </>
  )
}