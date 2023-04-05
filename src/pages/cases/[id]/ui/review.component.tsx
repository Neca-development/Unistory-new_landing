import { ICase } from '@shared/lib/types'
import { useRouter } from 'next/router'
import React from 'react'

interface ICaseReviewProps {
  data: ICase
}

export default function CaseReview({ data }: ICaseReviewProps) {
  const {locale} = useRouter()
  
  const review = data.review

  return (
    <section className='container mt-20 pb-[7.5rem] relative t-xs:mt-16 t-xs:pb-16'>
      <article className='max-w-[52.5rem]'>
        <p className='text-3xl leading-[3rem] font-medium t-xs:text-xl'>{review?.text[locale || 'ru']}</p>
        <div className='flex items-center mt-5 t-xs:mt-10 t-xs:block'>
          <img
            className='w-[5.5rem] rounded-full t-xs:w-16'
            src={review?.author.photo}
            alt={review?.author.name[locale || 'ru']}
          />
          <p className='ml-6 text-2xl t-xs:ml-0 t-xs:text-base t-xs:mt-3'>
            <span className='font-bold'>{review?.author.name[locale || 'ru']}</span>,{' '}
            {review?.author.position[locale || 'ru']}
          </p>
        </div>
      </article>
      <img
        className='absolute right-12 -top-8 w-48'
        src={data.logo}
        alt={data.title}
      />
    </section>
  )
}
