import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { IInputProps, Input } from "./input.component";

export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  defaultValue?: any;
  error?: string;
};

export type WithErrorInputType = {
  withError?: boolean;
};

interface ControlledInputProps<T extends FieldValues>
  extends IInputProps,
    WithErrorInputType,
    InputControllerType<T> {}

export function ControlledInput<T extends FieldValues>(props: ControlledInputProps<T>) {
  const { control, name, defaultValue, error, withError = false, ...rest } = props;
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
