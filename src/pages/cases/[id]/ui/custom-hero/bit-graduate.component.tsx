import LinkCircle from "@public/assets/icons/link-circle.svg";
import AnimatedBackground from "@public/assets/images/cases/bit-graduate/animated-background.svg";
import Hero from "@public/assets/images/cases/bit-graduate/hero.png";
import Logo from "@public/assets/images/cases/bit-graduate/logo.svg";
import { SingleCaseEn, SingleCaseRu } from "@shared/i18n/cases";
import { getCustomHeroText } from "@shared/lib";
import type { ICase } from "@shared/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";

import { CaseGoal } from "../case-goal.component";

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

  const langData = useMemo(() => {
    return locale === "ru" ? SingleCaseRu : SingleCaseEn;
  }, [locale]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      window.scrollTo(0, 0.0001);
    }, 0);

    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
      setIsAnimate(false);
    }, STAGES["stage-2"].delay * 1000);
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <>
      <motion.div
        className="relative -mt-[4.5rem] flex h-screen w-full items-center overflow-hidden bg-[#fff]"
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
        <div className="container relative z-10 mt-28 flex h-[70%] justify-between items-center gap-10">
          <motion.div
            className="absolute top-1/2 flex items-center gap-2 whitespace-nowrap text-bg-gradient"
            initial={{
              transform: "translate(-50%, -50%)",
              left: "50%",
              marginTop: "-7rem",
              fontSize: "6rem",
            }}
            animate={{
              fontSize: "2rem",
              top: 0,
              left: "4.5rem",
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
                width: "10rem",
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
            className="flex w-[36.5rem] flex-col justify-between gap-[5rem] text-[3rem] text-bg-gradient pt-[8.75rem] shrink-0"
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
              className="flex items-center gap-2 text-[1.5rem] text-light-text-secondary"
            >
              <p>{getCustomHeroText(1, locale, data.heroText)}</p>
              <LinkCircle />
            </a>
          </motion.div>

          <motion.div
            className="relative block aspect-[5/3] w-full"
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
            <Image src={Hero} alt="BitGraduate" fill />
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
          className="absolute left-full aspect-[3/6] h-[150%]"
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
      </motion.div>
      <CaseGoal data={data} locale={locale} langData={langData} containerClassNames="mb-12" />
    </>
  );
};
