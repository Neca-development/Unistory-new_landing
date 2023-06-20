import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import { TechnologiesValues } from "@shared/lib/constants/technologies.constats";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { useMounted } from "@shared/lib/hooks/useMounted";

interface IStackProps {
  data?: TechnologiesValues[];
}

export function Stack({ data }: IStackProps) {
  const { locale } = useRouter();
  const { theme, systemTheme } = useTheme();
  const mounted = useMounted();

  const _theme = useMemo(() => {
    const returnTheme = theme === "system" ? systemTheme : theme;

    return returnTheme ?? "dark";
  }, [theme, systemTheme]);

  const isMobile = useDetectDeviceType();

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex bg-light-bg-accent dark:bg-dark-bg-accent pt-20 mt-[7.5rem] t-xs:mt-2 t-xs:pt-10">
      <div className="container">
        <h2 className="font-bold text-[2.875rem] t-xs:text-2xl">{langData.techno}</h2>
        <div className="flex items-center justify-center md:justify-start gap-10 mt-16 flex-wrap  t-xs:mt-6 t-xs:gap-4">
          {data?.map((technology, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex bg-light-bg w-[25rem] md:w-[22.3%] dark:bg-dark-bg p-6 flex-col items-center"
                // idx === data?.length - 1 && idx % 2 === 0 && 'col-span-2'
              )}
            >
              <div className="relative w-full h-0 pt-[100%]">
                <Image
                  src={technology.icon[_theme]!}
                  width={isMobile ? 150 : 180}
                  height={120}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
              {/* <div className='relative w-full h-28'>
                <Image src={technology.icon} alt={technology.name} fill />
              </div> */}

              {/* <h3 className="mt-6">{technology.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
