import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import type { TechnologiesValues } from '@shared/lib/constants/technologies.constats'
import { useDetectDeviceType } from '@shared/lib/hooks/useDetectDeviceType.hook'
import { useMounted } from '@shared/lib/hooks/useMounted'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

interface IStackProperties {
  data?: TechnologiesValues[]
}

export function Stack({ data }: IStackProperties) {
  const { locale } = useRouter()
  const { theme, systemTheme } = useTheme()
  const mounted = useMounted()

  const _theme = useMemo(() => {
    const returnTheme = theme === 'system' ? systemTheme : theme

    return returnTheme ?? 'dark'
  }, [theme, systemTheme])

  const isMobile = useDetectDeviceType()

  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={clsx(
        'mt-20 flex bg-light-bg-accent pt-20 dark:bg-dark-bg-accent t-xs:mt-2 t-xs:pt-10',
        data?.length === 0 && 'hidden'
      )}
    >
      <div className="container">
        <h2 className="text-[2.875rem] font-bold t-xs:text-2xl">{langData.techno}</h2>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 md:justify-start  t-xs:mt-6 t-xs:gap-4">
          {data?.map((technology, index) => (
            <div
              key={index}
              className={clsx(
                'flex w-[47%] flex-col items-center bg-light-bg p-6 dark:bg-dark-bg md:w-[30.8%] lg:w-[22.3%]'
                // idx === data?.length - 1 && idx % 2 === 0 && 'col-span-2'
              )}
            >
              <div className="relative h-0 w-full pt-[100%]">
                <Image
                  src={technology.icon[_theme]!}
                  width={isMobile ? 150 : 180}
                  height={120}
                  alt=""
                  className="absolute top-0 left-0 h-full w-full object-contain"
                />
              </div>
              {/* <div className='relative w-full h-28'>
                <Image src={technology.icon} alt={technology.name} fill />
              </div> */}

              {/* <h3 className="mt-6">{technology.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
