import { ICaseLink } from "@shared/lib/types";
import { IconComponent } from "@shared/ui";
import Link from "next/link";

export function Links(props: { links: ICaseLink[] }) {
  return (
    <div className="case-description bg-light-bg-accent dark:bg-dark-bg-accent">
      <div className="container flex gap-4">
        {props.links.map(({ link, label, iconName }) => (
          <div className="flex items-center mt-[7.5rem] t-xs:mt-10">
            {iconName ? (
              <Link
                className="w-fit text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:py-2 t-xs:text-base"
                target={"_blank"}
                href={link}
              >
                <IconComponent name={iconName} />
              </Link>
            ) : (
              <Link
                className="w-fit text-2xl font-medium text-light-text-primary dark:text-dark-text-primary t-xs:mt-6 t-xs:py-2 t-xs:text-base t-xs:hidden"
                target={"_blank"}
                href={link}
              >
                {label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
