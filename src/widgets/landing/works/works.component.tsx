import { CASES } from '@shared/lib'
import { IconComponent } from '@shared/ui'
import { WorksCard } from '@widgets/works-card'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export function Works() {
  console.log(CASES.slice(0, 7))
  return (
    <section className='bg-light-surface dark:bg-dark-surface'>
      <div className='container pt-20 pb-[3.5rem]'>
        <h2 className='font-bold text-5xl'>
          Мы помогаем предприятиям
          <br />
          разрабатывать цифровые продукты
        </h2>

        <div className='grid grid-cols-3 gap-10 mt-16'>
          {CASES.slice(0, 7).map((work, index) => (
            <WorksCard
              key={index}
              work={work}
              additionalClassnames={clsx('[&:nth-child(3n+1)]:col-span-2')}
            />
          ))}
        </div>

        <Link
          href='/cases'
          className='flex items-center py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary'
        >
          <IconComponent
            name='arrowRight'
            className='w-10 mr-4 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'
          />
          Еще кейсы
        </Link>
      </div>
    </section>
  )
}
