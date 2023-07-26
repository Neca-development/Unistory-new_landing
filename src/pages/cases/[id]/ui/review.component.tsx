import type { ICase } from '@shared/lib/types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface ICaseReviewProperties {
  data: ICase
}

export function CaseReview({ data }: ICaseReviewProperties) {
  const { locale } = useRouter()

  const { review, logo, title } = data

  return (
    <section className="container relative mt-20 pb-[7.5rem] t-xs:mt-16 t-xs:pb-16">
      <article className="max-w-[52.5rem]">
        <p className="text-3xl font-medium leading-[3rem] t-xs:text-xl">
          {review?.text[locale || 'ru']}
        </p>
        <div className="mt-5 flex items-center t-xs:mt-10 t-xs:block">
          {review?.author.photo && (
            <Image
              className="mr-6 w-[5.5rem] rounded-full t-xs:w-16"
              src={review.author.photo}
              alt={review.author.name[locale || 'ru'] || ''}
              width={100}
              height={100}
            />
          )}
          <p className="text-2xl t-xs:ml-0 t-xs:mt-3 t-xs:text-base">
            <span className="font-bold">{review?.author.name[locale || 'ru']}</span>,{' '}
            {review?.author.position[locale || 'ru']}
          </p>
        </div>
      </article>
      {logo && (
        <Image
          className="absolute right-12 -top-8 w-48"
          width={400}
          height={240}
          src={logo}
          alt={title}
        />
      )}
    </section>
  )
}
