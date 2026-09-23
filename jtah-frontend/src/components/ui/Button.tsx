import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "dark" | "outline" | "glass";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center rounded-lg font-medium whitespace-nowrap select-none " +
  "transition-all duration-300 active:scale-[0.97] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  // Main action: Donate, form submits
  primary:
    "bg-brand text-white shadow-[0_8px_20px_-10px_rgba(106,79,155,0.7)] " +
    "hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(106,79,155,0.85)]",
  // Strong secondary on light backgrounds
  dark: "bg-ink text-white shadow-sm hover:bg-brand hover:-translate-y-0.5 hover:shadow-lg",
  // Quiet secondary: Volunteer, Partner
  outline:
    "bg-white/70 text-ink border border-ink/15 backdrop-blur-sm " +
    "hover:border-brand hover:text-brand hover:bg-tint/60",
  // For use on dark or image backgrounds (hero)
  glass:
    "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 focus-visible:ring-white/50 focus-visible:ring-offset-0",
};

const sizes: Record<ButtonSize, { button: string; icon: string }> = {
  sm: { button: "h-9 px-3.5 gap-1.5 text-[13px]", icon: "size-3.5" },
  md: { button: "h-11 px-6 gap-2 text-sm", icon: "size-4" },
  lg: { button: "h-12 px-8 gap-2 text-[15px]", icon: "size-4" },
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon before the label, e.g. <Heart /> */
  leadingIcon?: ReactNode;
  /** Icon after the label, nudges right on hover, e.g. <MoveRight /> */
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps | "href"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * The one button for the whole site. Pass `href` to render a link,
 * leave it out to render a <button>.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    leadingIcon,
    trailingIcon,
    fullWidth,
    className,
    children,
    ...rest
  } = props;

  const s = sizes[size];
  const classes = cn(
    base,
    variants[variant],
    s.button,
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {leadingIcon && (
        <span
          className={cn("inline-flex shrink-0 [&>svg]:size-full", s.icon)}
          aria-hidden
        >
          {leadingIcon}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span
          className={cn(
            "inline-flex shrink-0 [&>svg]:size-full transition-transform duration-300 group-hover:translate-x-1",
            s.icon,
          )}
          aria-hidden
        >
          {trailingIcon}
        </span>
      )}
    </>
  );

  if (props.href !== undefined) {
    const { href, ...linkRest } = rest as Omit<
      LinkButtonProps,
      keyof BaseProps
    >;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as Omit<
    NativeButtonProps,
    keyof BaseProps
  >;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
