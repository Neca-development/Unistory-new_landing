import { WORKS_LIST } from '@shared/lib'
import { WorksCard } from '@widgets/works-card'
import clsx from 'clsx'
import React, { useState } from 'react'

const reviewsData = [
  {
    company: 'Сбербанк',
    author: 'Алексей Авдей',
    position:
      'исполнительный директор Sberbank.ru, лидер agile-команд «Технологии маркетинга»',
    text: '«Хотелось бы отметить аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта».',
    workCard: WORKS_LIST.find((w) => w.title === 'ЛК Сбербанк'),
  },
  {
    company: "Papa John's",
    author: 'Иван Петров',
    position: 'исполнительный директор, лидер',
    text: '«Отзыв».',
    workCard: WORKS_LIST.find((w) => w.title === 'ЛК Сбербанк'),
  },
  {
    company: 'РЖД Логистика',
    author: 'Алексей Авдей',
    position:
      'исполнительный директор Sberbank.ru, лидер agile-команд «Технологии маркетинга»',
    text: '«Хотелось бы отметить аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта».',
    workCard: WORKS_LIST.find((w) => w.title === 'РЖД Логистика'),
  },
  {
    company: 'Gas Monsters',
    author: 'Алексей Авдей',
    position:
      'исполнительный директор Sberbank.ru, лидер agile-команд «Технологии маркетинга»',
    text: '«Хотелось бы отметить аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта».',
    workCard: WORKS_LIST.find((w) => w.title === 'Gas Monsters'),
  },
]

export function Reviews() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  return (
    <section className='container pt-20 pb-[7.5rem]'>
      <h2 className='text-5xl font-bold leading-[3.25rem]'>
        Факт:{' '}
        <span className='text-primary-s'>
          9 из 10 клиентов <br /> рекомендуют нас
        </span>{' '}
        и вот почему
      </h2>

      <div className='grid gap-10 grid-cols-[1fr_25rem] mt-10'>
        <article className='py-10 px-16 bg-light-surface dark:bg-dark-surface rounded-sm flex flex-col'>
          <p className='text-2xl leading-10'>
            {reviewsData[activeReviewIndex]?.text}
          </p>
          <p className='text-xl font-medium mt-auto max-w-xl'>
            <span className='font-bold'>
              {reviewsData[activeReviewIndex]?.author}
            </span>
            , {reviewsData[activeReviewIndex]?.position}
          </p>
        </article>
        {/* @ts-ignore */}
        <WorksCard work={reviewsData[activeReviewIndex].workCard} />
      </div>

      <div className='mt-10 flex space-x-6'>
        {reviewsData.map((r, idx) => (
          <button
            key={idx}
            className='py-4 px-6 bg-light-surface dark:bg-dark-surface text-2xl rounded-sm'
            onClick={() => setActiveReviewIndex(idx)}
          >
            <span
              className={clsx(
                'opacity-50',
                activeReviewIndex === idx && 'opacity-100 font-bold'
              )}
            >
              {r.company}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
