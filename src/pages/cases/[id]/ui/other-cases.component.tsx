import type { ICase } from "@shared/lib/types";
// eslint-disable-next-line boundaries/element-types
import { WorksCard } from "@widgets/works-card";

interface IProperties {
  otherCases: ICase[];
  title: string;
}

export function OtherCases({ title, otherCases }: IProperties) {
  return (
    <section className="container mt-10 pb-20 md:mt-20 t-xs:pb-16">
      <h2 className="text-5xl font-bold t-xs:text-2xl">{title}</h2>

      <div className="mt-16 grid grid-cols-3 gap-10 t-xs:mt-8 t-xs:grid-cols-1 t-xs:gap-8">
        {otherCases.map((c, index) => (
          <WorksCard
            key={c.id}
            work={c}
            isLargeImage={index == 0}
            additionalClassnames="[&:nth-child(n+3)]:hidden sm:[&:first-child]:col-span-2 sm:[&:first-child]:pt-[47.3%]"
          />
        ))}
      </div>
    </section>
  );
}
