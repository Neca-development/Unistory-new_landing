import { Portal } from "@shared/lib/hocs";
import clsx from "clsx";
import Link from "next/link";

import { CloseBtn } from "./close-btn.component";
import { Logo } from "./logo.component";

interface IMobileMenuProps {
  routes: {
    label: string;
    route: string;
  }[];
  active: boolean;
  onClose: () => void;
}

export function MobileMenu(props: IMobileMenuProps) {
  const { active, routes, onClose } = props;

  return (
    <Portal>
      <aside
        className={clsx(
          "fixed top-0 left-0 h-screen w-full bg-[#00000030] transition-transform duration-300 lg:hidden z-50",
          active ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex h-full flex-col bg-light-surface px-[1rem] pt-[28px] pb-[80px] dark:bg-dark-surface">
          <div className="flex items-center justify-between">
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
                  onClick={onClose}
                  className={clsx(
                    "mb-[2rem] block text-[2.25rem] font-medium leading-none text-dark-surface dark:text-light-surface",
                    route.includes("become-customer") && "dark:text-[#ec5f3b] text-[#ec5f3b]"
                  )}
                  href={route}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <a
            href="mailto:contact@unistory.app"
            className="text-[1.5rem] font-medium text-dark-surface dark:text-light-surface"
          >
            contact@unistory.app
          </a>
        </div>
      </aside>
    </Portal>
  );
}
