import { findMonths } from "@shared/lib";
import type { ICase, ISingleCase } from "@shared/lib/types";
import clsx from "clsx";

interface ICaseGoalProperties {
  langData: ISingleCase;
  data: ICase;
  locale?: string;
  containerClassNames?: string;
}

export const CaseGoal = (props: ICaseGoalProperties) => {
  const { langData, data, locale, containerClassNames } = props;

  return (
    <div className={clsx("container", containerClassNames)}>
      <h2 className="mt-20 text-[2.875rem] font-bold t-xs:mt-10 t-xs:text-2xl">{langData?.goal}</h2>
      <div className="max-w-[52.5rem] text-2xl leading-10 t-xs:text-base t-xs:leading-6">
        <p className="mt-6 t-xs:mt-4 whitespace-pre-line">{data.description[locale || "ru"]}</p>
        {data.goalPoints && (
          <ul className="mt-6">
            {data.goalPoints.map((point, index) => (
              <li key={index} className="flex [&:not(:last-child)]:mb-2">
                <span className="mr-4 mt-3 h-0.5 w-5 min-w-[1.25rem] bg-light-text-primary dark:bg-light-bg-accent sm:mt-5"></span>
                {point[locale === "ru" ? "ru" : "en"]}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="mt-20 flex gap-x-40 t-xs:mt-10 t-xs:block">
        <li className="t-xs:mb-8">
          <h3 className="text-2xl text-light-text-secondary dark:text-dark-text-secondary t-xs:text-base">
            {langData.hero.budget}
          </h3>
          <b className="mt-2 block text-[2.125rem] text-light-text-primary dark:text-dark-text-primary t-xs:text-2xl t-xs:leading-7">
            {data.params.budget[locale || "ru"]?.toLocaleString("ru-RU")}{" "}
            {locale === "ru" ? "₽" : "$"}
          </b>
        </li>
        <li className="t-xs:mb-8">
          <h3 className="text-2xl text-light-text-secondary dark:text-dark-text-secondary t-xs:text-base">
            {langData.hero.timeline.label}
          </h3>
          <b className="mt-2 block text-[2.125rem] text-light-text-primary dark:text-dark-text-primary t-xs:text-2xl t-xs:leading-7">
            {data.params.period} {findMonths(data.params.period, locale)}
          </b>
        </li>
        <li className="t-xs:mb-10">
          <h3 className="text-2xl text-light-text-secondary dark:text-dark-text-secondary t-xs:text-base">
            {langData.hero.year}
          </h3>
          <b className="mt-2 block text-[2.125rem] text-light-text-primary dark:text-dark-text-primary t-xs:text-2xl t-xs:leading-7">
            {data.params.year}
          </b>
        </li>
      </ul>
    </div>
  );
};
