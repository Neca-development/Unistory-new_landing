import { ROUTESEN, ROUTESRU } from "@shared/i18n/constants";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Logo } from "./logo.component";
import { IconComponent } from "@shared/ui";
import { MobileMenu } from "./mobile-menu";
import { useTheme } from "next-themes";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
	const { className, children } = props;
	// const router = useRouter()\
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { theme } = useTheme();

	const { locale } = useRouter();

	const ROUTES = React.useMemo(() => {
		if (locale === "ru") {
			return ROUTESRU;
		}

		return ROUTESEN;
	}, [locale]);

	function openMenu() {
		setIsMenuOpen(true);
	}

	function closeMenu() {
		setIsMenuOpen(false);
	}

	return (
		<header {...props} className={clsx("relative flex w-full", className)}>
			<div className="container flex justify-between items-center py-4">
				<Link href={"/"} className="w-[8.625rem]">
					<Logo />
				</Link>

				<div className="hidden lg:flex items-center space-x-10 ">
					{ROUTES.map(({ label, route }, index) => {
						return (
							<Link
								key={index}
								className={clsx(
									"text-light-text-secondary dark:text-dark-text-secondary"
									// pathname.includes(route)
									// 	? "text-light-text-primary dark:text-dark-text-primary underline"
									// 	: "text-light-text-secondary dark:text-dark-text-secondary"
								)}
								href={route}
							>
								{label}
							</Link>
						);
					})}
				</div>

				<MobileMenu active={isMenuOpen} routes={ROUTES} onClose={closeMenu} />

				<button onClick={openMenu} className="lg:hidden">
					<IconComponent
						key={"menuBtn" + theme}
						name={theme === "dark" ? "menuBtnDark" : "menuBtnLight"}
					/>
				</button>

				{children}
			</div>
		</header>
	);
});

Header.displayName = "Header";

export default Header;
