import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import { ICase } from '@shared/lib/types'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export function CaseHero({ data }: { data: ICase }) {
  const {locale} = useRouter()
  
  if (!data) {
    return <></>
  }

  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])

  return (
    <>
      <h1 className='container mt-20 text-[4rem] leading-[4.875rem] font-bold whitespace-pre-line'>
        {data.heroTitle[locale || 'ru']}
      </h1>

      <img
        src={data.banner}
        className='h-[30rem] w-full object-cover mt-[4rem]'
        alt={data.title}
      />

      {data.showCategoriesOnPage && (
        <div className='container mt-4 flex flex-wrap items-center'>
          {data.categories[locale || 'ru']?.map((tag, idx) => (
            <p
              key={idx}
              className='px-4 py-2 text-2xl bg-light-bg-accent mr-4 mt-6 dark:bg-dark-surface'
            >
              {tag}
            </p>
          ))}
        </div>
      )}

      <div className='container'>
        <h2 className='mt-20 text-light-text-secondary dark:text-dark-text-secondary text-2xl'>
					{langData.goal}
        </h2>
        <p className='max-w-[52.5rem] mt-6 text-2xl leading-10'>
          {data.description[locale || 'ru']}
        </p>
        <ul className='mt-40 flex gap-x-40'>
          <li>
            <h3 className='text-light-text-secondary dark:text-dark-text-secondary text-2xl'>
							{langData.hero.budget}
            </h3>
            <b className='text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block'>
              {data.params.budget.toLocaleString('ru-RU')} ₽
            </b>
          </li>
          <li>
            <h3 className='text-light-text-secondary dark:text-dark-text-secondary text-2xl'>
              {langData.hero.timeline.label}
            </h3>
            <b className='text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block'>
              {data.params.period} {langData.hero.timeline.months}
            </b>
          </li>
          <li>
            <h3 className='text-light-text-secondary dark:text-dark-text-secondary text-2xl'>
            {langData.hero.year}
            </h3>
            <b className='text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block'>
              {data.params.year}
            </b>
          </li>
        </ul>
      </div>
    </>
  )
}
