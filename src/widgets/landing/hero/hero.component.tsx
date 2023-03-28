import { HeroRu, HeroEn } from "@shared/i18n";
import { useThemeContext } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import * as React from "react";

const iconClassnameByTheme =
	"first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";

export interface IHeroProperties {}

export function Hero() {
	const { textClassName, temperatureTheme, setTemperatureTheme } =
		useThemeContext();
	const { setTheme, theme } = useTheme();

	const toggleThemeHandler = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const toggleTemperatureThemeHandler = () => {
		setTemperatureTheme(temperatureTheme === "summer" ? "winter" : "summer");
	};

	const { locale } = useRouter();

	const text = React.useMemo(() => {
		if (locale === "ru") {
			return HeroRu;
		}

		return HeroEn;
	}, [locale]);

	return (
		<div className={clsx("container pt-[7.125rem] t-xs:pt-12 pb-16")}>
			<section className="relative pb-[8.875rem] t-xs:pb-16">
				<h1 className={clsx(textClassName, "pr-24 text-h1 t-xs:text-mob-h1 t-xs:pr-0")}>
					{text?.description.first} <br />
					{text?.description.second}
					<button className="relative top-[-0.5rem] w-10 p-2 t-xs:absolute t-xs:top-16 t-xs:right-[0.4rem]">
						<IconComponent name="earth" className={iconClassnameByTheme} />
					</button>
					<span className="font-roboto font-light italic text-light-text-primary dark:text-dark-text-primary">
						{text?.description.third}
					</span>
					<br />
					{text?.description.fourth}
				</h1>

				<button className="absolute -top-6 left-[18.2rem] w-10 p-2 t-xs:left-[7rem] t-xs:-top-10">
					<IconComponent name="cloud" className={iconClassnameByTheme} />
				</button>

				<button
					onClick={toggleTemperatureThemeHandler}
					className="absolute top-[2rem] right-[3rem] w-10 p-2 t-xs:top-[31rem]"
				>
					<IconComponent
						name={temperatureTheme}
						className={clsx(
							"first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent"
						)}
					/>
				</button>

				<button className="absolute bottom-[5.375rem] left-[10.5rem] w-10 p-2 t-xs:bottom-2 t-xs:left-6">
					<IconComponent name="rocket" className={iconClassnameByTheme} />
				</button>

				<button
					onClick={toggleThemeHandler}
					className="absolute bottom-8 right-[28rem] w-10 t-xs:right-0 t-xs:-bottom-16"
				>
					<IconComponent name="sun" className={iconClassnameByTheme} />
				</button>
			</section>

			<section className="flex items-center justify-between t-xs:block">
				<article className="flex items-center text-2xl t-xs:mb-8 font-medium">
					<p className="relative mr-4 text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem]">
						40
						<span className="relative -top-8 text-[3rem] text-primary-s">
							+
						</span>
					</p>
					<span dangerouslySetInnerHTML={{ __html: text?.params?.teamSize }} />
				</article>

				<article className="flex items-center text-2xl t-xs:mb-8 font-medium">
					<p className="relative mr-4 text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem]">
						70
						<span className="relative -top-8 text-[3rem] text-primary-s">
							+
						</span>
					</p>
					<span dangerouslySetInnerHTML={{ __html: text?.params?.projects }} />
				</article>

				<article className="flex items-center text-2xl font-medium">
					<p className="relative mr-4 text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem]">
						4.9
					</p>
					<span dangerouslySetInnerHTML={{ __html: text?.params?.rating }} />
				</article>
			</section>
		</div>
	);
}
