import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { CompanyVacanciesEn, CompanyVacanciesRu } from "@shared/i18n";
import contactIcon from "@public/assets/images/company/contact-icon.jpeg";
import { VACANCIES } from "@shared/lib";
import { VacancyItem } from "./vacancy-item.component";

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
        <div className="md:w-[calc(70%_-_3rem)]">
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
        <aside className="p-4 rounded-xl bg-light-bg-accent dark:bg-dark-bg-accent h-fit md:sticky md:top-24 md:w-[30%] lg:px-8 lg:py-6">
          <div className="mb-14">
            <p className="text-lg mb-2">{vacanciesData.sidebar.title}</p>
            <p className="text-xs text-dark-text-secondary md:text-sm">
              {vacanciesData.sidebar.desc}
            </p>
          </div>
          <div>
            <div></div>
            <a
              href="https://t.me/unistorymanager"
              rel="nofollow"
              target="_blank"
              className="flex relative items-center justify-center h-16"
            >
              <img
                className="left-1 top-1 absolute w-12 h-12 rounded-full lg:left-2 lg:top-2"
                src={contactIcon.src}
              />
              <span>{vacanciesData.sidebar.button}</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};
