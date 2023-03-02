import { IconComponent, IconsTypes } from '@shared/ui'
import clsx from 'clsx'
import React, { useState } from 'react'

const servicesTitles: { title: string; icon: IconsTypes }[] = [
  { title: 'Продуктовый дизайн', icon: 'grid' },
  { title: 'Разработка', icon: 'layout' },
  { title: 'Поддержка и развитие', icon: 'folder' },
]

const iconClassnameByTheme =
  'first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderContent = () => {
    switch (activeIndex) {
      case 0: {
        return (
          <>
            <h3 className='text-4xl font-bold'>Из идеи в дизайн-прототип</h3>
            <p className='mt-10 text-2xl leading-10'>
              Создадим современный и удобный дизайн на основе вашей идеи и нашей
              экспертизы. Мы придерживаемся прозрачного процесса, выработанного
              годами практики, и вашей обратной связи, чтобы получить дизайн,
              который соответствует целям проекта.
            </p>
          </>
        )
      }
      case 1: {
        return (
          <>
            <h3 className='text-4xl font-bold'>Разработка web & mobile</h3>
            <p className='mt-10 text-2xl leading-10'>
              Разработаем веб-сервис или мобильное приложение для решения ваших
              уникальных бизнес задач.
              <br /> <br />
              — frontend: React, Angular, Vue, TS
              <br />
              — backend: Node.js, C#, Битрикс24
              <br />— mobile: React native, Kotlin, Swift
            </p>
          </>
        )
      }
      case 2: {
        return (
          <>
            <h3 className='text-4xl font-bold'>Поддержка и развитие</h3>
            <p className='mt-10 text-2xl leading-10'>
              Подключим онлайн или офлайн сформированную команду профессионалов
              к вашему проекту на любом этапе развития продукта. Доработаем,
              улучшим или полностью модернизируем существующие IT-решения.
              <br /> <br />И нас даже необязательно приглашать на корпоративы!
              Хотя мы бы точно не отказались :)
            </p>
          </>
        )
      }
      default: {
        return null
      }
    }
  }

  return (
    <section className='container pt-12 pb-20'>
      <div className='grid grid-cols-[27.5rem_1fr] rounded-sm bg-light-surface dark:bg-dark-surface'>
        <div className='grid grid-cols-1 content-start gap-4 border-r-2 border-light-bg p-4 pt-10 dark:border-dark-bg'>
          {servicesTitles.map((s, index) => (
            <div
              key={index}
              className={clsx(
                'flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover',
                activeIndex === index && 'bg-bg-s'
              )}
              onClick={() => setActiveIndex(index)}
            >
              <IconComponent
                name={s.icon}
                className={clsx('w-10', iconClassnameByTheme)}
              />
              <h2
                className={clsx(
                  'ml-6 text-2xl font-semibold',
                  activeIndex === index && 'text-primary-s'
                )}
              >
                {s.title}
              </h2>
            </div>
          ))}
        </div>

        <div className='pt-12 pb-[3.75rem] pl-16 pr-10'>{renderContent()}</div>
      </div>
    </section>
  )
}
