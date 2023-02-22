import React from 'react'
import ConnectForm from './connect-form.component'

export function Connect() {
  return (
    <section className='bg-dark-surface'>
      <div className='container pt-16 pb-[5.5rem] grid grid-cols-[1fr_38.75rem] gap-[10rem] text-dark-text-primary'>
        <div>
          <h2 className='font-bold text-5xl leading-[3.25rem]'>
            Давайте воплотим вашу идею в жизнь
          </h2>
          <p className='mt-9 text-2xl leading-10'>
            Заполните форму справа или напишите на{' '}
            <a
              href='mailto:hello@unistory.team'
              className='text-primary-s font-bold'
            >
              hello@unistory.team
            </a>
            . Мы свяжемся с вами прямо сейчас!
          </p>
        </div>

        <ConnectForm />
      </div>
    </section>
  )
}
