import { Checkbox, IconComponent } from "@shared/ui";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const contactMethods = ["E-mail", "Phone number", "WhatsApp", "Telegram"];

const schema = z.object({
	email: z.string().email(),
	name: z.string().min(3),
	company: z.string().min(3),
	phoneNumber: z.string().min(6),
	projectDescription: z.string(),
});

export type FormType = z.infer<typeof schema>;

export default function ConnectForm() {
	const {
		handleSubmit,
		register,
		control,
		getValues,
		watch,
		formState: { errors },
		reset,
	} = useForm<FormType>({
		resolver: zodResolver(schema),
	});

	const [file, setFile] = useState<File | undefined>();

	async function sendFormData(data: FormType) {
		console.log("{ data }");
		console.log({ data });

		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("name", data.name);
		// formData.append("company", data.company);
		formData.append("phoneNumber", data.phoneNumber);
		formData.append("description", data.projectDescription);

		if (file) {
			if (file.size < 2400000) {
				formData.append("attachment", file);
			} else {
				alert("Too large attachment, max 20mb");
				return;
			}
		}

		try {
			const response = await axios.post(
				"https://unistory.app/api/contact",
				formData
			);
			console.log(response.data);
			reset();
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
			<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
				<input
					className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary"
					type="text"
					placeholder="Name"
					{...register("name")}
				/>
				{errors.email && <div>{errors.email.message}</div>}
			</label>
			<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
				<input
					className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary"
					type="company"
					placeholder="Company"
					{...register("company")}
				/>
				{errors.email && <div>{errors.email.message}</div>}
			</label>
			<div className="grid grid-cols-2 gap-10">
				<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
					<input
						className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary"
						type="email"
						placeholder="E-mail"
						required
						{...register("email")}
					/>
					{errors.email && <div>{errors.email.message}</div>}
				</label>
				<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
					<input
						className="bg-[inherit] w-full outline-none placeholder:text-dark-text-primary"
						type="tel"
						placeholder="Phone number"
						required
						{...register("phoneNumber")}
					/>
					{errors.email && <div>{errors.email.message}</div>}
				</label>
			</div>

			<div className="py-8 text-xl">
				<p>Contact preference</p>
				<div className="mt-4 flex items-center space-x-8">
					{contactMethods.map((method, idx) => (
						<Checkbox key={idx} name={method} />
					))}
				</div>
			</div>
			<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
				<textarea
					placeholder="Describe your project"
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
							e.target.files && setFile(e.target.files[0]);
						}}
					/>
					<IconComponent name="clip" className="w-8" />
				</div>
				<div className="flex flex-col text-xl leading-7">
					{file ? file.name : "Attach a file with Terms of Reference"}
					<span className="text-sm opacity-50">Maximum file size 24 MB</span>
				</div>
			</label>

			<button
				type="submit"
				className="!mt-16 text-2xl w-full py-[1.125rem] bg-primary-s rounded-sm font-semibold"
			>
				Send
			</button>

			<span className="text-sm text-center opacity-50 px-4">
				By clicking the button, you consent to the processing of personal data
				and agree to the privacy policy.
			</span>
		</form>
	);
}
