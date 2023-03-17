import { IconComponent } from '@shared/ui'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Logo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <IconComponent
      key={'logo' + theme}
      name={theme === 'dark' ? 'logoDark' : 'logoLight'}
    />
  )
}
