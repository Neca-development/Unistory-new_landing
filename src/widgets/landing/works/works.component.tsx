import { CASES, LANDING_CASES_ID_EN, LANDING_CASES_ID_RU } from "@shared/lib";
import { ICase } from "@shared/lib/types";
import WorkCard from "@widgets/work-card/work-card.component";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { AllCasesButton } from "./all-cases-button.component";
import { WorksRu, WorksEn } from "@shared/i18n";

export function Works() {
  const { locale } = useRouter();
  const [cases, setCases] = useState<ICase[]>([]);

  const text = useMemo(() => {
    return locale === "ru" ? WorksRu : WorksEn;
  }, [locale]);

  useEffect(() => {
    const filterCases = (caseIds: string[]) => {
      return CASES.filter((item) => caseIds.includes(item.id));
    };

    const filteredCases =
      locale === "ru" ? filterCases(LANDING_CASES_ID_RU) : filterCases(LANDING_CASES_ID_EN);
    setCases(filteredCases);
  }, [locale]);

  return (
    <section className="dark:bg-dark-surface duration-300">
      <div className="container pt-20 pb-[3.5rem] t-xs:pt-10">
        <div className="flex justify-between m-md:block">
          <div className="sticky top-10 self-start z-10 m-md:relative m-md:top-0">
            <div className="text-5xl t-xs:text-3xl font-medium">{text.title}</div>
            <AllCasesButton text={text.allCases} className=" m-md:hidden" />
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
            <AllCasesButton text={text.allCases} />
          </div>
        </div>
      </div>
    </section>
  );
}
