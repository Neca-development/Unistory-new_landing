import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function MenuBtn() {
	const { theme } = useTheme();
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
			key={"menuBtn" + theme}
			name={theme === "dark" ? "menuBtnDark" : "menuBtnLight"}
		/>
	);
}
