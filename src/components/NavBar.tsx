"use client";
import Link from "next/link";
import Container from "./Container";
import { contactLink, navLink } from "@/data/navLink";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathName = usePathname();
  return (
    <header>
      <nav className="flex flex-col max-w-[1590px] mx-auto">
        <div className="bg-secondary">
          <Container>
            <div className="w-full flex justify-end py-3">
              <ul className="flex gap-8">
                {contactLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="hover:scale-105 hover:text-primary transition duration-300 ease-in-out text-base flex items-center justify-center gap-1 text-white"
                    >
                      <span aria-label={item.name}>{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
        <div className="flex py-4 w-full justify-between items-center max-w-[1465px] xxl:ms-9 ms-0">
          <div className="flex items-center">
            <Link
              href="/"
              className="cursor-pointer relative h-16 aspect-[4/1] flex items-center justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                quality={100}
                priority
                className="cursor-pointer object-contain"
              />
            </Link>
          </div>
          <ul className="flex gap-8">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`relative px-6 py-4 montserrat group flex items-center justify-center uppercase transition duration-300 ease-in-out text-base font-medium ${
                    pathName === item.path ? "text-primary" : "text-dark"
                  } hover:text-primary hover:scale-105`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-2  left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
                      pathName === item.path ? "w-full" : "w-0"
                    } group-hover:w-full`}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="py-4">
            Book now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
