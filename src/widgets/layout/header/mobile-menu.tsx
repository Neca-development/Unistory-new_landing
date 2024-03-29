import { Portal } from "@shared/lib/hocs";
import clsx from "clsx";
import Link from "next/link";

import { CloseBtn } from "./close-btn.component";
import { Logo } from "./logo.component";
import { IRoutes } from "@shared/i18n";

interface IMobileMenuProps {
  routes: IRoutes;
  active: boolean;
  onClose: () => void;
}

export function MobileMenu(props: IMobileMenuProps) {
  const { active, routes, onClose } = props;

  return (
    <Portal>
      <aside
        className={clsx(
          "fixed top-0 left-0 h-screen w-full bg-[#00000030] transition-transform duration-300 lg:hidden z-[100]",
          active ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex h-full flex-col bg-light-surface px-[1rem] pt-[28px] pb-32 dark:bg-dark-surface">
          <div className="flex items-center justify-between">
            <div className="h-8">
              <Logo mobileMenu={true} />
            </div>
            <button onClick={onClose} className="p-[0.375rem]">
              <CloseBtn />
            </button>
          </div>
          <nav className="mt-[65px] flex-1">
            {Object.keys(routes).map((key) => {
              const page = routes[key as keyof typeof routes];
              return (
                <Link
                  className="mb-[2rem] block text-[1.5rem] font-medium leading-none text-dark-surface dark:text-light-surface"
                  key={key}
                  onClick={onClose}
                  href={page.route}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
          <a
            href="mailto:business@unistory.org"
            className="text-[1.25rem] font-medium text-dark-surface dark:text-light-surface"
          >
            business@unistory.org
          </a>
        </div>
      </aside>
    </Portal>
  );
}
