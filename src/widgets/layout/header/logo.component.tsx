import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useAnimationStore } from "@shared/lib/store";

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const _theme = theme === "system" ? systemTheme : theme;
	const [mounted, setMounted] = useState(false);
	const {asPath} = useRouter()
	const isHome = !asPath.split('/').includes('cases')
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
		<div className={clsx("absolute", isHome && shouldAnimate && 'animate-logoEnter ml-[0.5rem] lg:ml-[2rem]')}>
			<div className={clsx(
				"overflow-hidden flex",
				_theme === 'dark' ? 'flex-col-reverse' : 'flex-col',
				isHome && shouldAnimate && 'animate-logoOverflowMobile lg:animate-logoOverflowLg mt-4'
			)}>
				<IconComponent
					key="logoLight"
					name="logoLight"
					width="8rem"
					className={clsx(isHome && shouldAnimate && "animate-mainLogoWidthMobile lg:animate-mainLogoWidthLg", _theme !== 'light' && 'opacity-0')}
				/>
				<IconComponent
					key="logoDark"
					name="logoDark"
					width="8rem"
					className={clsx(isHome && shouldAnimate && "animate-mainLogoWidthMobile lg:animate-mainLogoWidthLg", _theme !== 'dark' && 'opacity-0')}
				/>
			</div>
		</div>
	);
}
