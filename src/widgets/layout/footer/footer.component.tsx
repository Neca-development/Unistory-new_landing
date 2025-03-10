import { FooterTextEn, FooterTextRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";

export interface IFooterProperties extends React.ComponentProps<"footer"> {
  showAddress?: boolean;
}

export const Footer = React.memo((props: IFooterProperties) => {
  const { className, showAddress = false } = props;

  const { locale } = useRouter();

  const text = React.useMemo(() => {
    if (locale === "ru") {
      return FooterTextRu;
    }
    return FooterTextEn;
  }, [locale]);

  return (
    <footer className={clsx("bg-dark-surface", className)}>
      <div
        className={clsx(
          "container pb-6 text-dark-text-primary",
          showAddress ? "pt-14 t-xs:pt-12" : "pt-9"
        )}
      >
        <div className="flex items-start t-xs:flex-col">
          {showAddress &&
            text.cities.map((city) => (
              <div
                className="flex flex-col space-y-3 md:w-[18.125rem] md:first:mr-6 t-xs:mb-12 t-xs:max-w-[90%] t-xs:mx-auto t-xs:text-center"
                key={city.name}
              >
                <p className="text-2xl font-medium t-xs:text-xl">{city.name}</p>
                <p
                  className="opacity-50 text-base"
                  dangerouslySetInnerHTML={{ __html: city.address }}
                />
              </div>
            ))}

          <div
            className={clsx(
              showAddress
                ? "ml-auto space-y-7 t-xs:mr-auto"
                : "mx-auto space-y-7 justify-between items-center grow-[1] sm:flex sm:space-y-0"
            )}
          >
            <h4
              className="font-medium text-2xl t-xs:text-center opacity-0"
              dangerouslySetInnerHTML={{ __html: text.slogan }}
            />
            <div className="flex items-center space-x-6 t-xs:justify-center">
              {locale === "ru" ? (
                <a
                  rel="nofollow"
                  href=" https://t.me/unistoryapp"
                  className="text-light-bg-accent	opacity-50 hover:opacity-100"
                  target="_blank"
                >
                  <IconComponent name="telegram" className="w-6" />
                </a>
              ) : (
                <a
                  rel="nofollow"
                  href="https://t.me/unistoryapp"
                  className="text-light-bg-accent opacity-50 hover:opacity-100"
                  target="_blank"
                >
                  <IconComponent name="telegram" className="w-6" />
                </a>
              )}
              <a
                rel="nofollow"
                href="https://clutch.co/profile/unistory"
                className="text-light-bg-accent"
                target="_blank"
              >
                <IconComponent
                  name="clutch"
                  className="w-[4.375rem] opacity-50 hover:opacity-100"
                />
              </a>
              <a
                rel="nofollow"
                href="https://www.upwork.com/ag/unistory/"
                className="text-light-bg-accent"
                target="_blank"
              >
                <IconComponent
                  name="upwork"
                  className="w-[5rem] mt-1 opacity-50 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 mb-6 border-2 text-[#2b2b2b]" />

        <div className="flex items-center justify-between t-xs:mx-3">
          <IconComponent name="logoDarkOutline" className="w-[6.5rem]" />
          <p className="opacity-50 text-base sm:text-lg">
            &copy; {new Date().getFullYear()} Unistory
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
