import { ServicesEn, ServicesRu } from "@shared/i18n";
import { useRouter } from "next/router";
import React from "react";
import { ServiceCard } from "./service-card.component";
import ComputerVisionImage from "@public/assets/images/homepage/services-computer-vision.png";
import ComputerVisionImageDark from "@public/assets/images/homepage/services-computer-vision_dark.png";
import Web3 from "@public/assets/images/homepage/services-web3.png";
import Web3Dark from "@public/assets/images/homepage/services-web3_dark.png";
import LLMChatBotBlur from "@public/assets/images/homepage/llm-chatbot-blur.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { Web3AnimatedNotice } from "@features/service-card/web3-notice.component";
import { SolutionAnimatedBlock } from "@features/service-card/solution-block.component";
import { LLMAnimatedBlock } from "@features/service-card/llm-chat.component";
import { IconComponent } from "@shared/ui";
import { DecentralizedAnimatedBlock } from "@features/service-card/decentralized-block.component";

export function Services() {
  const { locale } = useRouter();
  const { theme } = useTheme();
  const isMounted = useMounted();

  const services = React.useMemo(() => {
    if (locale === "ru") {
      return ServicesRu;
    }

    return ServicesEn;
  }, [locale]);

  return (
    <section className="relative container pt-12 pb-20 t-xs:pb-10 t-xs:pt-2">
      <div className="absolute z-[0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-bg-accent/[0.5] pointer-events-none blur-3xl md:w-2/5 md:h-96 xl:top-[60%]"></div>
      <div className="relative grid gap-3 md:grid-cols-12 xl:grid-cols-services">
        <ServiceCard
          title={services.LLM.title}
          subtitle={services.LLM.subtitle}
          animationDuration={1}
          animationYOffset={40}
          animationDelay={1.25}
          className="relative md:col-span-6 xl:col-span-5"
        >
          <Image
            src={LLMChatBotBlur}
            alt=""
            className="absolute left-0 bottom-0 w-4/5 opacity-50"
          />
          <LLMAnimatedBlock />
          <Link
            className="btn-primary ml-4 mb-7 block w-fit px-4 py-2 relative z-[1]"
            href={services.LLM.button.url}
          >
            {services.LLM.button.text}
          </Link>
        </ServiceCard>
        <ServiceCard
          title={services.COMPUTER_VISION.title}
          subtitle={services.COMPUTER_VISION.subtitle}
          animationDuration={0.75}
          animationYOffset={80}
          animationDelay={typeof window !== "undefined" && window.innerWidth > 767 ? 1.5 : 0}
          className="md:col-span-6 xl:col-span-5"
        >
          {isMounted && theme && (
            <Image
              src={theme === "dark" ? ComputerVisionImageDark : ComputerVisionImage}
              className="object-contain"
              alt="AI"
            />
          )}
        </ServiceCard>
        <ServiceCard
          title={services.AI.title}
          subtitle={services.AI.subtitle}
          animationDuration={0.5}
          animationYOffset={120}
          animationDelay={typeof window !== "undefined" && window.innerWidth > 767 ? 1.75 : 0}
          className="md:col-span-4 xl:col-span-3"
        >
          {isMounted && theme && (
            <IconComponent
              name={theme === "dark" ? "serviceAIDark" : "serviceAI"}
              className="w-full"
            />
          )}
        </ServiceCard>
        <ServiceCard
          title={services.DECENTRALIZED.title}
          subtitle={services.DECENTRALIZED.subtitle}
          animationDuration={1}
          animationYOffset={80}
          animationDelay={
            typeof window !== "undefined" &&
            ((window.innerWidth > 767 && window.innerWidth < 1280) || window.innerHeight > 1000)
              ? 2.25
              : 0
          }
          className="relative md:col-span-8 xl:col-span-7 xl:order-5"
        >
          {isMounted && theme && (
            <>
              <DecentralizedAnimatedBlock theme={theme} />
              <div className="absolute w-2/3 bottom-4 left-6 flex">
                <IconComponent
                  className="flex-1 backdrop-blur-sm rounded-full overflow-hidden"
                  name={theme === "dark" ? "decentralizedBtcDark" : "decentralizedBtcLight"}
                />
                <IconComponent
                  className="flex-1 backdrop-blur-sm rounded-full overflow-hidden"
                  name={theme === "dark" ? "decentralizedEthDark" : "decentralizedEthLight"}
                />
              </div>
            </>
          )}
        </ServiceCard>
        <ServiceCard
          title={services.WEB3.title}
          subtitle={services.WEB3.subtitle}
          animationDuration={1}
          animationYOffset={40}
          animationDelay={
            typeof window !== "undefined" &&
            ((window.innerWidth > 767 && window.innerWidth < 1280) || window.innerHeight > 1000)
              ? 2
              : 0
          }
          className="md:col-span-6 xl:col-span-3 xl:order-4 relative"
        >
          {isMounted && (
            <Image src={theme === "dark" ? Web3Dark : Web3} className="object-contain" alt="Web3" />
          )}
          <Web3AnimatedNotice />
        </ServiceCard>
        <ServiceCard
          title={services.INDIVIDUAL.title}
          subtitle={services.INDIVIDUAL.subtitle}
          animationDuration={1}
          animationYOffset={120}
          animationDelay={
            typeof window !== "undefined" &&
            ((window.innerWidth > 767 && window.innerWidth < 1280) || window.innerHeight > 1000)
              ? 2.5
              : 0
          }
          className="bg-bg-accent dark:bg-bg-accent text-dark-text-primary md:col-span-6 xl:col-span-3 xl:order-6"
        >
          <SolutionAnimatedBlock />
          <Link
            className="btn-primary ml-4 mb-7 block w-fit px-4 py-2"
            href={services.INDIVIDUAL.button.url}
          >
            {services.INDIVIDUAL.button.text}
          </Link>
        </ServiceCard>
      </div>
    </section>
  );
}
