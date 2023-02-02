import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type buttonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = buttonBaseProps &
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
      },
      size: {
        sm: '',
        md: 'text-sm px-4 md:px-10 h-8',
        lg: '',
      },
    },
    /* defaultVariants: {
    intent: 'primary',
    size: 'md',
  }, */
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
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
