interface VideoProps {
  video?: string;
}

export const VideoComponent = ({ video }: VideoProps) => {
  return (
    <div className="mt-[4rem] w-full max-w-[59.625rem] relative pb-[46.25%] m-md:!w-[20rem] m-md:!h-[20rem]   mx-auto ">
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
