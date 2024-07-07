import { ComponentProps, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputStyle = tv({
  base: ' py-2 pl-4 outline-none border-[1px] rounded-lg leading-none tracking-sm text-bg border-white-200 placeholder:text-white-200',
  variants: {
    sizeStyle: {
      default: 'w-full',
      sm: 'max-w-[4.5rem]'
    },
    errorStyle: {
      true: 'border-red'
    }
  },
  defaultVariants: {
    sizeStyle: 'default',
    errorStyle: false
  }
});

type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyle> & {
    label?: string;
    error?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = '',
      error = '',
      type = 'text',
      id,
      sizeStyle,
      errorStyle,
      ...props
    }: InputProps,
    ref
  ) => {
    // console.log(label, ': ', errorStyle);

    return (
      <div className="flex flex-col gap-2 relative border-re">
        {label && (
          <label
            className="text-md uppercase tracking-wider text-nowrap"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          className={inputStyle({ sizeStyle, errorStyle })}
          type={type}
          id={id}
          {...props}
          ref={ref}
        />
        {error && <p className="text-red text-md absolute top-full">{error}</p>}
      </div>
    );
  }
);

export default Input;
