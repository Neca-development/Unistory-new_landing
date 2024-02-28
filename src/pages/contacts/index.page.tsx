import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { ContactsHero } from "@widgets/landing";
import { Layout } from "@widgets/layout";

export function Contacts() {
  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <ContactsHero />
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  );
}

export default Contacts;
