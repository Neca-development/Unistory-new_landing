import { forwardRef } from "react";
import clsx from "clsx";
export interface IInputProps {
  placeholder: string;
  type: "text" | "email" | "tel" | "phone";
  required?: boolean;
  className?: string;
  error?: string;
  requiredError?: string;
}

export const labelClassNames =
  " text-xl w-full leading-7 border-b-2 pb-3 pt-7 relative t-xs:text-[0.875rem]";
export const inputClassNames =
  "bg-[inherit] w-full outline-none placeholder:text-dark-text-primary";
export const inputErrorClassNames = "absolute left-3 top-full mt-1 text-error text-xs";

export const Input = forwardRef((props: IInputProps, ref: any) => {
  const { placeholder, type, required, className, error, ...restProps } = props;

  return (
    <label className={labelClassNames}>
      <input
        className={clsx(inputClassNames, className)}
        ref={ref}
        type={type}
        placeholder={placeholder}
        required={required}
        {...restProps}
      />
      {error && <span className={inputErrorClassNames}>{error}</span>}
    </label>
  );
});
