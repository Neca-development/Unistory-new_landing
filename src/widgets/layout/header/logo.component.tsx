import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
			<div className="animate-logoOverflow overflow-hidden">
				<IconComponent
					key={"logo" + _theme}
					name={_theme === "dark" ? "logoDark" : "logoLight"}
					className="animate-mainLogoWidth"
				/>
			</div>
		</div>
	);
}
