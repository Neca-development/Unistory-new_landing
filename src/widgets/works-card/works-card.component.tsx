import type { ICase } from "@shared/lib/types";
// import { CaseCategoryIcon } from "@shared/ui";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface IWorksCardInterface {
  work: ICase;
  additionalClassnames?: string;
  isLargeImage: boolean;
}

export function WorksCard(props: IWorksCardInterface) {
  const { work, additionalClassnames, isLargeImage } = props;
  const { locale } = useRouter();

  const cardTitle = typeof work?.title === "object" ? work.title[locale || "ru"] : work.title;
  const categories = work?.categories[locale || "ru"]?.join(", ");

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Link
      className={clsx(
        `noise group flex h-0 transform-gpu flex-col overflow-hidden rounded-sm bg-center pt-[100%]`,
        work?.additionalClassnames,
        additionalClassnames
      )}
      href={`/cases/${work?.id}`}
    >
      <Image
        src={work?.thumbnail[width <= 640 ? "mob" : isLargeImage ? "desktop" : "mob"]}
        width={2880}
        height={1060}
        className="absolute top-0 left-0 -z-50 h-full w-full object-cover transition-all group-hover:scale-105"
        alt=""
        quality={width <= 640 ? 100 : 75}
      />
      {/* <div className="flex items-center space-x-2">
        {work?.icons.map((icon, idx) => (
						<CaseCategoryIcon key={idx} icon={icon} variant={work?.textColor} />
					))} 
      </div> */}

      <div
        className={clsx(
          "absolute bottom-0 w-full p-6 t-xs:p-4",
          work?.textColor === "white" && "text-pale-text",
          work?.textColor === "black" && "text-black-text"
        )}
      >
        <h3 className="whitespace-pre-line text-2xl font-bold">{cardTitle}</h3>
        <p className="mt-1 text-base">{categories}</p>
      </div>
    </Link>
  );
}
