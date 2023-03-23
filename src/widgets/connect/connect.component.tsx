import React, { useMemo } from 'react'
import ConnectForm from './connect-form.component'
import {FormEn, FormRu} from "@shared/i18n"
import { useRouter } from 'next/router'

export function Connect() {
  const {locale}  = useRouter()
    
  const data = useMemo(() => {
    return locale === 'en' ?  FormEn : FormRu
  }, [locale])
  
  return (
    <section className='bg-dark-surface'>
      <div className='container pt-16 pb-[5.5rem] grid grid-cols-[1fr_38.75rem] gap-[10rem] text-dark-text-primary'>
        <div>
          <h2 className='font-bold text-5xl leading-[3.25rem]'>
						{data.slogan}
          </h2>
          <p className='mt-9 text-2xl leading-10'>
						{data.description.beforeEmail}{' '}
            <a
              href='mailto:contact@unistory.app'
              className='text-primary-s font-bold'
            >
              contact@unistory.app
            </a>
            . {data.description.afterEmail}
          </p>
        </div>

        <ConnectForm />
      </div>
    </section>
  )
}
