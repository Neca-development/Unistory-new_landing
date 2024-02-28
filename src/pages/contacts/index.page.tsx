import { Meta } from "@shared/meta";
import { ContactsHero, ContactsAddresses } from "@widgets/landing";
import { Layout } from "@widgets/layout";

export function Contacts() {
  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <ContactsHero />
        <ContactsAddresses />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
}

export default Contacts;
