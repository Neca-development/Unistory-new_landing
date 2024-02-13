import { ServicesEn, ServicesRu } from "@shared/i18n";
import { useRouter } from "next/router";
import React from "react";
import { ServiceCard } from "./service-card.component";
import ComputerVisionImage from "@public/assets/images/homepage/services-computer-vision.png";
import ComputerVisionImageDark from "@public/assets/images/homepage/services-computer-vision_dark.png";
import AIImage from "@public/assets/images/homepage/services-ai.png";
import AIImageDark from "@public/assets/images/homepage/services-ai_dark.png";
import Web3 from "@public/assets/images/homepage/services-web3.png";
import Web3Dark from "@public/assets/images/homepage/services-web3_dark.png";
import Decentralized from "@public/assets/images/homepage/service-decentralized.png";
import DecentralizedDark from "@public/assets/images/homepage/service-decentralized_dark.png";

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import clsx from "clsx";
import { useMounted } from "@shared/lib/hooks/useMounted";

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
    <section className="container pt-12 pb-20 t-xs:pb-10 t-xs:pt-2">
      <div className="grid gap-3 md:grid-cols-12 xl:grid-cols-services">
        <ServiceCard
          title={services.LLM.title}
          subtitle={services.LLM.subtitle}
          className="md:col-span-6 xl:col-span-5"
        >
          <Link className="btn-primary ml-4 mb-7 block w-fit px-4 py-2" href="/cases/ai-chatbot/">
            {locale === "ru" ? "Подробнее" : "Read more"}
          </Link>
        </ServiceCard>
        <ServiceCard
          title={services.COMPUTER_VISION.title}
          subtitle={services.COMPUTER_VISION.subtitle}
          className="md:col-span-9 xl:col-span-5"
        >
          {isMounted && (
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
          className="md:col-span-3 xl:col-span-3"
        >
          {isMounted && (
            <Image
              src={theme === "dark" ? AIImageDark : AIImage}
              className="object-contain"
              alt="AI"
            />
          )}
        </ServiceCard>
        <ServiceCard
          title={services.WEB3.title}
          subtitle={services.WEB3.subtitle}
          className="md:col-span-6 xl:col-span-3"
        >
          {isMounted && (
            <Image src={theme === "dark" ? Web3Dark : Web3} className="object-contain" alt="Web3" />
          )}
        </ServiceCard>
        <ServiceCard
          title={services.DECENTRALIZED.title}
          subtitle={services.DECENTRALIZED.subtitle}
          className="md:col-span-6 xl:col-span-7"
        >
          {isMounted && (
            <Image
              src={theme === "dark" ? DecentralizedDark : Decentralized}
              className="w-3/5 mx-4 mb-7 object-contain"
              alt="Decentralized apps"
            />
          )}
        </ServiceCard>
        <ServiceCard
          title={services.INDIVIDUAL.title}
          subtitle={services.INDIVIDUAL.subtitle}
          className="bg-bg-accent dark:bg-bg-accent text-dark-text-primary md:col-span-6 xl:col-span-3"
        >
          <Link className="btn-primary ml-4 mb-7 block w-fit px-4 py-2" href="#become-customer">
            {locale === "ru" ? "Оставить заявку" : "Contact us"}
          </Link>
        </ServiceCard>
      </div>
    </section>
  );
}
