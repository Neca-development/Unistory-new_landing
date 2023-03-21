import { IconComponent, IconsTypes } from '@shared/ui'
import clsx from 'clsx'
import React, { useState } from 'react'

const servicesTitles: { title: string; icon: IconsTypes }[] = [
  { title: 'Product design', icon: 'grid' },
  { title: 'Development', icon: 'layout' },
  { title: 'Maintain & Support', icon: 'folder' },
]

const iconClassnameByTheme =
  'first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderContent = () => {
    switch (activeIndex) {
      case 0: {
        return (
          <>
            <h3 className='text-4xl font-bold'>From your ideas to design prototype</h3>
            <p className='mt-10 text-2xl leading-10'>
							We provide a modern and user-friendly design based on your ideas and our expertise.
							We follow a transparent process, developed through years of practice,
							and your feedback to get a design that meets all the goals of the project.
            </p>
          </>
        )
      }
      case 1: {
        return (
          <>
            <h3 className='text-4xl font-bold'>Web & Mobile development</h3>
						<p className='mt-10 text-2xl leading-10'>
							We develop a web service or mobile application to solve
							your unique business tasks.
              <br /> <br />
              - frontend: React, Angular, Vue, TS
              <br />
              - backend: Node.js, C#, Bitrix24
							<br />
							- mobile: React native, Kotlin, Swift
            </p>
          </>
        )
      }
      case 2: {
        return (
          <>
            <h3 className='text-4xl font-bold'>Maintain & Support</h3>
            <p className='mt-10 text-2xl leading-10'>
							Provide an online or offline formed team of professionals to your project
							at any stage of product development. We will refine, improve
							or completely modernize existing IT solutions.
              <br /> <br />And you don’t even have to invite us to team buildings! 
              Though we certainly wouldn’t refuse :)
            </p>
          </>
        )
      }
      default: {
        return null
      }
    }
  }

  return (
    <section className='container pt-12 pb-20'>
      <div className='grid grid-cols-[27.5rem_1fr] rounded-sm bg-light-surface dark:bg-dark-surface'>
        <div className='grid grid-cols-1 content-start gap-4 border-r-2 border-light-bg p-4 pt-10 dark:border-dark-bg'>
          {servicesTitles.map((s, index) => (
            <div
              key={index}
              className={clsx(
                'flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover',
                activeIndex === index && 'bg-bg-s'
              )}
              onClick={() => setActiveIndex(index)}
            >
              <IconComponent
                name={s.icon}
                className={clsx('w-10', iconClassnameByTheme)}
              />
              <h2
                className={clsx(
                  'ml-6 text-2xl font-semibold',
                  activeIndex === index && 'text-primary-s'
                )}
              >
                {s.title}
              </h2>
            </div>
          ))}
        </div>

        <div className='pt-12 pb-[3.75rem] pl-16 pr-10'>{renderContent()}</div>
      </div>
    </section>
  )
}
