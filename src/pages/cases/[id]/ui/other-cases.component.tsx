import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { ICase } from "@shared/lib/types";
import { WorksCard } from "@widgets/works-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IProps {
  otherCases: ICase[];
  title: string;
}

export default function OtherCases({ title, otherCases }: IProps) {
  const isMobile = useDetectDeviceType();

  return (
    <section className="container mt-10 pb-24 t-xs:pb-16">
      <h2 className="text-5xl font-bold t-xs:text-2xl">{title}</h2>

      <Swiper
        className="mt-10 select-none t-xs:mt-8"
        slidesPerView={1.5}
        spaceBetween={isMobile ? 20 : 40}
      >
        {otherCases.map((c) => (
          <SwiperSlide key={c.id}>
            <WorksCard work={c} isLargeImage={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
