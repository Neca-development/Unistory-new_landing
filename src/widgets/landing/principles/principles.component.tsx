import { PrinciplesRu, PrinciplesEn } from "@shared/i18n";
import { MessageToggler } from "@shared/ui";
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
		<section className="container pt-20 pb-40">
			<div className="flex items-center space-x-4">
				{data.items.map((item, index) => (
					<React.Fragment key={item.title}>
						<button
							className={clsx(
								"text-2xl p-2 font-medium",
								activeIdx === index && "text-primary-s"
							)}
							onClick={() => setActiveIdx(index)}
						>
							{item.title}
						</button>
						{index < data.items.length - 1 && (
							<span className="text-5xl leading-none block -mt-1">&sdot;</span>
						)}
					</React.Fragment>
				))}
			</div>

			<div className="mt-12 relative">
				<MessageToggler
					toggleClassName="absolute top-[-1.5rem] left-[39.2rem]"
					messageData={data.message}
				/>
				<p className="font-bold text-5xl leading-[3.5rem]">
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
