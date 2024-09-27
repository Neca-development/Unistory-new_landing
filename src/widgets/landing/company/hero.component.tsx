import { CompanyHeroEn, CompanyHeroRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const CompanyHero = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? CompanyHeroRu : CompanyHeroEn;
  }, [locale]);

  return (
    <div className="container py-9 md:py-16">
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl font-bold text-primary-s leading-tight mb-4 md:text-[5rem] md:mb-6">
          <span className="flex items-center">
            {langData.title.first}
            <IconComponent className="inline w-24 md:w-40" name="companyHeroLine" />
          </span>
          <span className="lg:block">{langData.title.second}</span>
          <span>{langData.title.third}</span>
        </h1>
        <h2 className="md:text-3xl">
          <span className="md:block">{langData.subtitle.first}</span>
          <span>{langData.subtitle.second}</span>
        </h2>
      </div>
      <div className="flex space-x-2 overflow-hidden md:space-x-4 md:text-3xl font-bold">
        <a
          href="https://clutch.co/profile/unistory"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
          className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4"
        >
          <IconComponent className="w-12 mt-[0.009rem] md:w-28" name="companyClutch" />
          <span className=" mx-1 md:ml-2 mt-[0.19rem] m-md:mb-[0.2rem]">5.0</span>
          <IconComponent
            className="w-4 mt-[0.3rem] m-md:mt-0 m-md:mb-[0.1rem] md:w-6"
            name="companyStar"
          />
        </a>
        <a
          href="https://www.upwork.com/agencies/unistory/"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
          className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4"
        >
          <IconComponent className="w-14 mt-[0.02rem] md:w-[8.15rem]" name="companyUpwork" />
          <span className=" ml-1 mt-[0.2rem] m-md:mb-1 md:ml-2 mr-1">5.0</span>
          <IconComponent className="w-4 mt-[0.3rem] m-md:mt-0 md:w-6" name="companyStar" />
        </a>
        <a
          href="https://hh.ru/employer/5166243"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
          className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4"
        >
          <IconComponent className="w-5 md:w-10" name="companyHh" />
          <span className="mt-[0.2rem] mx-1 md:ml-2">4.8 </span>
          <IconComponent className="w-4 mt-[0.3rem] md:w-6 m-md:mt-[0.2rem]" name="companyStar" />
        </a>
      </div>
    </div>
  );
};
