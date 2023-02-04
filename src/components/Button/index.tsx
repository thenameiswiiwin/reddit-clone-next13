import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  'rounded-full inline-flex items-center font-semibold',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-blue-500 hover:bg-blue-400 transition-colors ease-in-out duration-200',
        secondary:
          'text-blue-500 border border-blue-500 bg-white hover:bg-[#F6F7F8] transition-colors ease-in-out duration-200',
        tertiary:
          'w-full justify-center border border-transparent bg-brand-100 font-medium text-white shadow-sm hover:bg-brand-100/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        forum:
          'font-bold text-blue-500 underline hover:text-blue-400 rounded-none',
        oAuth:
          'w-full justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-500 shadow-sm hover:bg-gray-50',
      },
      size: {
        sm: '',
        md: 'text-sm px-4 md:px-8 h-8',
        lg: '',
        tertiary: 'py-2 px-4 text-sm',
        forum: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <button {...props} className={classes}>
        {children}
      </button>
    </>
  );
};
