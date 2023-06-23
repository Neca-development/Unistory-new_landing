import { ICase } from "@shared/lib/types";
import { WorksCard } from "@widgets/works-card";

interface IProps {
  otherCases: ICase[];
  title: string;
}

export default function OtherCases({ title, otherCases }: IProps) {
  return (
    <section className="container mt-10 md:mt-20 pb-20 t-xs:pb-16">
      <h2 className="text-5xl font-bold t-xs:text-2xl">{title}</h2>

      <div className="grid grid-cols-3 gap-10 mt-16 t-xs:gap-8 t-xs:mt-8 t-xs:grid-cols-1">
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
