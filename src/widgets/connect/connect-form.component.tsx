import { Checkbox, ControlledInput, ControlledTelInput } from "@shared/ui";
import React, { useMemo, useRef, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEn, FormRu } from "@shared/i18n";
import clsx from "clsx";
import { useAutoHeightTextarea } from "@shared/lib/hooks/useAutoHeightTextarea.hook";

export interface ICheckboxFields {
  email: boolean;
  telegram: boolean;
  whatsapp: boolean;
  phone: boolean;
  [index: string]: any;
}

interface IFormData {
  email: string;
  name: string;
  phoneNumber: string;
  company?: string;
  description?: string;
  url: string;
}

interface IEmailFormData extends IFormData {
  preferences: ICheckboxFields;
}

interface IAmoFormData extends IFormData {
  isEmail: boolean;
  isWhatsapp: boolean;
  isPhone: boolean;
  isTelegram: boolean;
}

export default function ConnectForm() {
  const { locale } = useRouter();

  const data = useMemo(() => {
    return locale === "en" ? FormEn : FormRu;
  }, [locale]);

  const schema = z.object({
    email: z
      .string({ required_error: data.fields.email.requiredError })
      .email(data.fields.email.error),
    name: z
      .string({ required_error: data.fields.name.requiredError })
      .min(3, { message: data.fields.name.error }),
    company: z
      .string({ required_error: data.fields.company.requiredError })
      .refine((value) => value === "" || value.length >= 3, {
        message: data.fields.company.error,
      })
      .optional(),
    phoneNumber: z
      .string({ required_error: data.fields.phone.requiredError })
      .min(6, data.fields.phone.error),
    description: z
      .string({ required_error: data.fields.describe.requiredError })
      .min(1, data.fields.commonErrors.required)
      .optional(),
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
  const [ways, setWays] = useState<ICheckboxFields>({
    email: false,
    telegram: false,
    whatsapp: false,
    phone: false,
  });

  const { description } = useWatch({ control });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useAutoHeightTextarea(textareaRef.current, description);

  const contactMethods = useMemo(
    () => [
      {
        name: data.fields.email.placeholder,
        type: "email",
      },
      {
        name: data.contacts.phone,
        type: "phone",
      },
      {
        name: "WhatsApp",
        type: "whatsapp",
      },
      {
        name: "Telegram",
        type: "telegram",
      },
    ],
    [locale]
  );

  const handleCheckboxChange = (field: string) => {
    setWays((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const resetFields = () => {
    setWays({ email: false, phone: false, telegram: false, whatsapp: false });
    reset();
  };

  async function sendFormData(data: FormType) {
    if (isLoading) return;

    setIsLoading(true);

    const formData: IFormData = {
      email: data.email,
      name: data.name,
      phoneNumber: data.phoneNumber,
      url: window.location.href,
      description: data.description ?? undefined,
      company: data.company ?? undefined,
    };

    const emailFormData: IEmailFormData = { ...formData, preferences: ways };
    const amoFormData: IAmoFormData = {
      ...formData,
      isEmail: ways.email,
      isWhatsapp: ways.whatsapp,
      isPhone: ways.phone,
      isTelegram: ways.telegram,
    };

    try {
      await Promise.all([
        axios.post("/api/contact/", emailFormData),
        axios.post("/api/amo-crm/create-lead/", amoFormData),
      ]);
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
            placeholder={data.fields.name.placeholder + " *"}
            type="text"
            error={errors.name?.message}
          />
          <div className="grid grid-cols-2 gap-10">
            <ControlledInput
              control={control}
              name="email"
              type="email"
              placeholder={data.fields.email.placeholder + " *"}
              error={errors?.email?.message}
            />
            <ControlledTelInput
              control={control}
              error={errors?.phoneNumber?.message}
              name="phoneNumber"
              placeholder={data.fields.phone.placeholder + " *"}
              type="phone"
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
          <div className="py-4 text-xl t-xs:text-[0.875rem]">
            <p>{data.contacts.label}</p>
            <div className="mt-4 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2  t-xs:grid-cols-2 t-xs:gap-x-9 t-xs:gap-y-5">
              {contactMethods.map((method, idx) => (
                <Checkbox
                  onChange={() => handleCheckboxChange(method.type)}
                  key={idx}
                  name={method.name}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={clsx(
              "!mt-10 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold duration-150 transition-all t-xs:!mt-5 hover:bg-[#D65838]",
              // fileError && "opacity-50",
              isLoading && "animate-pulse"
            )}
            disabled={isLoading}
            // disabled={fileError || isLoading}
          >
            {data.send}
          </button>

          <span className="text-sm text-center opacity-50 px-4">{data.agreement}</span>
        </form>
      )}
    </>
  );
}
