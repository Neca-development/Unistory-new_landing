import { Meta } from '@shared/meta'

import { Hero, Services, Works } from '@widgets/landing'
import { Layout } from '@widgets/layout'

export function Home() {
  return (
    <Layout Meta={<Meta description='Unistory next' title='Unistory' />}>
      <Layout.Header />
      <Layout.Main>
        <Hero />
        <Services />
        <Works />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
