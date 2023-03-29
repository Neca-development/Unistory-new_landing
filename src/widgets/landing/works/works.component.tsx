import { WorksRu, WorksEn } from "@shared/i18n";
import { CASES } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import { WorksCard } from "@widgets/works-card";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function Works() {
	const { locale } = useRouter();

	const text = React.useMemo(() => {
		if (locale === "ru") {
			return WorksRu;
		}

		return WorksEn;
	}, [locale]);

	return (
		<section className="bg-light-surface dark:bg-dark-surface">
			<div className="container pt-20 pb-[3.5rem] t-xs:pt-10">
				<h2
					className="font-bold text-5xl t-xs:text-[1.375rem]"
					dangerouslySetInnerHTML={{ __html: text.title }}
				/>

				<div className="grid grid-cols-3 gap-10 mt-16 t-xs:grid-cols-1 t-xs:mt-6 display t-xs:gap-4">
					{CASES.slice(0, 7).map((work, index) => (
						<WorksCard
							key={index}
							work={work}
							additionalClassnames={clsx("[&:nth-child(6n+1)]:col-span-2 t-xs:!col-span-1 t-xs:[&:nth-child(n+4)]:hidden")}
						/>
					))}
				</div>

				<Link
					href="/cases"
					className="flex items-center py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base"
				>
					<IconComponent
						name="arrowRight"
						className="w-10 mr-4 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent t-xs:w-7"
					/>
					{text.moreCases}
				</Link>
			</div>
		</section>
	);
}
