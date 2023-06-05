import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";
import { useMounted } from "@shared/lib/hooks/useMounted";

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const {temperatureTheme} = useThemeContext()
	const _theme = theme === "system" ? systemTheme : theme;
	const mounted = useMounted()

	if (!mounted) {
		return null;
	}

	return (
		<div className="relative">
			<IconComponent
				key="logoLight"
				name="logoLight"
				className={clsx(
					"duration-300 absolute",
					_theme === 'light' ? '' : 'opacity-0',
					temperatureTheme === 'winter' ? "fill-winter" : "fill-summer"
				)}
			/>
			<IconComponent
				key="logoDark"
				name="logoDark"
				className={clsx(
					"duration-300 absolute",
					_theme === 'dark' ? '' : 'opacity-0',
					temperatureTheme === 'winter' ? "fill-winter" : "fill-summer"
				)}
			/>
		</div>
	);
}
