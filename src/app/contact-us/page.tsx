import { Container, Section, SectionHeading } from "@/components";
import { contactLink } from "@/data/footerLink";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <Section className="bg-bgLight">
        <Container>
          <SectionHeading title="contact us" />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl playfair-display font-semibold">
                Contact details
              </h2>
              <ul className="flex flex-col gap-2 lg:max-w-sm w-full">
                {contactLink.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span
                      aria-label={
                        Array.isArray(item.name) ? item.name[0] : item.name
                      }
                      className="mt-[0.30rem] text-base"
                    >
                      {item.icon}
                    </span>
                    {Array.isArray(item.name) && Array.isArray(item.path) ? (
                      item.name.map((subName, subIndex) => (
                        <>
                          <Link
                            href={item.path[subIndex]}
                            key={subIndex}
                            className="hover:text-primary transition duration-300 ease-in-out"
                          >
                            {subName}
                          </Link>
                          {subIndex !== item.name.length - 1 && ","}
                        </>
                      ))
                    ) : (
                      <Link
                        href={item.path as string}
                        className="hover:text-primary transition duration-300 ease-in-out"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default page;
