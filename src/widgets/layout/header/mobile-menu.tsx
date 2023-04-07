import Link from "next/link";
import clsx from "clsx";
import { Logo } from "./logo.component";
import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { Portal } from "@shared/lib/hocs";
import { CloseBtn } from "./close-btn.component";

export function MobileMenu({
	routes,
	active,
	onClose,
}: {
	routes: {
		label: string;
		route: string;
	}[];
	active: boolean;
	onClose: () => void;
}) {
	const { theme } = useTheme();

	return (
		<Portal>
			<aside
				className={clsx(
					"fixed top-0 left-0 h-screen w-full bg-[#00000030] pt-[80px] lg:hidden -translate-y-full",
					active && "animate-moveIn"
				)}
			>
				<div className="bg-light-surface dark:bg-dark-surface h-full px-[1rem] pt-[28px] pb-[40px] flex flex-col">
					<div className="flex justify-between items-center">
						<Logo />
						<button onClick={onClose} className="p-[0.375rem]">
							<CloseBtn />
						</button>
					</div>
					<nav className="mt-[65px] flex-1">
						{routes.map(({ label, route }, index) => {
							return (
								<Link
									key={index}
									className={clsx(
										"text-dark-surface dark:text-light-surface block mb-[2rem] text-[2.25rem] leading-none font-medium",
										route === "/#become-customer" && "text-[#EC5F3B]"
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
					</nav>
					<a
						href="mailto:hello@unistory.team"
						className="text-dark-surface dark:text-light-surface font-medium text-[1.5rem]"
					>
						hello@unistory.team
					</a>
				</div>
			</aside>
		</Portal>
	);
}
