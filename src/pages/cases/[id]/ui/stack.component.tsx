import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import { TechnologiesValues } from '@shared/lib/constants/technologies.constats'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface IStackProps {
  data?: TechnologiesValues[]
}

export function Stack({ data }: IStackProps) {
  const {locale} = useRouter()
  
  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])
  
  return (
    <div className='flex bg-light-bg-accent dark:bg-dark-bg-accent pt-20 mt-[7.5rem]'>
      <div className='container'>
        <h2 className='font-bold text-[2.875rem]'>{langData.techno}</h2>
        <div className='grid grid-cols-4 gap-10 mt-16'>
          {data?.map((technology, idx) => (
            <div
              key={idx}
              className='flex bg-light-bg dark:bg-dark-bg py-8 px-[1.875rem] flex-col items-center'
            >
              <img className='h-[7.125rem]' src={technology.icon} alt='' />
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
