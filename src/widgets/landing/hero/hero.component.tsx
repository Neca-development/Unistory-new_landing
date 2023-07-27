import { HeroEn, HeroRu } from '@shared/i18n'
import { useMounted } from '@shared/lib/hooks/useMounted'
import { useAnimationStore } from '@shared/lib/store'
import { IconComponent } from '@shared/ui'
import SunComponent from '@widgets/landing/hero/sun.component'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'

import CloudComponent from './cloud.component'
import RocketComponent from './rocket.component'
import TemperatureComponent from './temperature.component'

const iconClassnameByTheme =
  'first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent first:[&>path]:transition first:[&>path]:duration-300'

const plusSignClasses =
  'absolute -top-[1.1rem] text-[3rem] text-primary-s m-xl:text-4xl m-xl:top-2 duration-300'

export function Hero() {
  const [earthColor, setEarthColor] = useState(false)
  const mounted = useMounted()
  const { shouldAnimate } = useAnimationStore()

  const toggleEarthColor = () => {
    setEarthColor((previousState) => !previousState)
  }

  const { locale } = useRouter()

  const text = React.useMemo(() => {
    if (locale === 'ru') {
      return HeroRu
    }

    return HeroEn
  }, [locale])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={clsx(
        'container justify-center pt-[3.5rem] pb-14 lg:flex lg:min-h-[91vh] lg:flex-col lg:pb-8 t-xs:pt-12'
      )}
    >
      <section className="relative pb-[5rem] lg:mb-[10vh] t-xs:pb-16">
        <h1 className="text-center text-h1 duration-300 2xl:text-large-h1 t-xs:pr-0 t-xs:text-mob-h1">
          {text?.description.first} <br />
          <span className="text-primary-s duration-300 t-xs:mr-2">
            {text?.description.second}
          </span>
          <button
            className={clsx(
              'relative top-[-0.5rem] m-2 w-6 duration-150 hover:scale-110 lg:w-7 2xl:w-8 t-xs:absolute t-xs:top-32 t-xs:right-[0.4rem]',
              shouldAnimate && 'animate-hero-icons-fade-in'
            )}
            onClick={toggleEarthColor}
          >
            <IconComponent
              name={earthColor ? 'earthColor' : 'earth'}
              className={iconClassnameByTheme}
            />
          </button>
          <span className="inline-block	text-primary-s duration-300">
            {text?.description.third}
          </span>
          <br />
          {` ${text?.description.fourth} `}
          {/* <br className={clsx(locale === "en" && "t-xs:hidden")} /> */}
          {text?.description.fifth}
        </h1>

        <CloudComponent />

        <TemperatureComponent />

        <RocketComponent />

        <SunComponent />
      </section>

      <section className="flex items-center justify-between t-xs:ml-8 t-xs:block">
        <article className="flex items-center text-2xl font-medium t-xs:mb-8">
          <p className="relative mr-[2.75rem] text-[5rem] font-bold leading-[5rem] 2xl:text-8xl m-xl:mr-4 m-xl:w-[4.875rem] m-xl:text-[3rem]">
            25
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl 2xl:text-3xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.teamSize }}
          />
        </article>

        <article className="flex items-center text-2xl font-medium t-xs:mb-8">
          <p className="relative mr-[2.75rem] text-[5rem] font-bold leading-[5rem] 2xl:text-8xl m-xl:mr-4 m-xl:w-[4.875rem] m-xl:text-[3rem]">
            70
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl 2xl:text-3xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.projects }}
          />
        </article>

        <article className="flex items-center text-2xl font-medium">
          <p className="relative mr-[2.5rem] text-[5rem] font-bold leading-[5rem] 2xl:text-8xl m-xl:mr-5 m-xl:w-[4.875rem] m-xl:text-[3rem]">
            <span>5</span>
            <span className="sm:-mx-[5px]">.</span>
            <span>0</span>
            <span className="absolute top-3 -right-6 text-primary-s duration-300 2xl:top-0 m-xl:-right-3 m-xl:top-5">
              <IconComponent name="clutchStar" className="h-6 w-6 m-xl:h-4 m-xl:w-4" />
            </span>
          </p>
          <span
            className="text-2xl 2xl:text-3xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.rating }}
          />
        </article>
      </section>
    </div>
  )
}
