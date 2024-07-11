interface VideoProps {
  video?: string;
}

export const VideoComponent = ({ video }: VideoProps) => {
  return (
    <iframe
      className="mt-[4rem] w-full max-w-[59.625rem] h-[25.6875rem] sm:h-[33.5rem] md:h-[33rem] lg:h-[28.75rem]"
      src={video}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
