import { CustomMainBanner, ICase, MainBannerType } from "@shared/lib/types";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Fancybox from "@shared/lib/hocs/fancybox";
import { BitGraduateVerification } from "./custom-main/bit-graduate-verification.component";
import { BitGraduateStorage } from "./custom-main/bit-graduate-storage.component";
import { BitGraduateAuthority } from "./custom-main/bit-graduate-authority.component";

interface ICaseInfoItemProps {
  data?: ICase["main"][0];
}

type BannerByThemeType = { [index: string]: MainBannerType | undefined };

function CaseInfoItem({ data }: ICaseInfoItemProps) {
  const { locale } = useRouter();
  const { theme, systemTheme } = useTheme();
  const [width, setWidth] = useState<number>(0);
  const _theme = theme === "system" ? systemTheme : theme;

  const bannerByThemeConfig: BannerByThemeType = {
    dark: data?.darkBanner,
    light: data?.banner,
  };

  const bannerByTheme = _theme ? bannerByThemeConfig[_theme] : undefined;

  const getBanner = useCallback(() => {
    const existBanner = bannerByTheme ?? data?.banner;
    if (!existBanner) return "";

    return typeof existBanner !== "string" ? (existBanner[locale || "ru"] as string) : existBanner;
  }, [data?.banner, bannerByTheme, locale]);

  const renderCustomBanner = () => {
    switch (data?.customBanner) {
      case CustomMainBanner.BitGraduateVerification: {
        return <BitGraduateVerification />;
      }
      case CustomMainBanner.BitGraduateStorage: {
        return <BitGraduateStorage />;
      }
      case CustomMainBanner.BitGraduateAuthority: {
        return <BitGraduateAuthority />;
      }
      default: {
        return null;
      }
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="mb-[7.5rem] t-xs:mb-16 last:mb-0">
      <div className="container">
        <article className="max-w-[52.5rem]">
          <h2 className="font-bold text-[2.875rem] whitespace-pre-line t-xs:text-2xl">
            {data?.title[locale || "ru"]}
          </h2>
          {data?.text?.map((item, idx) => (
            <div key={idx} className="mt-10 t-xs:mt-4">
              {item.subtitle && item.subtitle[locale || "ru"] && (
                <h3 className="font-bold text-3xl mb-5 t-xs:text-xl t-xs:mb-4 t-xs:mt-10">
                  {item.subtitle[locale || "ru"]}
                </h3>
              )}
              <p
                className="text-2xl leading-10 t-xs:text-base"
                dangerouslySetInnerHTML={{
                  __html: item.text ? (item.text[locale || "ru"] as any) : "",
                }}
              />
            </div>
          ))}
        </article>
      </div>

      {data?.customBanner != null ? (
        renderCustomBanner()
      ) : width < 992 && (data?.bannerMob != null || getBanner() != "") ? (
        <Fancybox>
          <a href={data?.bannerMob ? data?.bannerMob : getBanner()} data-fancybox>
            <Image
              src={data?.bannerMob ? data?.bannerMob : getBanner()}
              width={2880}
              height={1060}
              className="w-full h-auto object-cover mt-[7.5rem] t-xs:mt-10"
              alt=""
            />
          </a>
        </Fancybox>
      ) : (
        getBanner() != "" && (
          <Image
            src={getBanner()}
            width={2880}
            height={1060}
            className="w-full h-auto object-cover mt-[7.5rem] t-xs:mt-10"
            alt=""
          />
        )
      )}
    </section>
  );
}

interface ICaseMainInfoProps {
  data?: ICase["main"];
}
export function CaseMainInfo({ data }: ICaseMainInfoProps) {
  return (
    <div className="case-description bg-light-bg-accent dark:bg-dark-bg-accent pt-[7.5rem] t-xs:pt-16">
      {data?.map((item, idx) => (
        <CaseInfoItem key={idx} data={item} />
      ))}
    </div>
  );
}
