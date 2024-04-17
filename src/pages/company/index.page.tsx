import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { CompanyFeatures, CompanyHero, CompanyTeam } from "@widgets/landing/company";
import { CompanyVideo } from "@widgets/landing/company/video.component";
import { Layout } from "@widgets/layout";

export function Contacts() {
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
        />
      }
    >
      <Layout.Header />
      <Layout.Main>
        <CompanyHero />
        <CompanyFeatures />
        <CompanyTeam />
        <CompanyVideo />
        <Connect />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
}

export default Contacts;
