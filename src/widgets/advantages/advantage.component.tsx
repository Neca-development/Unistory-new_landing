interface AdvantageProps {
  text: string;
  advantageNumber: number;
  link: string;
}

export const Advantage: React.FC<AdvantageProps> = ({ text, advantageNumber, link }) => {
  return (
    <a href={link}>
      <div className="flex px-[0.3125rem] py-[0.5rem] min-w-[15.3125rem] max-w-[18.75rem] bg-light-bg-accent dark:bg-dark-bg-secondary m-md:min-w-[13.6875rem] rounded-lg items-center">
        <div className="h-[3.5rem] min-w-[3.5rem] text-[1.625rem] font-semibold bg-gradient-to-tr from-bg-secondary dark:from-bg-gradient-gray-start to-bg-accent dark:to-bg-accent rounded-md flex items-center justify-center m-md:min-w-[2rem] m-md:h-[2rem] m-md:text-lg text-[white]">
          {advantageNumber}
        </div>
        <div className="ml-3 text-sm m-md:text-xs dark:text-[white]">{text}</div>
      </div>
    </a>
  );
};
