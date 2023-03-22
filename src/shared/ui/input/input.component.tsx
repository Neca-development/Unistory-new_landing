import React, { ForwardedRef } from "react";
import clsx from "clsx";
export interface IInputProps {
	placeholder: string;
	type: "text" | "email" | "tel";
	required?: boolean;
	className?: string;
	error?: string;
}

export const Input = React.forwardRef((props: IInputProps, ref: any) => {
	const { placeholder, type, required, className } = props;

	return (
		<label className="text-dark-text-primary text-xl leading-7 border-b-2 pb-3 pt-7">
			<input
				className={clsx(
					"bg-[inherit] w-full outline-none placeholder:text-dark-text-primary",
					className
				)}
				ref={ref}
				type={type}
				placeholder={placeholder}
				required={required}
			/>
		</label>
	);
});
