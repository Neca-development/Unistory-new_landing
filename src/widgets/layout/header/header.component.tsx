import { ROUTESEN, ROUTESRU } from "@shared/i18n/constants";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Logo } from "./logo.component";
import { MobileMenu } from "./mobile-menu";
import { MenuBtn } from "./menu-btn.component";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
	const { className, children } = props;
	// const router = useRouter()\
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
				<Link href={"/"} className="w-[8.625rem] min-h-[2.5rem]">
					<Logo />
				</Link>

				<div className="hidden lg:flex items-center space-x-10 ">
					{ROUTES.map(({ label, route }, index) => {
						return (
							<Link
								key={index}
								className={clsx(
									"text-light-text-secondary dark:text-dark-text-secondary"
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
					<MenuBtn />
				</button>

				{children}
			</div>
		</header>
	);
});

Header.displayName = "Header";

export default Header;
