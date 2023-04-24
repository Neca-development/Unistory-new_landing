import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { IconComponent } from '../icon.component'

interface IMessageToggler {
  messageData: {
    author: string
    avatar: string
    date: string
    message: string
  }
  toggleClassName: string
}


const articleClasses = 'absolute top-[-7.5rem] left-[1.3rem] t-xs:top-[1.5rem] t-xs:left-auto t-xs:right-[1.8rem] p-4 rounded-[1.25rem] rounded-bl-none t-xs:rounded-bl-[1.25rem] t-xs:rounded-br-none bg-light-surface dark:bg-dark-surface w-[21.125rem] flex items-start shadow-8dp'
type messageType = 'message' | 'messageOne' | 'messageTwo'
export function MessageToggler(props: IMessageToggler) {
  const { messageData, toggleClassName } = props
  const [showMessage, setShowMessage] = useState(false)
  const [commentAnim, setCommentAnim] = useState(1)

  const messageName = (): messageType => {
    switch (commentAnim) {
      case 1:
        return 'messageTwo'
      case 2:
        return 'messageOne'
      case 3:
        return 'message'
      default:
        return 'messageTwo'
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setCommentAnim(prevState => prevState < 3 ? prevState + 1 : 1)
    }, 500)

    return () => {
      clearInterval(interval)
    }

  }, [])

  return (
    <div className={clsx(toggleClassName)}>
      <button onClick={() => setShowMessage(!showMessage)}>
        <IconComponent
          name={messageName()}
          className={clsx(
            'p-2 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'
          )}
        />
      </button>

      <article
        className={clsx(
          articleClasses,
          showMessage === false && 'hidden'
        )}
      >
        <Image
          src={messageData.avatar}
          alt={messageData.author}
          width={32}
          height={32}
          className='w-8 rounded-full'
        />
        <div className='ml-3 text-sm font-normal'>
          <div className='flex items-center'>
            <p className='font-bold'>{messageData.author}</p>
            <p className='ml-2 opacity-50'>{messageData.date}</p>
          </div>
          <p className='mt-2'>{messageData.message}</p>
        </div>
      </article>
    </div>
  )
}
