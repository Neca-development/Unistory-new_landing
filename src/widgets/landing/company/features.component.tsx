import { CompanyFeaturesEn, CompanyFeaturesRu } from "@shared/i18n";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const CompanyFeatures = () => {
  const { locale } = useRouter();

  const featuresData = useMemo(() => {
    return locale === "ru" ? CompanyFeaturesRu : CompanyFeaturesEn;
  }, [locale]);

  return (
    <div className="container py-9 grid gap-3 md:gap-6 md:grid-cols-2 md:py-16">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="bg-light-bg-accent dark:bg-dark-bg-secondary p-4 rounded-lg md:p-5"
        >
          <div className="mb-4 relative h-0 pt-[51%] rounded-md overflow-hidden md:mb-5">
            <img
              className="w-full h-full absolute left-0 top-0 object-cover"
              src={feature.image}
              alt={feature.title}
            />
          </div>
          <div className="mb-2 md:mb-3">
            <h3 className="mb-2 text-lg font-semibold md:text-2xl">{feature.title}</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
