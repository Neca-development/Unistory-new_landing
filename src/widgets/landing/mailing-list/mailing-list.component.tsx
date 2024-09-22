import { useRouter } from "next/router";

export const MailingList = () => {
  const { locale } = useRouter();

  return (
    <div className="rounded-lg mb-[8.75rem] bg-mailing-list-bg-light dark:bg-mailing-list-bg mx-[4.125rem] p-[3.375rem] mt-[5.25rem] m-md:mx-[1.125rem] m-md:px-4 m-md:py-7">
      <div className="text-[2.875rem] font-bold m-md:text-[1.75rem]">
        <p>{locale === "ru" ? "Подпишитесь на рассылку" : "Subscribe to the newsletter"}</p>
        <p>{locale === "ru" ? "с AI-инсайдами" : "with AI insights"}</p>
      </div>
      <div className="mt-[6.25rem] flex justify-between m-md:block m-md:mt-5">
        <div className="text-lg dark:text-dark-text-secondary w-[22rem] m-md:w-full m-md:text-sm">
          <p>{locale === "ru" ? "Только раз в месяц." : "Only once a month."}</p>
          <p>
            {locale === "ru"
              ? "Инсайды по внедрению AI в веб-сервисы и приложения по всему миру."
              : "Insights into the implementation of AI in web services and applications around the world."}
          </p>
        </div>
        <form className="flex h-[4.25rem] m-md:block m-md:mt-20 m-md:h-auto">
          <input
            type="email"
            name=""
            placeholder={locale === "ru" ? "Эл. почта" : "Email"}
            className="w-[20.5625rem] border-b dark:border-bg-secondary bg-transparent mr-6 m-md:w-full"
          />
          <button
            type="submit"
            className="px-[5.375rem] bg-bg-accent text-[1.5rem]leading-6 font-semibold m-md:mt-6 m-md:h-[3.625rem] m-md:w-full text-[white]"
          >
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
};
