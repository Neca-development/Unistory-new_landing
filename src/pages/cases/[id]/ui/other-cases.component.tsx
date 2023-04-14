import { CASES } from '@shared/lib'
import { useDetectDeviceType } from '@shared/lib/hooks/useDetectDeviceType.hook'
import { ICase } from '@shared/lib/types'
import { WorksCard } from '@widgets/works-card'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface IProps {
  currentId: string
  title: string
}

export default function OtherCases({ currentId, title }: IProps) {
  const [cases, setCases] = useState<ICase[]>([])
  const isMob = useDetectDeviceType()

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
    <section className='container mt-10 pb-24 t-xs:pb-16'>
      <h2 className='text-5xl font-bold t-xs:text-2xl'>{title}</h2>

      <Swiper className='mt-10 select-none t-xs:mt-8' slidesPerView={1.5} spaceBetween={isMob ? 20 : 40}>
        {cases.map((c) => (
          <SwiperSlide key={c.id}>
            <WorksCard work={c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
