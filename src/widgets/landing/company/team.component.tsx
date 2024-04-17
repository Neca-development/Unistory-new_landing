import { CompanyTeamEn, CompanyTeamRu } from "@shared/i18n";
import { IIconComponentProperties, IconComponent } from "@shared/ui";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const CompanyTeam = () => {
  const { locale } = useRouter();

  const featuresData = useMemo(() => {
    return locale === "ru" ? CompanyTeamRu : CompanyTeamEn;
  }, [locale]);

  return (
    <div className="container py-9 md:py-16">
      <h2 className="mb-6 font-bold text-3xl md:mb-10 md:text-5xl">{featuresData.title}</h2>
      <div className="grid gap-3 grid-cols-team overflow-x-auto no-scrollbar md:gap-6 md:grid-cols-4">
        {featuresData.team.map((member, index) => (
          <div key={index}>
            <div className="mb-4 relative h-0 pt-[100%] rounded-xl overflow-hidden md:mb-5">
              <img
                className="w-full h-full absolute left-0 top-0 object-cover"
                src={member.image}
                alt={member.name}
              />
            </div>
            <h3 className="mb-1 font-semibold md:text-lg md:mb-2">{member.name}</h3>
            <p className="text-dark-text-secondary mb-4 text-xs md:text-sm">{member.post}</p>
            <div className="flex">
              {Object.entries(member.socials).map(([social, link]) => (
                <a
                  href={link}
                  target="_blank"
                  rel="nofollow"
                  className="w-8 dark:text-dark-text-secondary text-light-text-secondary hover:!text-primary-s"
                >
                  {social === "linkedIn" && (
                    <IconComponent className="w-full h-full" name="companyLinkedIn" />
                  )}
                  {social === "telegram" && (
                    <IconComponent className="w-full h-full" name="companyTelegram" />
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
