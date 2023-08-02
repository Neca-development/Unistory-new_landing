import LinkCircle from "@public/assets/icons/link-circle.svg";
import AnimatedBackground from "@public/assets/images/cases/bit-graduate/animated-background.svg";
import Hero from "@public/assets/images/cases/bit-graduate/hero.png";
import Logo from "@public/assets/images/cases/bit-graduate/logo.svg";
import MobileHero from "@public/assets/images/cases/bit-graduate/mobile-hero.png";
import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import { getCustomHeroText } from "@shared/lib";
import type { ICase } from "@shared/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";

import { CaseGoal } from "../case-goal.component";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { useMounted } from "@shared/lib/hooks/useMounted";

interface IBitGraduateProperties {
  data: ICase;
}

const STAGES = {
  "stage-1": {
    duration: 0.8,
    delay: 1.2,
    ease: "easeInOut",
  },
  "stage-2": {
    duration: 1,
    delay: 3,
    ease: "easeInOut",
  },
  "stage-3": {
    duration: 1,
    delay: 4,
    ease: "easeInOut",
  },
};

export const BitGraduate = (props: IBitGraduateProperties) => {
  const { data } = props;

  const { locale } = useRouter();
  const [isAnimate, setIsAnimate] = useState(true);
  const { width } = useScrollbarSize();
  const isMounted = useMounted();
  const isMobile = useDetectDeviceType();

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fixScroll = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 310);

    const afterAnimation = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
      setIsAnimate(false);
    }, STAGES["stage-2"].delay * 1000);

    return () => {
      clearTimeout(fixScroll);
      clearTimeout(afterAnimation);
    };
  }, [isMounted]);

  if (!isMounted || !data) {
    return <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#fff] w-full h-screen"></div>;
  }

  return (
    <>
      <motion.div
        className="relative -mt-[4.5rem] flex min-h-screen w-full items-center overflow-hidden bg-[#fff]"
        style={{
          paddingRight: isAnimate ? width : 0,
        }}
        animate={{
          backgroundColor: "#CCDCFD",
          transition: {
            duration: STAGES["stage-2"].duration,
            delay: STAGES["stage-2"].delay,
            ease: STAGES["stage-2"].ease,
          },
        }}
      >
        <div className="container relative z-10 mt-28 flex h-[70%] justify-between items-center gap-10 t-xs:flex-col t-xs:gap-8 t-xs:mt-[5.5rem] t-xs:h-[calc(100vh_-_5.5rem)] t-xs:justify-start overflow-hidden">
          <motion.div
            className="absolute top-1/2 flex items-center gap-2 whitespace-nowrap text-bg-gradient"
            initial={{
              transform: "translate(-50%, -50%)",
              left: "50%",
              marginTop: "-7rem",
              fontSize: isMobile ? "2rem" : "6rem",
            }}
            animate={{
              fontSize: "2rem",
              top: 0,
              left: isMobile ? "2rem" : "4.5rem",
              transform: "translate(0, 0)",
              marginTop: "0",
              transition: {
                duration: STAGES["stage-2"].duration,
                delay: STAGES["stage-2"].delay,
                ease: STAGES["stage-2"].ease,
              },
            }}
          >
            <motion.div
              initial={{
                width: isMobile ? "4rem" : "10rem",
              }}
              animate={{
                width: "4rem",
                transition: {
                  duration: STAGES["stage-2"].duration,
                  delay: STAGES["stage-2"].delay,
                  ease: STAGES["stage-2"].ease,
                },
              }}
              className="relative aspect-[4/3]"
            >
              <Logo className="h-full w-full" />
            </motion.div>
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "fit-content",
                opacity: 1,
                transition: {
                  duration: STAGES["stage-1"].duration,
                  delay: STAGES["stage-1"].delay,
                  ease: STAGES["stage-1"].ease,
                },
              }}
            >
              <p className="font-light">Bit Graduate</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-[36.5rem] flex-col justify-between gap-[5rem] text-[3rem] text-bg-gradient pt-[8.75rem] pb-4 shrink-0 t-xs:w-[15.625rem] t-xs:pt-16 t-xs:gap-5 t-xs:text-base t-xs:pb-0 t-xs:pl-10"
            initial={{
              opacity: 0,
              transform: "translateY(200%)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0%)",
              transition: {
                duration: STAGES["stage-2"].duration,
                delay: STAGES["stage-2"].delay,
                ease: STAGES["stage-2"].ease,
              },
            }}
          >
            <h1>{data.heroTitle[locale || "ru"]}</h1>
            <h1 className="font-light">{getCustomHeroText(0, locale, data.heroText)}</h1>
            <a
              href="https://bitgraduate.net"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[1.5rem] text-light-text-secondary t-xs:text-xs"
            >
              <p>{getCustomHeroText(1, locale, data.heroText)}</p>
              <LinkCircle className="w-5 h-5 t-xs:w-3 t-xs:h-3" viewBox="0 0 24 24" />
            </a>
          </motion.div>

          <motion.div
            className="relative block aspect-[5/3] w-full t-xs:w-[19.375rem] t-xs:aspect-auto t-xs:drop-shadow-2xl"
            initial={{
              opacity: 0,
              transform: "translateY(200%)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0%)",
              transition: {
                duration: STAGES["stage-2"].duration,
                delay: STAGES["stage-2"].delay,
                ease: STAGES["stage-2"].ease,
              },
            }}
          >
            <Image
              src={isMobile ? MobileHero : Hero}
              alt="BitGraduate"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute left-1/2 z-0 -translate-x-1/2 rounded-full bg-bg-gradient"
          initial={{
            opacity: 0,
            boxShadow: "0px 0px 30rem 30vh rgba(255, 255, 255, 0.5)",
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: STAGES["stage-3"].duration,
              delay: STAGES["stage-3"].delay,
              ease: STAGES["stage-3"].ease,
            },
          }}
        />

        <motion.div
          className="absolute left-full aspect-[3/6] h-[150%] t-xs:hidden"
          initial={{
            transform: "translate(50%, -100%) rotate(25deg)",
            opacity: 0,
          }}
          animate={{
            transform: "translate(-50%, 0%) rotate(25deg)",
            opacity: 1,
            transition: {
              duration: STAGES["stage-3"].duration,
              delay: STAGES["stage-3"].delay,
              ease: STAGES["stage-3"].ease,
            },
          }}
        >
          <AnimatedBackground className="h-full w-full" />
        </motion.div>

        {/* Mobile inner shadow */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: STAGES["stage-2"].duration,
                delay: STAGES["stage-2"].delay,
                ease: STAGES["stage-2"].ease,
              },
            }}
            className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[rgba(0,0,0,0.25)] z-10"
          ></motion.div>
        )}
      </motion.div>

      <CaseGoal data={data} locale={locale} langData={langData} containerClassNames="mb-12" />
    </>
  );
};
