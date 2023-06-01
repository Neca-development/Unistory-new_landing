import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useAnimationStore } from "@shared/lib/store";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const {temperatureTheme} = useThemeContext()
	const _theme = theme === "system" ? systemTheme : theme;
	const [mounted, setMounted] = useState(false);

	const {asPath} = useRouter()
	const isHome = asPath === '/'
	const {shouldAnimate} = useAnimationStore()

	useEffect(() => {
		if (window) {
			setMounted(true);
		}
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className={clsx("absolute top-1/2 left-0 -translate-y-1/2 ml-[0.5rem] lg:ml-[2rem]", isHome && shouldAnimate && 'animate-logo-enter')}>
			<div className={clsx(
				"overflow-hidden flex mt-7",
				_theme === 'dark' ? 'flex-col-reverse' : 'flex-col',
				isHome && shouldAnimate && 'animate-logo-overflow-mobile lg:animate-logo-overflow-lg'
			)}>
				<IconComponent
					key="logoLight"
					name="logoLight"
					width="8rem"
					className={clsx(
						"duration-300",
						isHome && shouldAnimate && "animate-main-logo-width-mobile lg:animate-main-logo-width-lg",
						_theme !== 'light' && 'opacity-0',
						temperatureTheme === 'winter' ? "fill-winter" : "fill-summer"
					)}
				/>
				<IconComponent
					key="logoDark"
					name="logoDark"
					width="8rem"
					className={clsx(
						"duration-300",
						isHome && shouldAnimate && "animate-main-logo-width-mobile lg:animate-main-logo-width-lg",
						_theme !== 'dark' && 'opacity-0',
						temperatureTheme === 'winter' ? "fill-winter" : "fill-summer"
					)}
				/>
			</div>
		</div>
	);
}
