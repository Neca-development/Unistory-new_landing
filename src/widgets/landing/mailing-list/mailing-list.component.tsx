import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type EmailForm = {
  email: string;
};

export const MailingList = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setErrorResponse] = useState<string | null>(null);
  const { locale } = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EmailForm>();

  const onSubmit: SubmitHandler<EmailForm> = async (e) => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.email)) {
      setError("email", {
        message: locale === "ru" ? "Неверный email" : "Incorrect email",
      });
      return;
    }
    try {
      const response = await axios.post(
        "https://api.unisender.com/ru/api/subscribe",
        {},
        {
          params: {
            format: "json",
            api_key: "6mtbkaz96uogygfxpsr6qbsmz4dduxr4pdwdy1ke",
            list_ids: 10,
            fields: {
              email: e.email,
            },
          },
        }
      );
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error: any) {
      setErrorResponse(error.message);
    }
  };

  return (
    <div className="container">
      <div className="rounded-xl mb-[8.75rem] bg-mailing-list-bg-light dark:bg-mailing-list-bg p-[3.375rem] mt-[5.25rem] m-md:px-4 m-md:py-7">
        <div className="text-[2.875rem] font-bold m-md:text-[1.75rem] leading-[3.375rem] m-md:leading-[2rem]">
          {locale === "ru" ? (
            <p>Подпишитесь на рассылку</p>
          ) : (
            <>
              <p>Subscribe</p>
              <p>to the newsletter</p>
            </>
          )}
          <p>{locale === "ru" ? "с AI-инсайдами" : "with AI insights"}</p>
        </div>
        <div className="mt-[6.25rem] flex justify-between m-md:block m-md:mt-5">
          <div className="text-lg dark:text-dark-text-secondary w-[25.0625rem] leading-[1.375rem] m-md:w-full m-md:text-sm">
            <p>{locale === "ru" ? "Только раз в месяц." : "Only once a month."}</p>
            <div>
              {locale === "ru" ? (
                <>
                  <p>Инсайды по внедрению AI в веб-сервисы</p>
                  <p>и приложения по всему миру.</p>
                </>
              ) : (
                "Insights into the implementation of AI in web services and applications around the world."
              )}
            </div>
          </div>
          <form
            className="flex h-[4.25rem] m-md:block m-md:mt-20 m-md:h-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                {...register("email", {
                  required: locale === "ru" ? "Введите email" : "Email is required",
                })}
                type="text"
                name="email"
                placeholder={locale === "ru" ? "Эл. почта" : "Email"}
                className="w-[20.5625rem] dark:placeholder:text-[white] h-full border-b-2 outline-none rounded-none pt-6 pb-3 leading-7 dark:border-bg-secondary bg-transparent mr-6 m-md:w-full"
              />
              {errors.email && (
                <p className="text-error text-xs ml-3 mt-0.5">{errors.email.message}</p>
              )}
              {error && <p className="text-error text-xs ml-3 mt-0.5">{error}</p>}
              {success && (
                <p className="text-success text-xs ml-3 mt-0.5">
                  {locale === "ru"
                    ? "Вам на почту отправлена ​​ссылка для подтверждения"
                    : "A confirmation link has been sent to your email"}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="px-[5.375rem] bg-bg-accent rounded-[0.125rem] text-[1.5rem]leading-6 font-semibold m-md:mt-6 m-md:h-[3.625rem] m-md:w-full text-[white]"
            >
              {locale === "ru" ? "Подписаться" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
