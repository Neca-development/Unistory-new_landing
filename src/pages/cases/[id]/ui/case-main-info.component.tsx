import { ICase } from "@shared/lib/types";

interface ICaseInfoItemProps {
	data?: ICase["main"][0];
}

function CaseInfoItem({ data }: ICaseInfoItemProps) {
	return (
		<section className="mb-[7.5rem] last:mb-0">
			<div className="container">
				<h2 className="font-bold text-[2.875rem]">{data?.title}</h2>
				{data?.text?.map((item) => (
					<div className="mt-10">
						<h3 className="font-bold text-8 mb-5">{item.subtitle}</h3>
						<p dangerouslySetInnerHTML={{ __html: item.text || "" }} />
					</div>
				))}
			</div>
			{data?.banner && (
				<img
					src={data.banner}
					className="w-full h-[27.3125rem] object-cover mt-[7.5rem]"
				/>
			)}
		</section>
	);
}

interface ICaseMainInfoProps {
	data?: ICase["main"];
}
export function CaseMainInfo({ data }: ICaseMainInfoProps) {
	return (
		<div className="case-description bg-light-bg-accent dark:bg-dark-accent pt-[7.5rem]">
			{data?.map((item) => (
				<CaseInfoItem data={item} />
			))}
		</div>
	);
}
