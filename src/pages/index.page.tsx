import { Meta } from '@shared/meta'
import { Hero, Services } from '@shared/ui'
import { Layout } from '@widgets/layout'

export function Home() {
  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <Hero />
        <Services />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
