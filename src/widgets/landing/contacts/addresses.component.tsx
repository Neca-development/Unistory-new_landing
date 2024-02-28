import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ContactsTextRu, ContactsTextEn } from "@shared/i18n/contacts";
import { useRouter } from "next/router";
import { useMemo } from "react";
import placemarkIcon from "@public/assets/images/contacts/placemark-icon.png";

export const ContactsAddresses = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? ContactsTextRu : ContactsTextEn;
  }, [locale]);

  return (
    <div className="container py-20 space-y-10">
      {locale === "ru" && (
        <div className="justify-between md:flex">
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-4">{langData.ADDRESSES.SPB.title}</h2>
            <div className="text-xl space-y-2 opacity-50 xl:w-2/3">
              <div>{langData.ADDRESSES.SPB.phone}</div>
              <address className="not-italic">{langData.ADDRESSES.SPB.address}</address>
            </div>
          </div>
          <div className="w-3/5 h-72 md:h-96">
            <YMaps>
              <Map width="100%" height="100%" defaultState={{ center: [59.96, 30.324], zoom: 16 }}>
                <Placemark
                  geometry={[59.96, 30.324]}
                  options={{
                    iconLayout: "default#image",
                    iconImageSize: [50, 62],
                    iconImageHref: placemarkIcon.src,
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      )}
    </div>
  );
};
