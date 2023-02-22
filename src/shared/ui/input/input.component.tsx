import React from 'react'

interface IInputProps {
  placeholder: string
  type: 'text' | 'email' | 'tel'
  required?: boolean
}

export function Input(props: IInputProps) {
  const { placeholder, type, required } = props

  return (
    <label className='text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7'>
      <input
        className='bg-[inherit] w-full outline-none placeholder:text-dark-text-primary'
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}
