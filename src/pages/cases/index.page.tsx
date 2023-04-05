import { CASES } from '@shared/lib'
import { Meta } from '@shared/meta'
import { Connect } from '@widgets/connect'
import { Layout } from '@widgets/layout'
import { WorksCard } from '@widgets/works-card'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Cases() {
  const [categories, setCategories] = useState<string[]>([])
  const [activeTag, setActiveTag] = useState('')
  const [cards, setCards] = useState(CASES)
  const {locale} = useRouter()

  const prepareCategories = () => {
    const uniques: any = new Set([])
    CASES.forEach((c) => {
      const catArray = c.categories[locale || 'ru']
      if(!catArray) return

      for (const tag of catArray) {
        uniques.add(tag)
      }
    })
    const allTags = ['All', ...Array.from(uniques)] as string[]

    setCategories(allTags)
    setActiveTag(allTags[0] as string)
  }

  useEffect(() => {
    prepareCategories()
  }, [])

  useEffect(() => {
    const onActiveTagChange = () => {
      if (activeTag === 'All') {
        setCards(CASES)
      } else {
        const filtered = CASES.filter((c) => c.categories[locale || 'ru']?.includes(activeTag))
        setCards(filtered)
      }
    }

    if (activeTag) {
      onActiveTagChange()
    }
  }, [activeTag])

  return (
    <Layout Meta={<Meta description='Unistory next' title='Unistory' />}>
      <Layout.Header />
      <Layout.Main>
        <section className='mt-16 container pb-[7.5rem] t-xs:pb-16 t-xs:mt-8'>
          <h2 className='font-bold text-5xl t-xs:text-4xl'>Cases</h2>
          <div className='mt-10 flex flex-wrap gap-x-6 gap-y-4 t-xs:gap-x-4 t-xs:gap-y-4 t-xs:mt-[1.375rem]'>
            {categories.map((tag, idx) => (
              <button
                key={idx}
                className='py-4 px-6 bg-light-bg dark:bg-dark-surface text-2xl rounded-sm t-xs:py-1 t-xs:px-2 t-xs:text-base'
                onClick={() => setActiveTag(tag)}
              >
                <span
                  className={clsx(
                    'opacity-50',
                    activeTag === tag && 'opacity-100 font-bold'
                  )}
                >
                  {tag}
                </span>
              </button>
            ))}
          </div>

          <div className='grid grid-cols-3 gap-10 mt-16 t-xs:gap-8 t-xs:mt-8 t-xs:grid-cols-1'>
            {cards.map((work, index) => (
              <WorksCard
                key={index}
                work={work}
                additionalClassnames={clsx('[&:nth-child(6n+1)]:col-span-2 t-xs:[&:nth-child(6n+1)]:!col-span-1')}
              />
            ))}
          </div>
        </section>
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  )
}

export default Cases
