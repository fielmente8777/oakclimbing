import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button: React.FC<Props> = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={`${className} source-code-pro rounded-lg uppercase px-5 py-3 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-bold border border-primary`}
    >
      {children}
    </Link>
  );
};

export default Button;
