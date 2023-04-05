import { ICase } from '@shared/lib/types'
import { useRouter } from 'next/router'

interface ITeamProps {
  data?: ICase['team']
  title: string
}

export function Team({ data, title }: ITeamProps) {
  const {locale} = useRouter()
  
  return (
    <section className='bg-light-bg-accent dark:bg-dark-bg-accent pt-[5rem] pb-[7.5rem] t-xs:pt-10 t-xs:pb-16'>
      <div className='container'>
        <h2 className='font-bold text-[2.875rem] t-xs:text-2xl'>{title}</h2>

        <ul className='mt-20 grid grid-cols-4 gap-x-[2.4375rem] gap-y-[3.9375rem] t-xs:mt-10 t-xs:grid-cols-2 t-xs:gap-x-4 t-xs:gap-y-10'>
          {data?.map((item, idx) => (
            <li key={idx}>
              <div className='font-semibold text-2xl t-xs:text-base'>{item.name[locale || 'ru']}</div>
              <p className='mt-2 text-light-text-secondary dark:text-dark-text-secondary t-xs:mt-1 t-xs:text-sm'>
                {item.position[locale || 'ru']}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
