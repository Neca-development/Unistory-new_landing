import { LOGO_ENTER_ANIMATION_DURATION } from "@shared/lib/constants/animation.constants";
import { useAnimationStore } from "@shared/lib/store";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Hero, Principles, Reviews, Services, Works } from "@widgets/landing";
import { Advantages } from "@widgets/advantages/advantages.component";
import { MailingList } from "@widgets/landing/mailing-list";
import { News } from "@widgets/landing/news/news.component";
import { Layout } from "@widgets/layout";
import clsx from "clsx";
import { useRouter } from "next/router";

import { useEffect } from "react";

export function Home() {
  const { setShouldAnimate, shouldAnimate } = useAnimationStore();
  const router = useRouter();

  useEffect(() => {
    if (!shouldAnimate) return;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, -400);

    const timeout = setTimeout(() => {
      document.body.style.overflow = "";
      setShouldAnimate();
    }, LOGO_ENTER_ANIMATION_DURATION - 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "Custom web services and mobile applications. Expertise in AI / ML / blockchain / web3 technologies. Clients from 20+ countries.",
            ru: "Разрабатываем веб-сервисы и мобильные приложения на заказ. Эксперты в области технологий AI / ML / blockchain / web3. Работаем с заказчиками из 20+стран.",
          }}
          title={{
            en: "Unistory | Integrating The Future",
            ru: "Unistory | Интегрируем будущее",
          }}
          canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
        />
      }
    >
      <Layout.Header />
      <Layout.Main>
        <div
          className={clsx(
            shouldAnimate &&
              "fixed top-0 left-0 z-10 h-full w-full animate-header-height bg-light-bg will-change-[height] dark:bg-dark-bg"
          )}
        />
        <Hero />
        <Advantages />
        <Services />
        <Works />
        <Principles />
        <Reviews />
        <News />
        <MailingList />
        <Connect />
      </Layout.Main>
      <Layout.Footer showAddress />
    </Layout>
  );
}

export default Home;
