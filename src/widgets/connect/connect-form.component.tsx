import { ControlledInput } from "@shared/ui";
import React, { useMemo, useRef, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEn, FormRu } from "@shared/i18n";
import clsx from "clsx";
import { useAutoHeightTextarea } from "@shared/lib/hooks/useAutoHeightTextarea.hook";

interface IFormData {
  email?: string;
  name?: string;
  telegram?: string;
  company?: string;
  description?: string;
  // url?: string;
}

export default function ConnectForm() {
  const { locale } = useRouter();

  const data = useMemo(() => {
    return locale === "en" ? FormEn : FormRu;
  }, [locale]);

  const schema = z
    .object({
      email: z.string().email(data.fields.email.error).optional(),
      telegram: z
        .string()
        .regex(/^@?[a-zA-Z0-9_]*$/, data.fields.telegram.error)
        .optional(),
      name: z.string().optional(),
      company: z.string().max(100, data.fields.company.error).optional(),
      description: z.string().max(1000, data.fields.describe.error).optional(),
    })
    .refine((data) => data.email || data.telegram, {
      message: data.fields.require.error,
      path: ["email"],
    });

  type FormType = z.infer<typeof schema>;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { description } = useWatch({ control });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useAutoHeightTextarea(textareaRef.current, description);

  const resetFields = () => {
    reset();
  };

  async function sendFormData(data: FormType) {
    if (isLoading) return;

    setIsLoading(true);

    const formData: IFormData = {
      email: data.email,
      name: data.name,
      telegram: data.telegram,
      // url: window.location.href,
      description: data.description,
      company: data.company,
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}api/contact/`, formData);
      resetFields();
    } catch (error) {
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isSubmitSuccessful ? (
        <div className="flex flex-col space-y-6 items-center text-2xl t-xs:text-xl t-xs:mt-28 text-center justify-center">
          <span dangerouslySetInnerHTML={{ __html: data.submitMessage }}></span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(sendFormData)}
          encType="multipart/form-data"
          className="flex flex-col space-y-6"
          noValidate
        >
          <ControlledInput
            control={control}
            name="name"
            placeholder={data.fields.name.placeholder}
            type="text"
            error={errors.name?.message}
          />
          <div className="grid grid-cols-2 gap-10">
            <ControlledInput
              control={control}
              name="email"
              type="email"
              placeholder={data.fields.email.placeholder}
              error={errors?.email?.message}
            />
            <ControlledInput
              control={control}
              name="telegram"
              type="text"
              placeholder="Telegram"
              error={errors?.telegram?.message}
            />
          </div>
          <ControlledInput
            placeholder={data.fields.company.placeholder}
            control={control}
            name="company"
            type="text"
            error={errors?.company?.message}
          />
          <label className="text-dark-text-primary relative text-xl leading-7 border-b-2 pb-3 pt-7 t-xs:text-[0.875rem] t-xs:pb-1">
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder={data.fields.describe.placeholder}
                  className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary h-7 resize-none"
                  ref={(elem) => {
                    field.ref(elem);
                    textareaRef.current = elem;
                  }}
                />
              )}
            />
            {errors.description && (
              <span className="absolute left-3 top-full mt-2 text-error text-xs">
                {errors.description.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className={clsx(
              "!mt-10 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold duration-150 transition-all t-xs:!mt-5 hover:bg-[#D65838]",
              isLoading && "animate-pulse"
            )}
            disabled={isLoading}
          >
            {data.send}
          </button>

          <span className="text-sm text-center opacity-50 px-4">{data.agreement}</span>
        </form>
      )}
    </>
  );
}
