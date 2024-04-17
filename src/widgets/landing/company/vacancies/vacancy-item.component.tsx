import { CompanyVacanciesRu, CompanyVacanciesEn } from "@shared/i18n";
import { IVacancy } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useMemo } from "react";

interface IVacancyItem {
  locale: "ru" | "en";
  vacancy: IVacancy;
  accordionOpenedId: number | undefined;
  onAccordionButtonCLick: () => void;
}

export const VacancyItem = (props: IVacancyItem) => {
  const { locale, vacancy, accordionOpenedId, onAccordionButtonCLick } = props;

  const vacanciesData = useMemo(() => {
    return locale === "ru" ? CompanyVacanciesRu : CompanyVacanciesEn;
  }, [locale]);

  return (
    <div className="py-4 border-b-[1px] border-[#EDEAE8] dark:border-[#353535]">
      <div className="flex items-center justify-between">
        <div className="w-[calc(100%_-_3.5rem)] md:flex md:items-center md:space-x-3">
          <h3 className="block mb-1 text-lg font-semibold md:inline md:mb-0 md:w-2/5 lg:text-2xl">
            {vacancy.post[locale]}
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary inline text-xs mr-4 md:w-[30%] md:text-sm md:mr-0">
            {vacancy.location[locale]}
          </p>
          <p className="text-light-text-secondary dark:text-dark-text-secondary inline text-xs md:w-[30%] md:text-sm">
            {vacancy.format[locale]}
          </p>
        </div>
        <div
          className={clsx(
            "w-10 h-10 text-[#838383] cursor-pointer transition-all hover:!text-bg-accent",
            accordionOpenedId === vacancy.id ? "rotate-180" : ""
          )}
          onClick={onAccordionButtonCLick}
        >
          <IconComponent name="accordionIcon" className="w-full h-full" />
        </div>
      </div>
      <div
        className={clsx(
          "mt-4 space-y-4 lg:space-y-8",
          accordionOpenedId === vacancy.id ? "block" : "hidden"
        )}
      >
        <div className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary text-xs md:text-sm">
          {vacancy.description[locale].map((descriptionString, index) => (
            <p key={`desc-${index}`}>{descriptionString}</p>
          ))}
        </div>
        <div className="space-y-4 lg:space-y-8">
          {vacancy.jobPoints[locale].map((point) => (
            <div>
              <p className="font-semibold mb-2 lg:mb-4 lg:text-lg">{point.title}</p>
              <ul className="text-xs text-light-text-secondary dark:text-dark-text-secondary space-y-2 list-disc pl-4 md:text-sm">
                {point.listItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <p className="font-semibold mb-2 lg:mb-4 lg:text-lg">{vacanciesData.vacancyCTA.title}</p>
          <p className="text-xs mb-4 dark:text-dark-text-secondary lg:text-sm">
            {vacanciesData.vacancyCTA.desc}
          </p>
          <a
            href="https://t.me/unistorymanager"
            target="_blank"
            rel="nofollow"
            className="block w-fit text-xs py-2 px-4 rounded-lg bg-dark-bg text-light-bg dark:bg-light-bg dark:text-bg-gradient hover:!bg-bg-accent hover:!text-light-bg lg:text-sm "
          >
            {vacanciesData.vacancyCTA.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};
