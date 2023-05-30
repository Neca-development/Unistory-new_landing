import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import { ICase } from "@shared/lib/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function CaseHero({ data }: { data: ICase | undefined }) {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  const findMonths = (value: number) => {
    if (locale === "en") return "months";

    if (value <= 1) return "месяц";
    if (value <= 3 && value > 1) return "месяца";
    return "месяцев";
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <h1 className="container mt-20 text-[4rem] leading-[4.875rem] font-bold whitespace-pre-line t-xs:text-[1.75rem] t-xs:leading-[2rem] t-xs:mt-6">
        {data.heroTitle[locale || "ru"]}
      </h1>

      <Image
        src={data.banner.desktop}
        width={2880}
        height={1060}
        className="w-full object-cover mt-[4rem] t-xs:mt-6 t-xs:h-[12.625rem]"
        alt={data.title}
        priority
      />

      {data.showCategoriesOnPage && (
        <div className="container mt-10 flex flex-wrap items-center gap-x-4 gap-y-6 t-xs:mt-5 t-xs:gap-y-2">
          {data.categories[locale || "ru"]?.map((tag, idx) => (
            <p
              key={idx}
              className="px-4 py-2 text-2xl bg-light-bg-accent dark:bg-dark-surface t-xs:px-2 t-xs:py-1 t-xs:text-base"
            >
              {tag}
            </p>
          ))}
        </div>
      )}

      <div className="container">
        <h2 className="mt-20 text-light-text-secondary dark:text-dark-text-secondary text-2xl t-xs:mt-10 t-xs:text-xl">
          {langData.goal}
        </h2>
        <p className="max-w-[52.5rem] mt-6 text-2xl leading-10 t-xs:text-base t-xs:mt-4 t-xs:leading-6">
          {data.description[locale || "ru"]}
        </p>
        <ul className="mt-40 flex gap-x-40 t-xs:mt-20 t-xs:block">
          <li className="t-xs:mb-8">
            <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl t-xs:text-base">
              {langData.hero.budget}
            </h3>
            <b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block t-xs:text-2xl t-xs:leading-7">
              {data.params.budget[locale || "ru"]?.toLocaleString("ru-RU")}{" "}
              {locale === "ru" ? "₽" : "$"}
            </b>
          </li>
          <li className="t-xs:mb-8">
            <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl t-xs:text-base">
              {langData.hero.timeline.label}
            </h3>
            <b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block t-xs:text-2xl t-xs:leading-7">
              {data.params.period} {findMonths(data.params.period)}
            </b>
          </li>
          <li className="t-xs:mb-8">
            <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl t-xs:text-base">
              {langData.hero.year}
            </h3>
            <b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2 block t-xs:text-2xl t-xs:leading-7">
              {data.params.year}
            </b>
          </li>
        </ul>
      </div>
    </>
  );
}
