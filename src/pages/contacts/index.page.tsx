import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Principles, Reviews } from "@widgets/landing";
import { Layout } from "@widgets/layout";

export function Contacts() {
  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <Principles />
        <Reviews />
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  );
}

export default Contacts;
