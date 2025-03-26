import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import {
  CompanyFeatures,
  CompanyHero,
  CompanyMap,
  CompanyTeam,
  CompanyVacancies,
  CompanyVideo,
} from "@widgets/landing/company";
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
            en: "We are Unistory, a software development company. Our main expertise lies in AI and web3 technologies. Our office is located in Almaty, Kazakhstan.",
            ru: "Мы — Unistory, разрабатываем веб-сервисы и мобильные приложения. Главные доменные экспертизы — AI и web3. Офисы находятся в Санкт-Петербурге и Алматы.",
          }}
          title={{
            en: "About Us | Unistory",
            ru: "О компании | Unistory",
          }}
          canonical={canonicalUrl}
        />
      }
    >
      <Layout.Header />
      <Layout.Main className="bg-light-bg dark:bg-dark-bg">
        <CompanyHero />
        <CompanyFeatures />
        <CompanyMap />
        <CompanyTeam />
        <CompanyVideo />
        <CompanyVacancies />
        <Connect />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
}

export default Contacts;
