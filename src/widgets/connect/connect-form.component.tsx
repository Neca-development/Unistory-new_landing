import { Checkbox, IconComponent, Input } from '@shared/ui'
import React from 'react'

const contactMethods = ['E-mail', 'Phone number', 'WhatsApp', 'Telegram']

export default function ConnectForm() {
  return (
    <form className='flex flex-col space-y-6'>
      <Input placeholder='Name' type='text' required />
      <Input placeholder='Company' type='text' required />

      <div className='grid grid-cols-2 gap-10'>
        <Input placeholder='E-mail' type='email' required />
        <Input placeholder='Phone number' type='tel' required />
      </div>

      <div className='py-8 text-xl'>
        <p>Contact preference</p>
        <div className='mt-4 flex items-center space-x-8'>
          {contactMethods.map((method, idx) => (
            <Checkbox key={idx} name={method} />
          ))}
        </div>
      </div>

      <Input placeholder='Describe your project' type='text' required />

      <label className='cursor-pointer flex items-center space-x-3 py-2'>
        <div>
          <input type='file' name='file' id='file' className='hidden' />
          <IconComponent name='clip' className='w-8' />
        </div>
        <div className='flex flex-col text-xl leading-7'>
						Attach a file with Terms of Reference
          <span className='text-sm opacity-50'>
						Maximum file size 24 MB
          </span>
        </div>
      </label>

      <button
        type='submit'
        className='!mt-16 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold'
      >
        Send
      </button>

      <span className='text-sm text-center opacity-50 px-4'>
				By clicking the button, you consent to the processing of personal data
				and agree to the privacy policy.
      </span>
    </form>
  )
}
