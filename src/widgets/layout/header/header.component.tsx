import { ROUTESEN, ROUTESRU } from '@shared/i18n/constants'
import { useScrollDirection } from '@shared/lib/hooks/useScrollDirection.hook'
import { useAnimationStore } from '@shared/lib/store'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import useScrollbarSize from 'react-scrollbar-size'

import { Logo } from './logo.component'
import { MenuBtn } from './menu-btn.component'
import { MobileMenu } from './mobile-menu'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props
  // const router = useRouter()\
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMenuDown, setIsMenuDown] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  const { theme, systemTheme } = useTheme()
  const _theme = theme === 'system' ? systemTheme : theme
  const { shouldAnimate } = useAnimationStore()

  const { locale } = useRouter()
  const scrollDir = useScrollDirection()
  const { width } = useScrollbarSize()

  const { asPath } = useRouter()
  const currentPage = asPath

  const isHome = asPath === '/'

  const isMenuVisible = useMemo(() => {
    return scrollDir !== 'down'
  }, [scrollDir])

  const ROUTES = React.useMemo(() => {
    if (locale === 'ru') {
      return ROUTESRU
    }

    return ROUTESEN
  }, [locale])

  function openMenu() {
    setIsMenuOpen(true)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 100) {
        setIsMenuDown(true)
      } else {
        setIsMenuDown(false)
      }
    }

    const timeout = setTimeout(() => {
      setIsLoad(true)
    }, 300)

    document.addEventListener('scroll', scrollFunction)

    return () => {
      document.removeEventListener('scroll', scrollFunction)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <header
      {...props}
      className={clsx('relative z-50 flex w-full justify-center', className)}
      style={{
        paddingLeft: shouldAnimate ? width : 0,
      }}
    >
      <div
        className={clsx(
          'fixed z-10 flex w-full justify-center transition-all duration-300',
          'mx-auto w-full px-[0.5rem] md:max-w-[790px] lg:max-w-[80rem] lg:px-[3rem] 2xl:max-w-[90rem] m-l:max-w-full',
          isMenuVisible ? 'top-4' : 'top-[-6rem] shadow-navbar'
        )}
      >
        <div
          className={clsx(
            'relative flex w-full items-center justify-between py-4 px-[0.5rem] transition-all duration-500 lg:px-[2rem]',
            isMenuDown &&
              'bg-light-bg-accent shadow-navbar dark:border-[#2b2b2b] dark:bg-dark-surface t-xs:py-2'
          )}
        >
          <Link
            href={'/'}
            className={clsx(
              'h-[31px] w-[8.625rem] lg:h-[36px] 2xl:h-[40px]',
              !shouldAnimate && 'relative',
              !isHome && 'relative'
            )}
          >
            <Logo />
          </Link>

          <div
            className={clsx(
              'hidden items-center space-x-10 lg:flex',
              currentPage === '/' && shouldAnimate && 'animate-header-links-opacity'
            )}
            style={{
              marginRight: shouldAnimate ? width : 0,
            }}
          >
            {ROUTES.map(({ label, route }, index) => {
              return (
                <Link
                  key={index}
                  className={clsx(
                    ' relative transition duration-300 dark:text-light-bg-accent/[.5] lg:text-lg 2xl:text-xl',
                    !isLoad && 'after:opacity-0',
                    _theme === 'light' ? 'after:bg-dark-bg' : 'after:bg-light-bg',
                    route === '#become-customer'
                      ? 'font-bold text-light-text-primary hover:!text-[#ec5f3b]	dark:text-light-bg-accent'
                      : "text-light-text-primary/[.5] after:absolute after:-bottom-1 after:h-0.5 after:animate-link-hover-off after:content-[''] hover:after:animate-link-hover-on dark:text-light-bg-accent/[.5]",
                    currentPage.replace(/\/+$/, '') == route &&
                      'after:animate-link-hover-on'
                  )}
                  href={route}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <MobileMenu active={isMenuOpen} routes={ROUTES} onClose={closeMenu} />

          <button
            onClick={openMenu}
            className="animate-header-links-opacity lg:hidden"
            style={{
              marginRight: shouldAnimate ? width : 0,
            }}
          >
            <MenuBtn />
          </button>

          {children}
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
