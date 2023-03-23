import { CASES } from '@shared/lib'
import { ICase } from '@shared/lib/types'
import { WorksCard } from '@widgets/works-card'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  currentId: string
  title: string
}

export default function OtherCases({ currentId, title }: IProps) {
  const [cases, setCases] = useState<ICase[]>([])

  const prepareOtherCases = () => {
    const withoutCurrent = CASES.filter((c) => c.id !== currentId)
    setCases(withoutCurrent)
  }

  useEffect(() => {
    if (currentId) {
      prepareOtherCases()
    }
  }, [currentId])

  return (
    <section className='container mt-10 pb-24'>
      <h2 className='text-5xl font-bold'>{title}</h2>

      <Swiper className='mt-10' slidesPerView={1.5} spaceBetween={40}>
        {cases.map((c) => (
          <SwiperSlide key={c.id}>
            <WorksCard work={c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
