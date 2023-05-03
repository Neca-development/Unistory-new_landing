import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import { TechnologiesValues } from '@shared/lib/constants/technologies.constats'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface IStackProps {
  data?: TechnologiesValues[]
}

export function Stack({ data }: IStackProps) {
  const {locale} = useRouter()
  const {theme, systemTheme} = useTheme()
  const _theme = theme === "system" ? systemTheme : theme;
  
  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])
  //grid grid-cols-3 gap-10 mt-16 t-xs:mt-6 t-xs:grid-cols-2 t-xs:gap-4
  return (
    <div className='flex bg-light-bg-accent dark:bg-dark-bg-accent pt-20 mt-[7.5rem] t-xs:mt-2 t-xs:pt-10'>
      <div className='container'>
        <h2 className='font-bold text-[2.875rem] t-xs:text-2xl'>{langData.techno}</h2>
        <div className='flex justify-center items-center gap-10 mt-16 flex-wrap  t-xs:mt-6 t-xs:gap-4'>
          {data?.map((technology, idx) => (
            <div
              key={idx}
              className={clsx(
                'flex bg-light-bg w-[25rem] dark:bg-dark-bg py-8 px-[1.875rem] flex-col items-center',
                // idx === data?.length - 1 && idx % 2 === 0 && 'col-span-2'
              )}
            >
              {_theme && <img className='h-[7.125rem] t-xs:h-16' src={technology.icon[_theme]} alt='' />}
              {/* <div className='relative w-full h-28'>
                <Image src={technology.icon} alt={technology.name} fill />
              </div> */}

              <h3 className='mt-6'>{technology.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
