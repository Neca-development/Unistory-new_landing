import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import Fancybox from "@shared/lib/hocs/fancybox";
import type { ICase } from "@shared/lib/types";
import { IconComponent } from "@shared/ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import { CaseGoal } from "./case-goal.component";

export function CaseHero({ data }: { data: ICase | undefined }) {
  const { locale } = useRouter();
  const [width, setWidth] = useState<number>(0);

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (!data) {
    return <></>;
  }

  const altText =
    typeof data.title === "object" ? (data.title[locale || "ru"] as string) : data.title;

  const heroDesktopBanner =
    typeof data.heroBanner.desktop === "object"
      ? (data.heroBanner.desktop[locale || "ru"] as string)
      : data.heroBanner.desktop;

  const heroMobileBanner =
    typeof data.heroBanner.mob === "object"
      ? (data.heroBanner.mob[locale || "ru"] as string)
      : data.heroBanner.mob;

  return (
    <>
      <div className="container mt-16 md:flex md:justify-between	 t-xs:mt-10">
        <h1 className="whitespace-pre-line text-[4rem] font-bold leading-[4.875rem] t-xs:text-[1.75rem] t-xs:leading-[2rem]">
          {data.heroTitle[locale || "ru"]}
        </h1>
        {data.projectUrl && (
          <a
            className="mt-5 flex h-fit items-center text-light-text-primary/[0.5] duration-200 hover:text-light-text-primary dark:text-light-bg-accent/[0.5] dark:hover:text-light-bg-accent sm:mt-10 md:ml-10 md:mt-auto"
            href={data.projectUrl}
            rel="nofollow noreferrer"
            target="_blank"
          >
            <span className="mr-2 text-base sm:mr-4 sm:text-[20px] sm:leading-[24px] lg:text-2xl">
              {data.projectUrlTitle == null ? data.projectUrl : data.projectUrlTitle}
            </span>
            <IconComponent
              name="caseProjectLink"
              className="h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]"
            />
          </a>
        )}
      </div>

      {width >= 992 ? (
        <Image
          src={heroDesktopBanner}
          width={2880}
          height={1060}
          className="mt-[4rem] w-full object-cover t-xs:mt-10"
          alt={altText}
          priority
        />
      ) : (
        <Fancybox>
          <a href={heroMobileBanner} data-fancybox>
            <Image
              src={heroMobileBanner}
              width={2880}
              height={1060}
              className="mt-[4rem] w-full object-cover t-xs:mt-10"
              alt={altText}
              priority
            />
          </a>
        </Fancybox>
      )}

      {data.showCategoriesOnPage && (
        <div className="container mt-10 flex flex-wrap items-center gap-x-4 gap-y-6 t-xs:mt-5 t-xs:gap-y-2">
          {data.categories[locale || "ru"]?.map((tag, index) => (
            <p
              key={index}
              className="bg-light-bg-accent px-4 py-2 text-2xl dark:bg-dark-surface t-xs:px-2 t-xs:py-1 t-xs:text-base"
            >
              {tag}
            </p>
          ))}
        </div>
      )}

      {data.params && <CaseGoal data={data} langData={langData} locale={locale} />}
    </>
  );
}
