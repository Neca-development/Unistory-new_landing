import { FooterTextEn, FooterTextRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";

export interface IFooterProperties extends React.ComponentProps<"footer"> {
	showAddress?: boolean;
}

export const Footer = React.memo((props: IFooterProperties) => {
	const { className, showAddress = false } = props;

	const { locale } = useRouter();

	const text = React.useMemo(() => {
		if (locale === "ru") {
			return FooterTextRu;
		}
		return FooterTextEn;
	}, [locale]);

	return (
		<footer className={clsx("bg-dark-surface", className)}>
			<div
				className={clsx(
					"container pb-6 text-dark-text-primary",
					showAddress ? "pt-14" : "pt-9"
				)}
			>
				<div className="flex items-start t-xs:flex-col">
					{showAddress &&
						text.cities.map((city) => (
							<div
								className="flex flex-col space-y-3 w-[18.125rem] first:mr-6 t-xs:mb-12"
								key={city.name}
							>
								<p className="text-2xl font-medium t-xs:text-xl">{city.name}</p>
								<a
									href={`tel:${city.tel}`}
									className="text-dark-text-primary text-base"
								>
									{city.tel}
								</a>
								<p className="opacity-50 text-base">{city.address}</p>
							</div>
						))}

					<div
						className={clsx(
							showAddress
								? "ml-14 space-y-7 t-xs:ml-0"
								: "flex justify-between items-center grow-[1]"
						)}
					>
						<h4
							className="font-medium text-2xl"
							dangerouslySetInnerHTML={{ __html: text.slogan }}
						/>
						<div className="flex items-center space-x-6 opacity-50">
							{/* <a rel='nofollow' href='https://t.me/unistory_app' target='_blank'>
                <IconComponent name='telegram' className='w-6' />
              </a> */}
							<a
								rel="nofollow"
								href="https://wa.me/89117417477"
								target="_blank"
							>
								<IconComponent name="whatsApp" className="w-6" />
							</a>
							<a
								rel="nofollow"
								href="https://clutch.co/profile/unistory"
								target="_blank"
							>
								<IconComponent name="clutch" className="w-[4.375rem]" />
							</a>
							<a
								rel="nofollow"
								href="https://www.upwork.com/ag/unistory/"
								target="_blank"
							>
								<IconComponent name="upwork" className="w-20" />
							</a>
						</div>
					</div>
				</div>

				<hr className="mt-8 mb-6 border-2 text-[#2b2b2b]" />

				<div className="flex items-center justify-between">
					<IconComponent name="logoDarkOutline" className="w-[6.5rem]" />
					<p className=" opacity-50 text-xs">
						&copy; {new Date().getFullYear()} Unistory
					</p>
				</div>
			</div>
		</footer>
	);
});

Footer.displayName = "Footer";

export default Footer;
