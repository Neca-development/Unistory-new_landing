import { useThemeContext } from '@shared/lib'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import * as React from 'react'

const iconClassnameByTheme =
  'first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'

export interface IHeroProperties {}

export function Hero(props: IHeroProperties) {
  const { textClassName, temperatureTheme, setTemperatureTheme } =
    useThemeContext()
  const { setTheme, theme } = useTheme()

  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleTemperatureThemeHandler = () => {
    setTemperatureTheme(temperatureTheme === 'summer' ? 'winter' : 'summer')
  }

  return (
    <div className={clsx('container pt-[7.125rem] pb-16')}>
      <section className='relative pb-[8.875rem]'>
        <h1 className={clsx(textClassName, 'pr-24 text-h1')}>
          Разрабатываем приложения со сложными
          <button className='relative top-[-0.5rem] w-10 p-2'>
            <IconComponent name='earth' className={iconClassnameByTheme} />
          </button>
          <span className='font-roboto font-light italic text-light-text-primary dark:text-dark-text-primary'>
            интеграциями
          </span>
          <br />
          для web & mobile
        </h1>

        <button className='absolute -top-6 left-[18.2rem] w-10 p-2'>
          <IconComponent name='cloud' className={iconClassnameByTheme} />
        </button>

        <button
          onClick={toggleTemperatureThemeHandler}
          className='absolute top-[2rem] right-[3rem] w-10 p-2'
        >
          <IconComponent
            name={temperatureTheme}
            className={clsx(
              'first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent'
            )}
          />
        </button>

        <button className='absolute bottom-[5.375rem] left-[10.5rem] w-10 p-2'>
          <IconComponent name='rocket' className={iconClassnameByTheme} />
        </button>

        <button
          onClick={toggleThemeHandler}
          className='absolute bottom-8 right-[28rem] w-10'
        >
          <IconComponent name='sun' className={iconClassnameByTheme} />
        </button>
      </section>

      <section className='flex items-center justify-between'>
        <article className='flex items-center text-2xl font-medium'>
          <p className='relative mr-4 text-[5rem] font-bold leading-[5rem]'>
            20
            <span className='relative -top-8 text-[3rem] text-primary-s'>
              +
            </span>
          </p>
          сотрудников
          <br />в штате
        </article>

        <article className='flex items-center text-2xl font-medium'>
          <p className='relative mr-4 text-[5rem] font-bold leading-[5rem]'>
            70
            <span className='relative -top-8 text-[3rem] text-primary-s'>
              +
            </span>
          </p>
          успешных
          <br />
          проектов
        </article>

        <article className='flex items-center text-2xl font-medium'>
          <p className='relative mr-4 text-[5rem] font-bold leading-[5rem]'>
            4.9
          </p>
          оценка
          <br />
          на UpWork
        </article>
      </section>
    </div>
  )
}