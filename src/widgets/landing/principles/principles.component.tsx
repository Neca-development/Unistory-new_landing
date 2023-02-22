import { MessageToggler } from '@shared/ui'
import clsx from 'clsx'
import React, { useState } from 'react'

const principleTitles = ['Коммуникация', 'Экспертиза', 'Талант']

const messageData = {
  author: 'Нурсултан Бегенов',
  avatar: '/assets/images/nursultan.jpg',
  message:
    'Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра',
  date: 'только что',
}

export function Principles() {
  const [activeIdx, setActiveIdx] = useState(0)

  const renderContent = () => {
    switch (activeIdx) {
      case 0:
      case 1:
      case 2:
        return (
          <p className='font-bold text-5xl leading-[3.5rem]'>
            <span className='text-primary-s'>Коммуникация важна и точка.</span>{' '}
            Мы поможем определиться с деталями вашего проекта, ответим на все
            вопросы, подскажем лучшее решение, будем держать в курсе всех
            событий на проекте.
          </p>
        )
      default:
        break
    }
  }

  return (
    <section className='container pt-20 pb-40'>
      <div className='flex items-center space-x-4'>
        {principleTitles.map((t, index) => (
          <>
            <button
              className={clsx(
                'text-2xl p-2 font-medium',
                activeIdx === index && 'text-primary-s'
              )}
              onClick={() => setActiveIdx(index)}
            >
              {t}
            </button>
            {index < principleTitles.length - 1 && (
              <span className='text-5xl leading-none block -mt-1'>&sdot;</span>
            )}
          </>
        ))}
      </div>

      <div className='mt-12 relative'>
        <MessageToggler
          toggleClassName='absolute top-[-1.5rem] left-[39.2rem]'
          messageData={messageData}
        />
        {renderContent()}
      </div>
    </section>
  )
}
