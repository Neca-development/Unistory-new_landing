import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import * as React from 'react'

export interface IFooterProperties extends React.ComponentProps<'footer'> {
  showAddress?: boolean
}

export const Footer = React.memo((props: IFooterProperties) => {
  const { className, showAddress = false } = props

  return (
    <footer className={clsx('bg-dark-surface', className)}>
      <div
        className={clsx(
          'container pb-6 text-dark-text-primary',
          showAddress ? 'pt-14' : 'pt-9'
        )}
      >
        <div className='flex items-start'>
          {showAddress && (
            <>
              <div className='flex flex-col space-y-3 w-[18.125rem]'>
                <p className='text-2xl font-medium'>Санкт-Петербург</p>
                <a
                  href='tel:+79876543210'
                  className='text-dark-text-primary text-base'
                >
                  +7 911 741 7477
                </a>
                <p className='opacity-50 text-base'>
								 ул. Шпалерная 60 литера Б, офис 98-Н  г. Санкт-Петербург, Россия, 191015
                </p>
              </div>
              <div className='flex flex-col space-y-3 w-[18.125rem] ml-6'>
                <p className='text-2xl font-medium'>Алматы</p>
                <a
                  href='tel:+79876543210'
                  className='text-dark-text-primary text-base'
                >
                  +7 911 741 7477
                </a>
                <p className='opacity-50 text-base'>
								 ул. Розыбакиева 289/1, офис 36, г. Алматы, Казахстан, 050060
                </p>
              </div>
            </>
          )}

          <div
            className={clsx(
              showAddress
                ? 'ml-14 space-y-7'
                : 'flex justify-between items-center grow-[1]'
            )}
          >
            <h4 className='font-medium text-2xl'>
              Из классной идеи <br /> в безумно отличный продукт
            </h4>
            <div className='flex items-center space-x-6 opacity-50'>
              <a rel='nofollow' href='https://t.me/unistory_app' target='_blank'>
                <IconComponent name='telegram' className='w-6' />
              </a>
              <a rel='nofollow' href='https://wa.me/89117417477' target='_blank'>
                <IconComponent name='whatsApp' className='w-6' />
              </a>
              <a rel='nofollow' href='https://clutch.co/profile/unistory' target='_blank'>
                <IconComponent name='clutch' className='w-[4.375rem]' />
              </a>
              <a rel='nofollow' href='https://www.upwork.com/ag/unistory/' target='_blank'>
                <IconComponent name='upwork' className='w-20' />
              </a>
            </div>
          </div>
        </div>

        <hr className='mt-8 mb-6 border-2 text-[#2b2b2b]' />

        <div className='flex items-center justify-between'>
          <IconComponent name='logoDarkOutline' className='w-[6.5rem]' />
          <p className=' opacity-50 text-xs'>
            &copy; {new Date().getFullYear()} Unistory
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
