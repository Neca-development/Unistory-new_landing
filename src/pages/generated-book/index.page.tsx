import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { GeneratedComponent } from "@widgets/landing/generate-book/generated.component";
import { GenerateBookHero } from "@widgets/landing/generate-book/hero.component";
import { Layout } from "@widgets/layout";
import React from "react";

const GeneratedBook = () => {
  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "We are Unistory, a software development company. Our main expertise lies in AI and web3 technologies. Our office is located in Almaty, Kazakhstan.",
            ru: "Мы — Unistory, разрабатываем веб-сервисы и мобильные приложения. Главные доменные экспертизы — AI и web3. Офисы находятся в Санкт-Петербурге и Алматы.",
          }}
          title={{
            en: "About Us | Unistory",
            ru: "О компании | Unistory",
          }}
        />
      }
    >
      <Layout.Header />
      <Layout.Main className="bg-light-bg dark:bg-dark-bg">
        <GenerateBookHero />
        <GeneratedComponent />
        <Connect />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
};

export default GeneratedBook;
