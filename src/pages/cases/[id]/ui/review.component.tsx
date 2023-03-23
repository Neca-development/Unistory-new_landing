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
    <section className='container mt-20 pb-[7.5rem] relative'>
      <article className='max-w-[52.5rem]'>
        <p className='text-3xl leading-[3rem] font-medium'>{review?.text[locale || 'ru']}</p>
        <div className='flex items-center mt-5'>
          <img
            className='w-[5.5rem] rounded-full'
            src={review?.author.photo}
            alt={review?.author.name[locale || 'ru']}
          />
          <p className='ml-6 text-2xl'>
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
