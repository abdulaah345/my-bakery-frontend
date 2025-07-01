type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const className =
    "bg-[#d49f68] hover:bg-[#c08850] text-white py-2 px-4 rounded transition-colors duration-300";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
