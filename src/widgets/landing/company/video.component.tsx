import { useRouter } from "next/router";
import videoPoster from "@public/assets/images/company/video-poster.jpg";
import { useState } from "react";
import clsx from "clsx";
import { IconComponent } from "@shared/ui";

export const CompanyVideo = () => {
  const { locale } = useRouter();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  if (locale === "en") return null;

  const onPlayButtonCLick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container py-8 md:py-16">
      <div className="relative h-0 pt-[56.25%] overflow-hidden rounded-xl">
        <img
          className={clsx(
            "w-full h-full absolute left-0 top-0 object-cover transition-all pointer-events-none",
            isPlaying && "opacity-0"
          )}
          src={videoPoster.src}
          alt=""
        />
        <div
          onClick={onPlayButtonCLick}
          className={clsx(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-light-bg-accent bg-text-bg-gradient dark:text-bg-gradient dark:bg-light-bg-accent rounded-full flex items-center justify-center cursor-pointer transition-all hover:!bg-bg-accent md:w-20 md:h-20",
            isPlaying && "opacity-0 pointer-events-none"
          )}
        >
          <IconComponent name="playButton" className="ml-1 w-4 h-4 md:w-8 md:h-8" />
        </div>
        {isPlaying && (
          <iframe
            src="https://www.youtube.com/embed/vCDT1lwWfkE?si=0l9koRmIGbMoTRA-?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&autoplay=1"
            className="w-full h-full left-0 top-0 absolute"
          />
        )}
      </div>
    </div>
  );
};
