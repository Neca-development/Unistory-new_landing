import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import type { ICase, ILang } from "@shared/lib/types";
import { CustomHeroes } from "@shared/lib/types";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Layout } from "@widgets/layout";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { CaseMainInfo } from "./ui/case-main-info.component";
import { BitGraduate } from "./ui/custom-hero/bit-graduate.component";
import { CaseHero } from "./ui/hero.component";
import { Links } from "./ui/links.component";
import { OtherCases } from "./ui/other-cases.component";
import { CaseReview } from "./ui/review.component";
import { Stack } from "./ui/stack.component";
import { Team } from "./ui/team.component";
import { HIDDEN_CASES_ID_EN } from "@shared/lib";

const getMetaTitle = (title: string | ILang<string>, titleLocale: "en" | "ru"): string => {
  if (typeof title !== "string") {
    if (titleLocale) return title[titleLocale];
  } else {
    return title;
  }
  return "";
};

export function Case(props: { caseData: ICase; otherCases: ICase[] }) {
  const { caseData, otherCases } = props;
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  const filteredOtherCases = useMemo(() => {
    if (locale === "en") {
      return otherCases.filter((item) => !HIDDEN_CASES_ID_EN.includes(item.id));
    }
    return otherCases;
  }, [otherCases]);

  const renderHero = () => {
    switch (caseData.customHero) {
      case CustomHeroes.BitGraduate: {
        return <BitGraduate data={caseData} />;
      }
      default: {
        return <CaseHero data={caseData} />;
      }
    }
  };

  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: caseData?.metaDescription?.en ?? caseData.heroTitle.en,
            ru: caseData?.metaDescription?.ru ?? caseData.heroTitle.ru,
          }}
          title={{
            en: caseData?.metaTitle?.en ?? getMetaTitle(caseData.title, "en"),
            ru: caseData?.metaTitle?.ru ?? getMetaTitle(caseData.title, "ru"),
          }}
        />
      }
    >
      <Layout.Header />
      <Layout.Main>
        {renderHero()}
        {caseData.technologies && <Stack data={caseData.technologies} />}
        <CaseMainInfo data={caseData?.main} />
        {caseData.links && <Links links={caseData.links} />}
        {caseData.review && <CaseReview data={caseData} />}
        {caseData.team && <Team title={langData.members} data={caseData.team} />}
        {!caseData.disableOtherProjects && (
          <OtherCases title={langData.other} otherCases={filteredOtherCases} />
        )}
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  );
}

export default Case;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { CASES } = await import("@shared/lib");

  const caseData = CASES.find((c) => c.id === (params?.id as string));
  const otherCases = CASES.filter((c) => c.id !== (params?.id as string));

  return {
    props: {
      caseData,
      otherCases,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { CASES } = await import("@shared/lib");

  const paths = CASES.map((c) => ({
    params: { id: c.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
