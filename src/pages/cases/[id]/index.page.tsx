import { SingleCaseEn, SingleCaseRu } from '@shared/i18n/cases'
import { CASES } from '@shared/lib'
import { Meta } from '@shared/meta'
import { Connect } from '@widgets/connect'
import { Layout } from '@widgets/layout'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { CaseMainInfo } from './ui/case-main-info.component'
import { CaseHero } from './ui/hero.component'
import OtherCases from './ui/other-cases.component'
import CaseReview from './ui/review.component'
import { Stack } from './ui/stack.component'
import { Team } from './ui/team.component'

function getCaseData(id: string) {
  return CASES.find((item) => item.id === id)
}

export function Case() {
  const { id } = useRouter().query as {
    id: string
  }
  const {locale} = useRouter()

  const caseData = getCaseData(id)

  const langData = useMemo(() => {
    return locale === 'ru' ? SingleCaseRu : SingleCaseEn
  }, [locale])

  return (
    <Layout Meta={<Meta description='Unistory next' title='Unistory' />}>
      <Layout.Header />
      <Layout.Main>
        <CaseHero data={caseData!} />
        <Stack data={caseData?.technologies} />
        <CaseMainInfo data={caseData?.main} />
        {caseData?.review && <CaseReview data={caseData} />}
        <Team title={langData.members} data={caseData?.team} />
        <OtherCases title={langData.other} currentId={id} />
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  )
}

export default Case
