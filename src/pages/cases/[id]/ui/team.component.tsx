import { ICase } from '@shared/lib/types'
import { useRouter } from 'next/router'

interface ITeamProps {
  data?: ICase['team']
  title: string
}

export function Team({ data, title }: ITeamProps) {
  const {locale} = useRouter()
  
  return (
    <section className='bg-light-bg-accent dark:bg-dark-bg-accent pt-[5rem] pb-[7.5rem]'>
      <div className='container'>
        <h2 className='font-bold text-[2.875rem]'>{title}</h2>

        <ul className='mt-20 grid grid-cols-4 gap-x-[2.4375rem] gap-y-[3.9375rem]'>
          {data?.map((item, idx) => (
            <li key={idx}>
              <div className='font-semibold text-2xl'>{item.name[locale || 'ru']}</div>
              <p className='mt-2 text-light-text-secondary dark:text-dark-text-secondary'>
                {item.position[locale || 'ru']}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
