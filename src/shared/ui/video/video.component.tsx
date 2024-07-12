interface VideoProps {
  video?: string;
}

export const VideoComponent = ({ video }: VideoProps) => {
  return (
    <div className="mt-[4rem] w-full max-w-[59.625rem] relative pb-[46.25%] m-md:!w-[25rem] m-md:!h-[25rem] m-2xl:!w-[18rem] m-2xl:!h-[18rem]   m-md:mx-auto ">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
