import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
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

export function MessageToggler(props: IMessageToggler) {
  const { messageData, toggleClassName } = props
  const [showMessage, setShowMessage] = useState(true)

  return (
    <div className={clsx(toggleClassName)}>
      <button onClick={() => setShowMessage(!showMessage)}>
        <IconComponent
          name='message'
          className={clsx(
            'w-10 p-2 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'
          )}
        />
      </button>

      <article
        className={clsx(
          'absolute top-[-7.5rem] left-[1.3rem] p-4 rounded-[1.25rem] rounded-bl-none bg-light-surface dark:bg-dark-surface w-[21.125rem] flex items-start shadow-8dp',
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
