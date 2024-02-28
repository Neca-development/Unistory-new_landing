import { ContactsTextEn, ContactsTextRu } from "@shared/i18n/contacts";
import { IconComponent } from "@shared/ui";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const ContactsHero = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? ContactsTextRu : ContactsTextEn;
  }, [locale]);

  return (
    <div className="bg-[url('/assets/images/Pattern.png')] -mt-[4.5rem] pt-[4.5rem]">
      <div className="container py-10 md:py-28">
        <h1 className="text-4xl font-bold mb-10 md:mb-28 md:text-[5rem] md:leading-tight">
          {langData.HERO.title}
        </h1>
        <div className="justify-between space-y-10 md:flex md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 font-semibold mb-3 text-2xl">
              <span>Email</span>
              <IconComponent name="contactsMail" />
            </div>
            <a
              href="mailto:asmolnikov@unistory.app"
              className="text-2xl font-bold dark:text-light-bg-accent hover:opacity-50 transition-all md:text-4xl"
            >
              asmolnikov@unistory.app
            </a>
          </div>
          <div>
            <div className="flex items-center space-x-3 font-semibold mb-3 text-2xl">
              <span>Telegram</span>
              <IconComponent name="contactsTelegram" />
            </div>
            <a
              href="https://t.me/Antonunistory"
              className="text-2xl font-bold dark:text-light-bg-accent hover:opacity-50 transition-all md:text-4xl"
            >
              @Antonunistory
            </a>
          </div>
          <div>
            <div className="flex items-center space-x-3 font-semibold mb-3 text-2xl">
              <span>WhatsApp</span>
              <IconComponent name="contactsWhatsApp" />
            </div>
            <a
              href="https://wa.me/79874490825"
              className="text-2xl font-bold dark:text-light-bg-accent hover:opacity-50 transition-all md:text-4xl"
            >
              +7 987 449-08-25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
