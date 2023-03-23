import { ICase } from "@shared/lib/types";
import { CaseCategoryIcon } from "@shared/ui";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IWorksCardInterface {
	work: ICase;
	additionalClassnames?: string;
}

export function WorksCard(props: IWorksCardInterface) {
	const { work, additionalClassnames } = props;
  const {locale} = useRouter()

	const categories = work?.categories[locale || 'ru']?.join(", ");

	return (
		<Link
			className={clsx(
				`noise rounded-sm  pt-4 h-[25rem] flex flex-col bg-center transform-gpu group overflow-hidden`,
				work?.additionalClassnames,
				additionalClassnames
			)}
			href={`/cases/${work?.id}`}
		>
			<div className="p-6 pt-0">
				<img
					src={work?.banner}
					className="absolute w-full h-full top-0 left-0 object-cover -z-50 group-hover:scale-105 transition-all"
					alt=""
				/>
				<div className="flex items-center space-x-2">
					{work?.icons.map((icon, idx) => (
						<CaseCategoryIcon key={idx} icon={icon} variant={work?.textColor} />
					))}
				</div>
			</div>
			<div
				className={clsx(
					"mt-auto backdrop-blur-[50px] p-6",
					work?.textColor === "white" && "text-pale-text",
					work?.textColor === "black" && "text-black-text"
				)}
			>
				<h3 className="font-bold text-2xl whitespace-pre-line">
					{work?.title}
				</h3>
				<p className="text-base mt-1">{categories}</p>
			</div>
		</Link>
	);
}
