import { CustomMainBanner, ICase, MainBannerType } from "@shared/lib/types";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Fancybox from "@shared/lib/hocs/fancybox";
import { BitGraduateVerification } from "./custom-main/bit-graduate-verification.component";
import { BitGraduateStorage } from "./custom-main/bit-graduate-storage.component";
import { BitGraduateAuthority } from "./custom-main/bit-graduate-authority.component";
import { useMounted } from "@shared/lib/hooks/useMounted";
import clsx from "clsx";
import { VideoComponent } from "@shared/ui/video/video.component";
import { FairyTaleButton } from "./fairy-tale-button/fairy-tale-button";

export interface ICaseInfoItemProps {
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

  const getBanner = useCallback(
    (type: "desktop" | "mob") => {
      const banner = bannerByTheme ?? data?.banner;
      if (!banner) {
        return "";
      }
      if (typeof banner === "string") {
        return banner;
      }
      if (Object.hasOwn(banner, type)) {
        const deviceBanner = banner[type];
        if (typeof deviceBanner === "string") {
          return deviceBanner;
        }
        return deviceBanner[locale || "ru"] ?? "";
      }
      // impossible to type check ILang case
      return (banner as any)[locale || "ru"] ?? "";
    },
    [data?.banner, bannerByTheme, locale]
  );

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
    <section className={clsx("pb-[7.5rem] t-xs:pb-16 last:pb-0", data?.sectionClassnames)}>
      <div className="container">
        <div className="fixed bottom-10 right-10">
          <FairyTaleButton />
        </div>
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

      <div className="container">{data?.video && <VideoComponent video={data?.video} />}</div>

      {data?.customBanner != null ? (
        renderCustomBanner()
      ) : width < 992 && (data?.bannerMob != null || getBanner("mob") != "") ? (
        <Fancybox>
          <a href={data?.bannerMob ?? getBanner("mob")} data-fancybox>
            <Image
              src={data?.bannerMob ?? getBanner("mob")}
              width={2880}
              height={1060}
              className="w-full h-auto object-cover mt-[7.5rem] t-xs:mt-10"
              alt=""
            />
          </a>
        </Fancybox>
      ) : (
        getBanner("desktop") != "" && (
          <Image
            src={getBanner("desktop")}
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
  const isMounted = useMounted();

  if (!isMounted) return <></>;

  return (
    <div className="case-description bg-light-bg-accent dark:bg-dark-bg-accent pt-[7.5rem] t-xs:pt-16">
      {data?.map((item, idx) => (
        <CaseInfoItem key={idx} data={item} />
      ))}
    </div>
  );
}
