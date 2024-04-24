import { CompanyMapEn, CompanyMapRu } from "@shared/i18n";
import { useRouter } from "next/router";
import { useMemo } from "react";
import mapMobileDarkRu from "@public/assets/images/company/map-dark-mobile-ru.png";
import mapMobileLightRu from "@public/assets/images/company/map-light-mobile-ru.png";
import mapDesktopDarkRu from "@public/assets/images/company/map-dark-desktop-ru.png";
import mapDesktopLightRu from "@public/assets/images/company/map-light-desktop-ru.png";
import mapMobileDarkEn from "@public/assets/images/company/map-dark-mobile-en.png";
import mapMobileLightEn from "@public/assets/images/company/map-light-mobile-en.png";
import mapDesktopDarkEn from "@public/assets/images/company/map-dark-desktop-en.png";
import mapDesktopLightEn from "@public/assets/images/company/map-light-desktop-en.png";

export const CompanyMap = () => {
  const { locale } = useRouter();

  const mapData = useMemo(() => {
    return locale === "ru" ? CompanyMapRu : CompanyMapEn;
  }, [locale]);

  return (
    <div className="container py-9 md:py-16">
      <h2 className="mb-6 font-bold text-3xl md:mb-10 md:text-5xl">{mapData.title}</h2>
      {locale === "ru" ? (
        <>
          <img src={mapMobileDarkRu.src} className="hidden dark:m-md:block" />
          <img src={mapDesktopDarkRu.src} className="hidden dark:md:block" />
          <img src={mapDesktopLightRu.src} className="hidden md:block dark:hidden" />
          <img src={mapMobileLightRu.src} className="md:hidden dark:hidden" />
        </>
      ) : (
        <>
          <img src={mapMobileDarkEn.src} className="hidden dark:m-md:block" />
          <img src={mapDesktopDarkEn.src} className="hidden dark:md:block" />
          <img src={mapDesktopLightEn.src} className="hidden md:block dark:hidden" />
          <img src={mapMobileLightEn.src} className="md:hidden dark:hidden" />
        </>
      )}
    </div>
  );
};
