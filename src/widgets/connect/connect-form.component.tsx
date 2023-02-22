import { Checkbox, IconComponent, Input } from '@shared/ui'
import React from 'react'

const contactMethods = ['Эл. почта', 'Телефон', 'WhatsApp', 'Telegram']

export default function ConnectForm() {
  return (
    <form className='flex flex-col space-y-6'>
      <Input placeholder='Имя' type='text' required />
      <Input placeholder='Компания' type='text' required />

      <div className='grid grid-cols-2 gap-10'>
        <Input placeholder='Эл. почта' type='email' required />
        <Input placeholder='Телефон' type='tel' required />
      </div>

      <div className='py-8 text-xl'>
        <p>Предпочтительный способ связи</p>
        <div className='mt-4 flex items-center space-x-8'>
          {contactMethods.map((method, idx) => (
            <Checkbox key={idx} name={method} />
          ))}
        </div>
      </div>

      <Input placeholder='Расскажите о проекте' type='text' required />

      <label className='cursor-pointer flex items-center space-x-3 py-2'>
        <div>
          <input type='file' name='file' id='file' className='hidden' />
          <IconComponent name='clip' className='w-8' />
        </div>
        <div className='flex flex-col text-xl leading-7'>
          Прикрепить файл с ТЗ
          <span className='text-sm opacity-50'>
            Максимальный размер файла 24 МБ
          </span>
        </div>
      </label>

      <button
        type='submit'
        className='!mt-16 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold'
      >
        Отправить
      </button>

      <span className='text-sm text-center opacity-50 px-4'>
        Нажимая на кнопку, вы даете согласие на обработку персональных данных
        и соглашаетесь с политикой конфиденциальности.
      </span>
    </form>
  )
}
