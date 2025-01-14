import { Layout } from "@widgets/layout";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import React from "react";

import { GenerateBookHero } from "@widgets/landing/generate-book/hero.component";
import { SelectionComponent } from "@widgets/landing/generate-book/selection.component";

const GenerateBook = () => {
  return (
    <Layout
      Meta={
        <Meta
          description={{
            en: "Coordination of the work of ChatGPT, DALL·E 3, and the Google Cloud Text-to-Speech API. Development of the backend component and meticulous crafting of the query system for the neural network, enabling the generation of long captivating stories with illustrations.",
            ru: "Скоординировали работу ChatGPT, DALL·E 3 и Google Cloud Text-to-Speech API. Разработали бэкенд-составляющую и детально проработали систему запросов в нейросети, чтобы генерировать длинные захватывающие истории с иллюстрациями. ",
          }}
          title={{
            en: "Fairy tale generation service: generate a book in a few minutes",
            ru: "Сервис генерации сказок: генерация книги за несколько минут",
          }}
        />
      }
    >
      <Layout.Header />
      <Layout.Main className="bg-light-bg dark:bg-dark-bg">
        <GenerateBookHero />
        <SelectionComponent />
        <Connect />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  );
};

export default GenerateBook;
