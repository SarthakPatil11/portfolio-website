import Link from "next/link";

export default function CTAButton({
  isOutlined,
  className,
  href,
  onClick,
  children,
  isDisabled,
}: {
  isOutlined?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
}) {
  const defaultClasses =
    "btn btn-warning";
  const defaultClassesOutlined =
    "btn bg-transparent border-warning text-warning hover:bg-yellow-600 hover:text-white";

  if (href) {
    return (
      <>
        {isOutlined ? (
          <Link
            className={`${defaultClassesOutlined} ${className}`}
            href={href}
            onClick={onClick}
          >
            {children}
          </Link>
        ) : (
          <Link
            className={`${defaultClasses} ${className}`}
            href={href}
            onClick={onClick}
          >
            {children}
          </Link>
        )}
      </>
    );
  }

  return (
    <>
      {isOutlined ? (
        <button
          type="submit"
          className={`${defaultClassesOutlined} ${className}`}
          onClick={onClick}
          disabled={isDisabled}
        >
          {children}
        </button>
      ) : (
        <button
          type="submit"
          className={`${defaultClasses} ${className}`}
          onClick={onClick}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
    </>
  );
}
