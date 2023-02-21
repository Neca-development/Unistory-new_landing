import { IWorksListConstant } from '@shared/lib'
import { CaseCategoryIcon } from '@shared/ui'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface IWorksCardInterface {
  work: IWorksListConstant
}

export function WorksCard(props: IWorksCardInterface) {
  const { work } = props

  return (
    <Link
      className={clsx(
        `noise rounded-sm p-6 pt-4 h-[25rem] bg-${work.cardBgClass} bg-cover flex flex-col bg-center`,
        work.additionalClassnames
      )}
      href={work.link}
    >
      <div className='flex items-center space-x-2'>
        {work.icons.map((icon, idx) => (
          <CaseCategoryIcon key={idx} icon={icon} variant={work.textColor} />
        ))}
      </div>
      <div
        className={clsx(
          'mt-auto',
          work.textColor === 'white' && 'text-pale-text',
          work.textColor === 'black' && 'text-black-text'
        )}
      >
        <h3 className='font-bold text-2xl'>{work.title}</h3>
        <p className='text-base mt-1'>{work.description}</p>
      </div>
    </Link>
  )
}
