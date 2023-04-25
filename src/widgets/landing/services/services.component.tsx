import { ServicesEn, ServicesRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";

const iconClassnameByTheme =
	"first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";

export function Services() {
	const [activeIndex, setActiveIndex] = useState(0);

	const { locale } = useRouter();

	const data = React.useMemo(() => {
		if (locale === "ru") {
			return ServicesRu;
		}

		return ServicesEn;
	}, [locale]);

	return (
		<section className="container pt-12 pb-20 t-xs:pb-10 t-xs:pt-2">
			<div className="grid grid-cols-[27.5rem_1fr] lg:h-[30rem] t-xs:block rounded-sm bg-light-surface dark:bg-dark-surface">
				<div className="grid grid-cols-1 content-start gap-4 border-r-2 border-light-bg p-4 pt-10 dark:border-dark-bg t-xs:pt-6 t-xs:border-r-0">
					{data.map((s, index) => (
						<div
							key={index}
							className={clsx(
								"flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover t-xs:p-4",
								activeIndex === index && "bg-bg-s hover:bg-bg-s"
							)}
							onClick={() => setActiveIndex(index)}
						>
							<IconComponent
								name={s.icon}
								className={clsx("w-10", iconClassnameByTheme, 't-xs:w-6')}
							/>
							<h2
								className={clsx(
									"ml-6 text-2xl font-semibold t-xs:text-base",
									activeIndex === index && "text-primary-s"
								)}
							>
								{s.title}
							</h2>
						</div>
					))}
				</div>

				<div className="pt-12 pb-[3.75rem] min-h-[24.5rem] h-[10rem] lg:h-auto t-xs:py-8 t-xs:px-[28px] pl-16 pr-10 t-xs:border-light-bg dark:border-dark-bg t-xs:border-t-2 border-solid">
					<h3
						className="text-4xl font-bold t-xs:text-xl"
						dangerouslySetInnerHTML={{ __html: data[activeIndex]!.header }}
					/>
					<p
						className="mt-10 text-2xl leading-10 t-xs:text-base"
						dangerouslySetInnerHTML={{ __html: data[activeIndex]!.description }}
					/>
				</div>
			</div>
		</section>
	);
}
