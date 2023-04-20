import { WorksRu, WorksEn } from "@shared/i18n";
import { CASES } from "@shared/lib";
import { ICase } from "@shared/lib/types";
import { IconComponent } from "@shared/ui";
import { WorksCard } from "@widgets/works-card";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export function Works() {
	const { locale } = useRouter();
	const [cases, setCases] = React.useState<ICase[]>([]);

	const text = React.useMemo(() => {
		if (locale === "ru") {
			return WorksRu;
		}

		return WorksEn;
	}, [locale]);

	useEffect(() => {
		if (!window) return;

		if (window.matchMedia("(max-width: 647px)").matches) {
			setCases(CASES.slice(0, 3));
			return;
		}

		setCases(CASES.slice(0, 3));
	}, []);

	// function to get 2 cases more on click
	const getMoreCases = () => {
		setCases(CASES.slice(0, cases.length + 2));
	};

	return (
		<section className="bg-light-surface dark:bg-dark-surface">
			<div className="container pt-20 pb-[3.5rem] t-xs:pt-10">
				<h2
					className="font-bold text-5xl t-xs:text-[1.375rem]"
					dangerouslySetInnerHTML={{ __html: text.title }}
				/>

				<div className="grid grid-cols-3 gap-10 mt-16 t-xs:grid-cols-1 t-xs:mt-6 display t-xs:gap-4">
					{cases.map((work, index) => (
						<WorksCard
							key={index}
							work={work}
						/>
					))}
				</div>

				<Link
					href="/cases"
					className="items-center py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base t-xs:hidden flex"
				>
					<IconComponent
						name="arrowRight"
						className="w-10 mr-4 first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent t-xs:w-7"
					/>
					{text.moreCases}
				</Link>
				{cases.length < CASES.length && (
					<button
						onClick={getMoreCases}
						className="t-xs:block py-4 pr-8 w-fit mt-10 text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base hidden"
					>
						{text.moreCases}
					</button>
				)}
			</div>
		</section>
	);
}
