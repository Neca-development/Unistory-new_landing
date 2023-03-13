import { ICase } from "@shared/lib/types";
import { CaseCategoryIcon } from "@shared/ui";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface IWorksCardInterface {
	work: ICase;
}

export function WorksCard(props: IWorksCardInterface) {
	const { work } = props;

	const categories = work?.categories.join(", ");

	return (
		<Link
			className={clsx(
				`noise rounded-sm p-6 pt-4 h-[25rem] flex flex-col bg-center transform-gpu group overflow-hidden`,
				work?.additionalClassnames
			)}
			href={`/cases/${work?.id}`}
		>
			<img
				src="assets/images/cases/stat-service.jpg"
				className="absolute w-full h-full top-0 left-0 object-cover -z-50 group-hover:scale-105 transition-all"
				alt=""
			/>
			<div className="flex items-center space-x-2">
				{work?.icons.map((icon, idx) => (
					<CaseCategoryIcon key={idx} icon={icon} variant={work?.textColor} />
				))}
			</div>
			<div
				className={clsx(
					"mt-auto",
					work?.textColor === "white" && "text-pale-text",
					work?.textColor === "black" && "text-black-text"
				)}
			>
				<h3 className="font-bold text-2xl">{work?.title}</h3>
				<p className="text-base mt-1">{categories}</p>
			</div>
		</Link>
	);
}
