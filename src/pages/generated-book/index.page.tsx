import { useBookStore } from "@shared/lib/store/book/book.store";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { GeneratedComponent } from "@widgets/landing/generate-book/generated.component";
import { GenerateBookHero } from "@widgets/landing/generate-book/hero.component";
import { Layout } from "@widgets/layout";
import React from "react";

const GeneratedBook = () => {
  const { paragraphs } = useBookStore();
  console.log("🚀 ~ GeneratedBook ~ paragraphs:", paragraphs);

  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "Coordination of the work of ChatGPT, DALL·E 3, and the Google Cloud Text-to-Speech API. Development of the backend component and meticulous crafting of the query system for the neural network, enabling the generation of long captivating stories with illustrations.",
            ru: "Скоординировали работу ChatGPT, DALL·E 3 и Google Cloud Text-to-Speech API. Разработали бэкенд-составляющую и детально проработали систему запросов в нейросети, чтобы генерировать длинные захватывающие истории с иллюстрациями. ",
          }}
          title={{
            en: "Fairy tale generator: AI integration and prompt engineering",
            ru: "Сервис генерации сказок: интеграция AI и промпт-инжиниринг",
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
