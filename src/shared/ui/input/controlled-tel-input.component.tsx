import { Controller, FieldValues } from "react-hook-form";
import { InputControllerType, WithErrorInputType } from "./controlled-input.component";
import {
  IInputProps,
  inputClassNames,
  inputErrorClassNames,
  labelClassNames,
} from "./input.component";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/router";

interface IControlledTelInputProps<T extends FieldValues>
  extends IInputProps,
    WithErrorInputType,
    InputControllerType<T> {}

export function ControlledTelInput<T extends FieldValues>(props: IControlledTelInputProps<T>) {
  const { locale } = useRouter();

  const { control, name, defaultValue, error, withError = false, ...rest } = props;

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <label className={labelClassNames}>
          <PhoneInput
            {...field}
            {...rest}
            country={locale === "en" ? undefined : "ru"}
            inputProps={{ className: inputClassNames }}
            specialLabel={""}
            placeholder="Phone"
          />
          {error && <span className={inputErrorClassNames}>{error}</span>}
        </label>
      )}
    />
  );
}
