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
        <a href = 'https://clutch.co/profile/unistory'  target='_blank' style={{textDecoration:  'none', color: 'inherit'}} className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4">
          <IconComponent className="w-12 md:w-28" name="companyClutch" />
          <span className=" mx-1 md:mt-1  md:ml-2 " >5.0</span>
          <IconComponent className="w-4 md:w-6" name="companyStar" />
        </a>
      <a href = 'https://www.upwork.com/agencies/unistory/'  target='_blank' style={{textDecoration:  'none', color: 'inherit'}} className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4">
        <IconComponent className="w-12 md:w-28" name="companyUpwork" />
        <span className=" ml-1 m-md:mb-0.5 md:ml-2">97% </span>
      </a>
      <a href = 'https://hh.ru/employer/5166243' target='_blank' style={{textDecoration:  'none', color: 'inherit'}} className="flex items-center bg-light-bg-accent dark:bg-dark-bg-secondary rounded-lg p-2 md:px-6 md:py-4">
        <IconComponent className="w-5 md:w-10" name="companyHh" />
        <span className=" mx-1 md:ml-2">4.8 </span>
        <IconComponent className="w-4 md:w-6" name="companyStar" />
      </a>
    </div>
</div>
)
  ;
};
