import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import { ICase } from "@shared/lib/types";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Layout } from "@widgets/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { CaseMainInfo } from "./ui/case-main-info.component";
import { CaseHero } from "./ui/hero.component";
import OtherCases from "./ui/other-cases.component";
import CaseReview from "./ui/review.component";
import { Stack } from "./ui/stack.component";
import { Team } from "./ui/team.component";

export function Case(props: { caseData: ICase; otherCases: ICase[] }) {
  const { caseData, otherCases } = props;

  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <CaseHero data={caseData} />
        <Stack data={caseData?.technologies} />
        <CaseMainInfo data={caseData?.main} />
        {caseData?.review && <CaseReview data={caseData} />}
        <Team title={langData.members} data={caseData?.team} />
        <OtherCases title={langData.other} otherCases={otherCases} />
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
