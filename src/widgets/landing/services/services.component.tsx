import { ServicesEn, ServicesRu } from "@shared/i18n";
import { IconComponent, IconsTypes } from "@shared/ui";
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
		<section className="container pt-12 pb-20">
			<div className="grid grid-cols-[27.5rem_1fr] rounded-sm bg-light-surface dark:bg-dark-surface">
				<div className="grid grid-cols-1 content-start gap-4 border-r-2 border-light-bg p-4 pt-10 dark:border-dark-bg">
					{data.map((s, index) => (
						<div
							key={index}
							className={clsx(
								"flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover",
								activeIndex === index && "bg-bg-s"
							)}
							onClick={() => setActiveIndex(index)}
						>
							<IconComponent
								name={s.icon}
								className={clsx("w-10", iconClassnameByTheme)}
							/>
							<h2
								className={clsx(
									"ml-6 text-2xl font-semibold",
									activeIndex === index && "text-primary-s"
								)}
							>
								{s.title}
							</h2>
						</div>
					))}
				</div>

				<div className="pt-12 pb-[3.75rem] pl-16 pr-10">
					<h3
						className="text-4xl font-bold"
						dangerouslySetInnerHTML={{ __html: data[activeIndex]!.header }}
					/>
					<p
						className="mt-10 text-2xl leading-10"
						dangerouslySetInnerHTML={{ __html: data[activeIndex]!.description }}
					/>
				</div>
			</div>
		</section>
	);
}
