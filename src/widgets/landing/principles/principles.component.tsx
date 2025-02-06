import { PrinciplesRu, PrinciplesEn } from "@shared/i18n";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";

export function Principles() {
  const [activeIdx, setActiveIdx] = useState(0);

  const { locale } = useRouter();

  const data = React.useMemo(() => {
    if (locale === "ru") {
      return PrinciplesRu;
    }

    return PrinciplesEn;
  }, [locale]);

  return (
    <section className="container pt-20 pb-32 t-xs:pt-[4.5rem] t-xs:pb-20">
      <div className="flex items-center space-x-4 t-xs:justify-between t-xs:space-x-0">
        {data.items.map((item, index) => (
          <React.Fragment key={item.title}>
            <button
              className={clsx(
                "text-2xl p-2 font-medium t-xs:text-base t-xs:px-0",
                activeIdx === index && "text-primary-s"
              )}
              onClick={() => setActiveIdx(index)}
            >
              {item.title}
            </button>
            {index < data.items.length - 1 && (
              <span className="text-5xl leading-none block -mt-2 t-xs:text-4xl">&sdot;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-12 relative t-xs:mt-10">
        {/* <MessageToggler
          toggleClassName="absolute top-[-1.5rem] t-xs:-bottom-10 t-xs:top-auto t-xs:left-auto t-xs:right-0 left-[39.2rem]"
          messageData={data.messages}
          noticeIndex={activeIdx}
        /> */}
        <p className="font-bold text-5xl leading-[3.5rem] t-xs:text-2xl t-xs:leading-9">
          {data.items[activeIdx]!.description?.beforeHighlight}
          <span className="text-primary-s">
            {data.items[activeIdx]!.description?.highlight}
          </span>{" "}
          {data.items[activeIdx]!.description?.afterHighlight}
        </p>
      </div>
    </section>
  );
}
