import { ROUTES } from '@shared/lib'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import * as React from 'react'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props
  const { theme } = useTheme()

  return (
    <header {...props} className={clsx('relative flex w-full', className)}>
      <div className="container flex justify-between py-4">
        <Link href={'/'} className="w-[8.625rem]">
          <IconComponent name={theme === 'dark' ? 'logoDark' : 'logoLight'} />
        </Link>

        <div className="flex items-center space-x-10">
          {ROUTES.map(({ label, route }, index) => {
            return (
              <Link
                key={index}
                className="text-light-text-secondary dark:text-dark-text-secondary"
                href={route}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {children}
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
