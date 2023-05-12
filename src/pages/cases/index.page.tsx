import { CasesPageRu, CasesPageEn } from "@shared/i18n/cases";
import { CASES } from "@shared/lib";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Layout } from "@widgets/layout";
import { WorksCard } from "@widgets/works-card";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function Cases() {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? CasesPageRu : CasesPageEn;
  }, [locale]);

  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <section className="mt-16 container pb-[7.5rem] t-xs:pb-16 t-xs:mt-8">
          <h2 className="font-bold text-5xl t-xs:text-4xl">{langData.title}</h2>

          <div className="grid grid-cols-3 gap-10 mt-16 t-xs:gap-8 t-xs:mt-8 t-xs:grid-cols-1">
            {CASES.map((work, index) => (
              <WorksCard
                key={index}
                work={work}
                isLargeImage={index % 6 === 0}
                additionalClassnames={clsx(
                  "[&:nth-child(6n+1)]:col-span-2 t-xs:[&:nth-child(6n+1)]:!col-span-1"
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
