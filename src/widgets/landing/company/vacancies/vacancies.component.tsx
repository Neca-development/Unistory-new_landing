import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { CompanyVacanciesEn, CompanyVacanciesRu } from "@shared/i18n";
import contactIcon from "@public/assets/images/company/contact-icon.jpeg";
import { VACANCIES } from "@shared/lib";
import { VacancyItem } from "./vacancy-item.component";
import { IconComponent } from "@shared/ui";

export const CompanyVacancies = () => {
  const { locale } = useRouter();

  const vacanciesData = useMemo(() => {
    return locale === "ru" ? CompanyVacanciesRu : CompanyVacanciesEn;
  }, [locale]);

  const [accordionOpenedId, setAccordionOpenedId] = useState<number | undefined>(undefined);

  const onAccordionButtonCLick = (vacancyId: number) => {
    if (vacancyId === accordionOpenedId) {
      setAccordionOpenedId(undefined);
    } else {
      setAccordionOpenedId(vacancyId);
    }
  };

  return (
    <div className="container py-8 md:py-16">
      <h2 className="mb-6 font-bold text-3xl md:mb-10 md:text-5xl">
        <span>{vacanciesData.title.first}</span>
        <br className="hidden md:block" />
        <span>{vacanciesData.title.second}</span>
      </h2>
      <div className="md:flex md:justify-between">
        <div className="mb-8 md:mb-0 md:w-[calc(70%_-_3rem)]">
          {locale &&
            VACANCIES.map((vacancy) => (
              <VacancyItem
                vacancy={vacancy}
                key={vacancy.id}
                locale={locale as "ru" | "en"}
                accordionOpenedId={accordionOpenedId}
                onAccordionButtonCLick={() => onAccordionButtonCLick(vacancy.id)}
              />
            ))}
        </div>
        <aside className="p-4 rounded-xl bg-light-bg-accent dark:bg-dark-bg-accent h-fit md:sticky md:top-32 md:w-[30%] lg:px-8 lg:py-6">
          <div className="mb-14 md:mb-20">
            <p className="text-lg mb-2 font-semibold lg:text-2xl">{vacanciesData.sidebar.title}</p>
            <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary md:text-sm">
              {vacanciesData.sidebar.desc}
            </p>
          </div>
          <div className="flex items-center mb-3">
            <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={contactIcon.src} />
            <a
              href="https://t.me/unistorymanager"
              rel="nofollow"
              target="_blank"
              className="flex flex-grow relative items-center justify-center h-16 text-light-bg-accent bg-bg-accent rounded-full -ml-4 transition-all lg:h-20 hover:bg-light-bg-accent hover:text-bg-gradient active:bg-dark-text-secondary"
            >
              <span className="left-1 top-1 absolute w-14 h-14 bg-dark-bg-secondary rounded-full flex items-center p-3 justify-center lg:left-2 lg:top-2 lg:w-16 lg:h-16 lg:p-4">
                <IconComponent
                  className="w-full h-full -ml-1 text-light-bg-accent"
                  name="telegram"
                />
              </span>
              <span className="font-semibold text-lg lg:text-2xl lg:pl-6">
                {vacanciesData.sidebar.button}
              </span>
            </a>
          </div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs lg:text-sm">
            {vacanciesData.sidebar.bottomText}
          </p>
        </aside>
      </div>
    </div>
  );
};
