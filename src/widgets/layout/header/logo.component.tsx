import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const {temperatureTheme} = useThemeContext()
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
		<div className="relative">
			<IconComponent
				key="logoLight"
				name="logoLight"
				fill={temperatureTheme === 'winter' ? "#4FCCD5" : "#EC5F3B"}
				className={clsx("duration-300 absolute", _theme === 'light' ? '' : 'opacity-0')}
			/>
			<IconComponent
				key="logoDark"
				name="logoDark"
				fill={temperatureTheme === 'winter' ? "#4FCCD5" : "#EC5F3B"}
				className={clsx("duration-300 absolute", _theme === 'dark' ? '' : 'opacity-0')}
			/>
		</div>
	);
}
