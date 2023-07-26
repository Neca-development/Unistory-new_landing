import Logo from '@public/assets/images/cases/bit-graduate/logo.svg'
import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import type { ICase } from '@shared/lib/types'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { CaseGoal } from '../case-goal.component'

interface IBitGraduateProperties {
  data: ICase
}

export const BitGraduate = (props: IBitGraduateProperties) => {
  const { data } = props

  const { locale } = useRouter()

  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])

  if (!data) {
    return <></>
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0.0001)
    }, 0)
  }, [])

  return (
    <>
      <motion.div
        className="-mt-[4.5rem] flex h-screen w-full items-center bg-[#fff]"
        animate={{
          backgroundColor: '#CCDCFD',
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
      >
        <div className="container relative h-[70%]">
          <motion.div
            className="absolute top-1/2 left-1/2 flex items-center gap-2 whitespace-nowrap text-bg-gradient"
            initial={{
              transform: 'translate(-50%, -50%)',
              fontSize: '6rem',
            }}
            animate={{
              fontSize: '2.5rem',
              top: 0,
              left: '5rem',
              transform: 'translate(0, 0)',
              transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 4,
              },
            }}
          >
            <motion.div
              initial={{
                width: '10rem',
              }}
              animate={{
                width: '4rem',
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 4,
                },
              }}
              className="relative aspect-[4/3]"
            >
              <Logo className="h-full w-full" />
            </motion.div>
            <motion.div
              className="overflow-hidden"
              initial={{
                width: 0,
              }}
              animate={{
                width: 'fit-content',
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 1,
                },
              }}
            >
              <p>Bit Graduate</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <CaseGoal
        data={data}
        locale={locale}
        langData={langData}
        containerClassNames="mb-12"
      />
    </>
  )
}
