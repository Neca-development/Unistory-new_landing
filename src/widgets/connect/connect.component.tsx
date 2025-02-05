import React, { useMemo } from "react";
import ConnectForm from "./connect-form.component";
import { FormEn, FormRu } from "@shared/i18n";
import { useRouter } from "next/router";

export function Connect() {
  const { locale } = useRouter();

  const data = useMemo(() => {
    return locale === "en" ? FormEn : FormRu;
  }, [locale]);

  return (
    <section className="bg-dark-surface" id="become-customer">
      <div className="container pt-16 pb-[5.5rem] grid grid-cols-[38%_50%] gap-[13%]  text-dark-text-primary t-xs:grid-cols-1 t-xs:gap-0 t-xs:pb-12 relative">
        <div className="md:mt-7">
          <h2 className="font-bold text-5xl leading-[3.25rem] t-xs:text-2xl">{data.slogan}</h2>
          <p className="mt-9 text-2xl leading-10 t-xs:text-base">
            {data.description.beforeEmail}
            <br />
            <a href="mailto:business@unistory.org" className="text-primary-s font-bold">
              Email: business@unistory.org
            </a>
            <br />
            <a href="https://t.me/unistoryapp" className="text-primary-s font-bold">
              Telegram: @unistoryapp
            </a>
            <br />
            {data.description.afterEmail}
          </p>
        </div>

        <ConnectForm />
      </div>
    </section>
  );
}
