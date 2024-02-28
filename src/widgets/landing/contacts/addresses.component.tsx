import { ContactsTextRu, ContactsTextEn } from "@shared/i18n/contacts";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const ContactsAddresses = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? ContactsTextRu : ContactsTextEn;
  }, [locale]);

  return (
    <div className="container py-20 space-y-10">
      {locale === "ru" && (
        <div className="flex">
          <div>
            <h2 className="text-3xl font-bold mb-4">{langData.ADDRESSES.SPB.title}</h2>
            <div className="text-xl space-y-2 opacity-50 xl:w-2/3">
              <div>{langData.ADDRESSES.SPB.phone}</div>
              <address className="not-italic">{langData.ADDRESSES.SPB.address}</address>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
