import { Checkbox, ControlledInput, IconComponent } from "@shared/ui";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEn, FormRu } from "@shared/i18n";
import clsx from "clsx";

export interface ICheckboxFields {
  email: boolean,
  telegram: boolean,
  whatsapp: boolean,
  phone: boolean,
  [index: string]: any
 }

export default function ConnectForm() {
  const { locale } = useRouter();

	const data = useMemo(() => {
    return locale === 'en' ?  FormEn : FormRu
  }, [locale])

  const requiredMsg = data.fields.commonErrors.required
  
  const schema = z.object({
    email: z.string({required_error: requiredMsg}).email(data.fields.email.error),
    name: z.string({required_error: requiredMsg}).min(3, {message: data.fields.name.error}),
    company: z.string({required_error: requiredMsg}).min(3, {message: data.fields.company.error}),
    phoneNumber: z.string({required_error: requiredMsg}).min(6, data.fields.phone.error),
    projectDescription: z.string({required_error: requiredMsg}),
  });

  type FormType = z.infer<typeof schema>;
  
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		reset,
	} = useForm<FormType>({
		resolver: zodResolver(schema),
    mode: 'onSubmit'
	});

	const [file, setFile] = useState<File | undefined>();
  const [fileError, setFileError] = useState(false)
  const [ways, setWays] = useState<ICheckboxFields>({
    email: false,
    telegram: false,
    whatsapp: false,
    phone: false,
   })

  const contactMethods = useMemo(() => [
    {
      name: "WhatsApp",
      type: 'whatsapp'
    },
    {
      name: "Telegram",
      type: 'telegram'
    },
    {
      name: data.contacts.phone,
      type: 'phone'
    },
    {
      name: data.fields.email.placeholder,
      type: 'email'
    }
  ], [locale])

  const handleCheckboxChange = (field: string) => {
    setWays((prev) => ({...prev, [field]: !prev[field]}))
  }

  const resetFields = () => {
    setFile(undefined)
    setWays({email: false, phone: false, telegram: false,whatsapp: false})
    reset();
  }

  console.log(errors)

	async function sendFormData(data: FormType) {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("name", data.name);
		// formData.append("company", data.company);
		formData.append("phoneNumber", data.phoneNumber);
		formData.append("description", data.projectDescription);
    // formData.append("preferences", JSON.stringify(ways))

		if (file) {
			if (file.size < 24000000) {
				formData.append("attachment", file);
			} else {
				setFileError(true)
				return;
			}
		}

		try {
			await axios.post(
				"https://unistory.app/api/contact",
				formData
			);
      resetFields()
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<form
			onSubmit={handleSubmit(sendFormData)}
			encType="multipart/form-data"
			className="flex flex-col space-y-6"
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
					placeholder="E-mail"
					error={errors?.email?.message}
				/>
				<ControlledInput
					control={control}
					name="phoneNumber"
					type="tel"
					placeholder={data.fields.phone.placeholder}
					error={errors?.phoneNumber?.message}
				/>
			</div>
			<div className="py-8 text-xl">
				<p>{data.contacts.label}</p>
				<div className="mt-4 flex items-center space-x-8">
					{contactMethods.map((method, idx) => (
						<Checkbox onChange={() => handleCheckboxChange(method.type)} key={idx} name={method.name} />
					))}
				</div>
			</div>
			<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
				<textarea
					placeholder={data.fields.describe.placeholder}
					required={!file}
					className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary"
					{...register("projectDescription")}
				/>
				{errors.projectDescription && (
					<div>{errors.projectDescription.message}</div>
				)}
			</label>

			<label className="cursor-pointer flex items-center space-x-3 py-2">
				<div>
					<input
						type="file"
						className="hidden"
						onChange={(e) => {
							setFileError(false);
              e.target.files && setFile(e.target.files[0])
						}}
					/>
					<IconComponent name="clip" className="w-8" />
				</div>
				<div className="flex flex-col text-xl leading-7">
					{file ? file.name : data.attachment.label}
					<span className="text-sm opacity-50">{data.attachment.sub}</span>
				</div>
			</label>

      {fileError && (
        <div className="text-error">{data.attachment.errors.tooLarge}</div>
      )}

			<button
				type="submit"
				className={clsx("!mt-16 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold duration-300 transition-opacity", fileError && 'opacity-50')}
        disabled={fileError}
			>
				{data.send}
			</button>

			<span className="text-sm text-center opacity-50 px-4">
      {data.agreement}
			</span>
		</form>
	);
}
