import { WorksRu, WorksEn } from "@shared/i18n";
import { CASES } from "@shared/lib";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { ICase } from "@shared/lib/types";
import { IconComponent } from "@shared/ui";
import { WorksCard } from "@widgets/works-card";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

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

    setCases(CASES.slice(0, 7));
  }, []);

  // function to get 2 cases more on click
  const getMoreCases = () => {
    setCases(CASES.slice(0, cases.length + 2));
  };

  return (
    <section className="bg-light-surface dark:bg-dark-surface duration-300">
      <div className="container pt-20 pb-[3.5rem] t-xs:pt-10">
        {/* <h2
          className="font-bold text-5xl t-xs:text-[1.375rem]"
          dangerouslySetInnerHTML={{ __html: text.title }}
        /> */}

        <div className="grid grid-cols-3 gap-10 t-xs:[&>*:nth-child(6n+1)]:col-span-1 [&>*:nth-child(6n+1)]:col-span-2 sm:[&>*:nth-child(6n+1)]:pt-[47.3%] t-xs:grid-cols-1 t-xs:mt-6 display t-xs:gap-4">
          {cases.filter((work) => {
              if (locale === 'en' && work.id === 'advanced-rd') {
                return false
              }
              return true;
            }).map((work, index) => (
            <WorksCard key={index} work={work} isLargeImage={index % 6 === 0} />
          ))}
        </div>

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
        {cases.length < CASES.length && (
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
