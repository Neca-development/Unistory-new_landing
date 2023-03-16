import { ICase } from "@shared/lib/types";

interface ITeamProps {
	data?: ICase["team"];
}

export function Team({ data }: ITeamProps) {
	return (
		<section className="bg-light-bg-accent dark:bg-dark-accent pt-[12.5rem]">
			<div className="container">
				<h2 className="font-bold text-[2.875rem]">Над проектом работали</h2>
				<ul className="mt-20 grid grid-cols-4 gap-x-[2.4375rem] gap-y-[3.9375rem]">
					{data?.map((item) => (
						<li>
							<div className="font-semibold text-2xl">{item.name}</div>
							<p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
								{item.position}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
