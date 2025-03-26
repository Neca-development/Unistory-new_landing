import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { ContactsHero, ContactsAddresses } from "@widgets/landing";
import { Layout } from "@widgets/layout";
import { useRouter } from "next/router";

export function Contacts() {
  const router = useRouter();
  const canonicalUrl = router.locale
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`
    : `${process.env.NEXT_PUBLIC_SITE_URL}/ru${router.pathname}`;

  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "Out software development company is based in Almaty, Kazakhstan.",
            ru: "Офисы студии разработки Unistory расположены в Санкт-Петербурге и Алматы.",
          }}
          title={{
            en: "Contact us | Unistory",
            ru: "Контакты | Unistory",
          }}
          canonical={canonicalUrl}
        />
      }
    >
      <Layout.Header />
      <Layout.Main>
        <ContactsHero />
        <ContactsAddresses />
        <Connect />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
}

export default Contacts;
