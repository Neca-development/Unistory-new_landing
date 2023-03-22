import { Controller } from "react-hook-form";
import { IInputProps, Input } from "./input.component";

export type ControlledInputType = {
	control: any;
	name: string;
	defaultValue?: any;
	error?: string;
};

export type WithErrorInputType = {
	withError?: boolean;
};

export function ControlledInput(
	props: IInputProps & ControlledInputType & WithErrorInputType
) {
	const {
		control,
		name,
		defaultValue,
		error,
		withError = false,
		...rest
	} = props;
	return (
		<Controller
			name={name}
			defaultValue={defaultValue}
			control={control}
			render={({ field }) => (
				<Input error={error} {...rest} {...field} className={props.className} />
			)}
		/>
	);
}
