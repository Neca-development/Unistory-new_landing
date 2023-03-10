import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";

export function Logo() {
	const { theme } = useTheme();

	return (
		<IconComponent
			key={"logo" + theme}
			name={theme === "dark" ? "logoDark" : "logoLight"}
		/>
	);
}
