import { CasesPageRu, CasesPageEn } from "@shared/i18n/cases";
import { CASES, HIDDEN_CASES_ID_EN } from "@shared/lib";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Layout } from "@widgets/layout";
import { WorksCard } from "@widgets/works-card";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useMemo } from "react";

const LARGE_ITEM_STEP = 6;

export function Cases() {
  const router = useRouter();
  const canonicalUrl = router.locale
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`
    : `${process.env.NEXT_PUBLIC_SITE_URL}/ru${router.pathname}`;

  const { locale } = useRouter();

  const filteredCases = useMemo(() => {
    return CASES.filter((work) => {
      if (work.notDisplayInGrid) {
        return false;
      }
      if (locale === "en" && HIDDEN_CASES_ID_EN.includes(work.id)) {
        return false;
      }
      return true;
    });
  }, [locale]);

  const langData = useMemo(() => {
    return locale === "ru" ? CasesPageRu : CasesPageEn;
  }, [locale]);

  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "Check out our experiences working with clients to achieve business goals with AI / ML / web3 / blockchain solutions.",
            ru: "Наши проекты — веб-сервисы и мобильные приложения с AI / ML / blockchain / web3 интеграциями.",
          }}
          title={{
            en: "Projects | Unistory",
            ru: "Кейсы | Unistory",
          }}
          canonical={canonicalUrl}
        />
      }
    >
      <Layout.Header />
      <Layout.Main>
        <section className="mt-16 container pb-[7.5rem] t-xs:pb-16 t-xs:mt-8">
          <h2 className="font-bold text-5xl t-xs:text-4xl">{langData.title}</h2>

          <div className="grid grid-cols-3 gap-10 mt-16 t-xs:gap-8 t-xs:mt-8 t-xs:grid-cols-1">
            {filteredCases.map((work, index) => (
              <WorksCard
                key={index}
                work={work}
                isLargeImage={index % LARGE_ITEM_STEP === 0}
                additionalClassnames={clsx(
                  "sm:[&:nth-child(10n+1)]:col-span-2 sm:[&:nth-child(10n+7)]:col-span-2 sm:[&:nth-child(10n+1)]:pt-[47.3%] sm:[&:nth-child(10n+7)]:pt-[47.3%] "
                )}
              />
            ))}
          </div>
        </section>
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  );
}

export default Cases;
