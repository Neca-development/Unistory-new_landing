import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const _theme = theme === "system" ? systemTheme : theme;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (window) {
			setMounted(true);
		}
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="absolute animate-logoEnter ml-[0.5rem] lg:ml-[2rem]">
			<div className={clsx("animate-logoOverflow overflow-hidden flex mt-4", _theme === 'dark' ? 'flex-col-reverse' : 'flex-col')}>
				<IconComponent
					key="logoLight"
					name="logoLight"
					width="8rem"
					className={clsx("animate-mainLogoWidth", _theme !== 'light' && 'opacity-0')}
				/>
				<IconComponent
					key="logoDark"
					name="logoDark"
					width="8rem"
					className={clsx("animate-mainLogoWidth", _theme !== 'dark' && 'opacity-0')}
				/>
			</div>
		</div>
	);
}
