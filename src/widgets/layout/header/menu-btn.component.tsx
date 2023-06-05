import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useMounted } from "@shared/lib/hooks/useMounted";

export function MenuBtn() {
	const { theme, systemTheme } = useTheme();
	const _theme = theme === "system" ? systemTheme : theme;
	const mounted = useMounted()

	if (!mounted) {
		return null;
	}

	return (
		<IconComponent
			key={"menuBtn" + _theme}
			name={_theme === "dark" ? "menuBtnDark" : "menuBtnLight"}
		/>
	);
}
