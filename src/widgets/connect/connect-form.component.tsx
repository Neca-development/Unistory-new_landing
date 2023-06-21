import { ControlledInput, ControlledTelInput, IconComponent, Checkbox } from "@shared/ui";
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

export default function ConnectForm() {
  const { locale } = useRouter();

  const data = useMemo(() => {
    return locale === "en" ? FormEn : FormRu;
  }, [locale]);

  const requiredMsg = data.fields.commonErrors.required;

  const schema = z.object({
    email: z
      .string({ required_error: data.fields.email.requiredError })
      .email(data.fields.email.error),
    name: z
      .string({ required_error: data.fields.name.requiredError })
      .min(3, { message: data.fields.name.error }),
    company: z
      .string({ required_error: data.fields.company.requiredError })
      .min(3, { message: data.fields.company.error }),
    phoneNumber: z
      .string({ required_error: data.fields.phone.requiredError })
      .min(6, data.fields.phone.error),
    projectDescription: z
      .string({ required_error: data.fields.describe.requiredError })
      .min(1, requiredMsg),
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

  const { projectDescription } = useWatch({ control });

  const [file, setFile] = useState<File | undefined>();
  const [fileError, setFileError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ways, setWays] = useState<ICheckboxFields>({
    email: false,
    telegram: false,
    whatsapp: false,
    phone: false,
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useAutoHeightTextarea(textareaRef.current, projectDescription);

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
    setFile(undefined);
    setWays({ email: false, phone: false, telegram: false, whatsapp: false });
    reset();
  };

  async function sendFormData(data: FormType) {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("description", data.projectDescription);
    formData.append("preferences", JSON.stringify(ways));

    if (file) {
      if (file.size < 24000000) {
        formData.append("attachment", file);
      } else {
        setFileError(true);
        setIsLoading(false);
        return;
      }
    }

    try {
      await axios.post("/api/contact/", formData);
      resetFields();
    } catch (error) {
      console.error(error);
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
          <ControlledInput
            placeholder={data.fields.company.placeholder}
            control={control}
            name="company"
            type="text"
            error={errors?.company?.message}
          />
          <div className="grid grid-cols-2 gap-10">
            <ControlledInput
              control={control}
              name="email"
              type="email"
              placeholder={data.fields.email.placeholder}
              error={errors?.email?.message}
            />

            <ControlledTelInput
              control={control}
              error={errors?.phoneNumber?.message}
              name="phoneNumber"
              placeholder={data.fields.phone.placeholder}
              type="phone"
            />
          </div>
          <div className="py-8 text-xl t-xs:text-[0.875rem]">
            <p>{data.contacts.label}</p>
            <div className="mt-4 grid grid-cols-4 gap-2 t-xs:inline-grid t-xs:grid-cols-2 t-xs:gap-x-9 t-xs:gap-y-5 ">
              {contactMethods.map((method, idx) => (
                <Checkbox
                  onChange={() => handleCheckboxChange(method.type)}
                  key={idx}
                  name={method.name}
                />
              ))}
            </div>
          </div>
          <label className="text-dark-text-primary relative text-xl leading-7 border-b-2 pb-3 pt-7 t-xs:text-[0.875rem] t-xs:pb-1">
            <Controller
              control={control}
              name="projectDescription"
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
            {errors.projectDescription && (
              <span className="absolute left-3 top-full mt-2 text-error text-xs">
                {errors.projectDescription.message}
              </span>
            )}
          </label>

          <label className="cursor-pointer flex items-center space-x-3 py-2">
            <div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  setFileError(false);
                  e.target.files && setFile(e.target.files[0]);
                }}
              />
              <IconComponent name="clip" className="w-8 t-xs:w-6" />
            </div>
            <div className="flex flex-col text-xl leading-7 t-xs:text-[0.875rem]">
              {file ? file.name : data.attachment.label}
              <span className="text-sm opacity-50 t-xs:text-[0.75rem]">{data.attachment.sub}</span>
            </div>
          </label>

          {fileError && <div className="text-error">{data.attachment.errors.tooLarge}</div>}

          <button
            type="submit"
            className={clsx(
              "!mt-16 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold duration-150 transition-all t-xs:!mt-5 hover:bg-[#D65838]",
              fileError && "opacity-50",
              isLoading && "animate-pulse"
            )}
            disabled={fileError || isLoading}
          >
            {data.send}
          </button>

          <span className="text-sm text-center opacity-50 px-4">{data.agreement}</span>
        </form>
      )}
    </>
  );
}
