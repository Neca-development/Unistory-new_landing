import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ContactsTextRu, ContactsTextEn } from "@shared/i18n/contacts";
import { useRouter } from "next/router";
import { useMemo } from "react";
import placemarkIcon from "@public/assets/images/contacts/placemark-icon.png";
import clsx from "clsx";

export const ContactsAddresses = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? ContactsTextRu : ContactsTextEn;
  }, [locale]);

  return (
    <YMaps query={{ lang: locale === "ru" ? "ru_RU" : "en_US" }}>
      <div className="container bg-light-bg-accent dark:bg-dark-bg py-10 md:py-20">
        {locale === "ru" && (
          <div className={clsx("justify-between mb-10 md:mb-20 md:flex")}>
            <div className="mb-10 md:mb-0 md:w-1/3">
              <h2 className="text-3xl font-bold mb-4">{langData.ADDRESSES.SPB.title}</h2>
              <div className="text-xl space-y-2 opacity-50 xl:w-4/5">
                <address
                  className="not-italic"
                  dangerouslySetInnerHTML={{ __html: langData.ADDRESSES.SPB.address }}
                />
              </div>
            </div>
            <div className="h-72 md:w-3/5 md:h-96">
              <Map width="100%" height="100%" state={{ center: [59.94545, 30.355385], zoom: 16 }}>
                <Placemark
                  geometry={[59.94545, 30.355385]}
                  options={{
                    iconLayout: "default#image",
                    iconImageSize: [50, 62],
                    iconImageHref: placemarkIcon.src,
                  }}
                />
              </Map>
            </div>
          </div>
        )}
        <div className="justify-between md:flex">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">{langData.ADDRESSES.ALMATA.title}</h2>
            <div className="text-xl space-y-2 opacity-50 xl:w-4/5">
              <address
                className="not-italic"
                dangerouslySetInnerHTML={{ __html: langData.ADDRESSES.ALMATA.address }}
              />
            </div>
          </div>
          <div className="h-72 md:w-3/5 md:h-96">
            <Map width="100%" height="100%" state={{ center: [43.195338, 76.893632], zoom: 16 }}>
              <Placemark
                geometry={[43.195338, 76.893632]}
                options={{
                  iconLayout: "default#image",
                  iconImageSize: [50, 62],
                  iconImageHref: placemarkIcon.src,
                }}
              />
            </Map>
          </div>
        </div>
      </div>
    </YMaps>
  );
};
