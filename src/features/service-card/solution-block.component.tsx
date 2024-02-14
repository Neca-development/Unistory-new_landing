import cubeImage from "@public/assets/images/homepage/cube.png";

import Image from "next/image";

export const SolutionAnimatedBlock = () => {
  return (
    <div className="relative ml-4 mb-8 mt-12">
      <div className="animate-solution-big-circle absolute top-[40px] left-[40px] w-7 h-7 rounded-full blur bg-[#000]"></div>
      <div className="animate-solution-small-circle absolute top-[60px] left-[85px] w-5 h-5 rounded-full blur-[6px] bg-[#000]"></div>
      <Image src={cubeImage} alt="Custom Solution" className="relative z-[1] w-[140px] h-[140px]" />
    </div>
  );
};
