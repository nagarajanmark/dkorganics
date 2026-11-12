import Image from "next/image";

interface BrandLogoProps {
  /** Controls sizing preset without altering aspect ratio */
  variant?: "nav" | "footer" | "intro";
  className?: string;
}

/**
 * Official DK ORGANICS brand mark using transparent PNG extraction
 * preserving exact original design, proportions, and brand colors.
 */
export function BrandLogo({ variant = "nav", className = "" }: BrandLogoProps) {
  const dimensions =
    variant === "footer"
      ? "h-12 w-auto sm:h-14"
      : variant === "intro"
        ? "h-20 w-auto sm:h-24"
        : "h-8 w-auto sm:h-9";

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/dk-organics-logo.png"
        alt="DK ORGANICS — Official Brand Logo"
        width={787}
        height={551}
        priority={variant !== "footer"}
        className={`${dimensions} object-contain`}
      />
    </span>
  );
}
