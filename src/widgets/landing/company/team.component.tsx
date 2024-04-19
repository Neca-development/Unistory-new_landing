import { CompanyTeamEn, CompanyTeamRu } from "@shared/i18n";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const CompanyTeam = () => {
  const { locale } = useRouter();

  const teamData = useMemo(() => {
    return locale === "ru" ? CompanyTeamRu : CompanyTeamEn;
  }, [locale]);

  return (
    <div className="container py-7 md:py-16">
      <h2 className="mb-6 font-bold text-3xl md:mb-10 md:text-5xl">{teamData.title}</h2>
      <div className="grid gap-3 grid-cols-team overflow-x-auto no-scrollbar md:gap-6 md:grid-cols-4">
        {teamData.team.map((member) => (
          <div key={member.name}>
            <div className="mb-4 relative h-0 pt-[100%] rounded-xl overflow-hidden md:mb-5">
              <img
                className="w-full h-full absolute left-0 top-0 object-cover"
                src={member.image}
                alt={member.name}
              />
            </div>
            <h3 className="mb-1 font-semibold md:text-lg md:mb-2">{member.name}</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 text-xs md:text-sm">
              {member.post}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
