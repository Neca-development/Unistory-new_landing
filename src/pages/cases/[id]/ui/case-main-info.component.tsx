import { ICase } from '@shared/lib/types'
import { useRouter } from 'next/router'

interface ICaseInfoItemProps {
  data?: ICase['main'][0]
}

function CaseInfoItem({ data }: ICaseInfoItemProps) {
  const {locale} = useRouter()
  
  return (
    <section className='mb-[7.5rem] last:mb-0'>
      <div className='container'>
        <article className='max-w-[52.5rem]'>
          <h2 className='font-bold text-[2.875rem] whitespace-pre-line'>
            {data?.title[locale || 'ru']}
          </h2>
          {data?.text?.map((item, idx) => (
            <div key={idx} className='mt-10'>
              <h3 className='font-bold text-3xl mb-5'>{item.subtitle ? item.subtitle[locale || 'ru'] : ''}</h3>
              <p
                className='text-2xl leading-10'
                dangerouslySetInnerHTML={{ __html: item.text ? item.text[locale || 'ru'] as any : ''}}
              />
            </div>
          ))}
        </article>
      </div>
      {data?.banner && (
        <img
          src={data.banner}
          className='w-full h-auto object-cover mt-[7.5rem]'
        />
      )}
    </section>
  )
}

interface ICaseMainInfoProps {
  data?: ICase['main']
}
export function CaseMainInfo({ data }: ICaseMainInfoProps) {
  return (
    <div className='case-description bg-light-bg-accent dark:bg-dark-bg-accent pt-[7.5rem]'>
      {data?.map((item, idx) => (
        <CaseInfoItem key={idx} data={item} />
      ))}
    </div>
  )
}
