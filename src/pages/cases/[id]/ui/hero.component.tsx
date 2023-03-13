import { ICase } from "@shared/lib/types";

export function CaseHero({ data }: { data: ICase }) {
	return (
		<>
			<h1
				className="container mt-[95px] text-[4rem] font-bold"
				dangerouslySetInnerHTML={{ __html: data?.title }}
			/>
			<img
				src={data?.banner}
				className="h-[480px] w-full object-cover mt-[4rem]"
				alt=""
			/>
			<div className="container">
				<h2 className="mt-20 text-light-text-secondary dark:text-dark-text-secondary text-2xl">
					Задача
				</h2>
				<p className="max-w-[52.5rem] mt-6 text-2xl">{data?.description}</p>
				<ul className="mt-40 flex gap-x-40">
					<li>
						<h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl">
							Бюджет
						</h3>
						<b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2">
							~ {data?.params?.budget} ₽
						</b>
					</li>
					<li>
						<h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl">
							Срок
						</h3>
						<b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2">
							{data?.params?.period} месяцев
						</b>
					</li>
					<li>
						<h3 className="text-light-text-secondary dark:text-dark-text-secondary text-2xl">
							Год
						</h3>
						<b className="text-light-text-primary dark:text-dark-text-primary text-[2.125rem] mt-2">
							{data?.params?.year}
						</b>
					</li>
				</ul>
			</div>
		</>
	);
}
