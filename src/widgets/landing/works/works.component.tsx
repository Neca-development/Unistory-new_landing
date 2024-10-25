import { WorksRu, WorksEn } from "@shared/i18n";
import { CASES, HIDDEN_CASES_ID_EN, LANDING_CASES_ID_RU } from "@shared/lib";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { ICase } from "@shared/lib/types";
import { IconComponent } from "@shared/ui";
import { WorksCard } from "@widgets/works-card";
import WorkCard from "@widgets/work-card/work-card.component";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import clsx from "clsx";
import { AllCasesButton } from "./all-cases-button.component";

export function Works() {
  const { locale } = useRouter();
  const [cases, setCases] = React.useState<ICase[]>([]);
  const isMobile = useDetectDeviceType(647);

  const text = React.useMemo(() => {
    if (locale === "ru") {
      return WorksRu;
    }

    return WorksEn;
  }, [locale]);

  useEffect(() => {
    if (!window) return;

    if (isMobile) {
      setCases(CASES.slice(0, 3));
      return;
    }

    if (locale === "ru") {
      const filtered = [];
      for (const showId of LANDING_CASES_ID_RU) {
        const item = CASES.find((item) => item.id === showId);
        if (item) {
          filtered.push(item);
        }
      }
      setCases(filtered);
      return;
    }

    if (locale === "en") {
      const filtered = CASES.filter((item) => !HIDDEN_CASES_ID_EN.includes(item.id));
      setCases(filtered.slice(0, 7));
      return;
    }
  }, [locale, isMobile]);

  // function to get 2 cases more on click
  const getMoreCases = () => {
    setCases(CASES.slice(0, cases.length + 2));
  };

  return (
    <section className="dark:bg-dark-surface duration-300">
      <div className="container pt-20 pb-[3.5rem] t-xs:pt-10">
        {/* <h2
          className="font-bold text-5xl t-xs:text-[1.375rem]"
          dangerouslySetInnerHTML={{ __html: text.title }}
        /> */}
        {locale === "en" && (
          <div className="grid grid-cols-3 gap-10 t-xs:[&>*:nth-child(6n+1)]:col-span-1 [&>*:nth-child(6n+1)]:col-span-2 sm:[&>*:nth-child(6n+1)]:pt-[47.3%] t-xs:grid-cols-1 t-xs:mt-6 display t-xs:gap-4">
            {cases.map((work, index) => (
              <WorksCard key={index} work={work} isLargeImage={index % 6 === 0} />
            ))}
          </div>
        )}
        {locale === "ru" && (
          <div className="flex justify-between m-md:block">
            <div className="sticky top-10 self-start z-10 m-md:relative m-md:top-0">
              <div className="text-5xl t-xs:text-3xl font-medium">Изменяем мир к лучшему</div>
              <AllCasesButton className=" m-md:hidden" />
            </div>
            <div className="grid grid-cols-2 gap-x-3 m-md:block">
              {cases.map((work, index) => (
                <WorkCard
                  key={index}
                  work={work}
                  className={clsx({
                    "mt-52": index % 2 !== 0 && index === 1,
                    "mt-11": index % 2 == 0 && index !== 0,
                    "mt-64": index % 2 !== 0 && index !== 1,
                  })}
                />
              ))}
            </div>
            <div className="flex justify-center sticky bottom-2 self-start z-10 mt-10 lg:hidden">
              <AllCasesButton />
            </div>
          </div>
        )}

        {locale === "en" && (
          <Link
            href="/cases"
            className="items-center py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base t-xs:hidden flex"
          >
            <IconComponent
              name="arrowRight"
              className="w-10 mr-4 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent t-xs:w-7"
            />
            {text.moreCases}
          </Link>
        )}
        {locale === "en" && cases.length < CASES.length && (
          <button
            onClick={getMoreCases}
            className="t-xs:flex items-center py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base hidden"
          >
            <IconComponent
              name="arrowRight"
              className="w-10 mr-4 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent t-xs:w-7"
            />
            <span>{text.moreCases}</span>
          </button>
        )}
      </div>
    </section>
  );
}
