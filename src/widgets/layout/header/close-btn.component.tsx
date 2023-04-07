import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CloseBtn() {
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
		<IconComponent
			key={"close" + _theme}
			name={_theme === "dark" ? "closeDark" : "closeLight"}
		/>
	);
}
