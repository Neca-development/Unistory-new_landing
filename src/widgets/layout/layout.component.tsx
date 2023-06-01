import { useThemeContext } from '@shared/lib'
import type { Meta } from '@shared/meta'
import * as React from 'react'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

import useScrollbarSize from "react-scrollbar-size";
import { useAnimationStore } from "@shared/lib/store";

export interface ILayoutProperties extends React.ComponentProps<'div'> {
  Meta: React.ReactElement<typeof Meta>
}

export const Layout = (props: ILayoutProperties) => {
  const { children, Meta, ...rest } = props
  const {width } = useScrollbarSize();
  const {shouldAnimate} = useAnimationStore()

  const { temperatureTheme } = useThemeContext()

  return (
    <div className={temperatureTheme}>
      <div
        className="h-full bg-light-bg bg-[url('/assets/images/Pattern.png')] dark:bg-dark-bg"
        style={{paddingRight: shouldAnimate ? width : 0}}
      >
        {Meta}
        <div {...rest} className="flex min-h-screen flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

Layout.Header = Header
Layout.Footer = Footer
Layout.Main = Main
