import { TechnologiesValues } from '@shared/lib/constants/technologies.constats'
import Image from 'next/image'

interface IStackProps {
  data?: TechnologiesValues[]
}

export function Stack({ data }: IStackProps) {
  return (
    <div className='flex bg-light-bg-accent dark:bg-dark-bg-accent pt-20 mt-[7.5rem]'>
      <div className='container'>
        <h2 className='font-bold text-[2.875rem]'>Технологии</h2>
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
