import type { Dispatch, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

export type TTheme = 'winter' | 'summer'

export interface IThemeContext {
  temperatureTheme: TTheme
  setTemperatureTheme: Dispatch<SetStateAction<TTheme>>
  textClassName: {
    [className: string]: boolean
  }
}

export const ThemeContext = createContext<IThemeContext>({
  setTemperatureTheme: () => {},
  temperatureTheme: 'summer',
  textClassName: {
    'dark:text-primary-s': true,
    'text-primary-s': true,
    'text-light-text-primary': false,
  },
})

export const ThemeContextProvider = ({ children }: any) => {
  const [temperatureTheme, setTemperatureTheme] = useState<TTheme>('summer')

  return (
    <ThemeContext.Provider
      value={{
        setTemperatureTheme,
        temperatureTheme,
        textClassName: {
          'dark:text-primary-s': true,
          'text-primary-s': temperatureTheme === 'winter',
          'text-light-text-primary': temperatureTheme !== 'winter',
          'duration-300': true
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
