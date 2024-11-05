import { Button, Container, Section } from "@/components";
import Image from "next/image";

const Aboutus = () => {
  const gridPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];
  return (
    <Section>
      <Section className="bg-bgLight" lgPy="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 auto-rows-[12rem] grid-flow-row">
              {[1, 2, 3].map((src, index) => (
                <div
                  key={index}
                  className={`${
                    gridPattern[index % gridPattern.length]
                  } overflow-hidden hover:border-4 border-white hover:shadow-3xl duration-1000 transition ease-in-out relative aspect-auto`}
                >
                  <Image
                    src="/images/banner.png"
                    alt="view"
                    priority={true}
                    fill
                    className={`w-full h-full object-cover hover:scale-110 duration-1000 transition ease-linear`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full justify-center items-center">
              <h1 className="text-3xl font-bold text-primary">About Us</h1>
              <p className="text-secondary text-xl">We are here to make your life easier</p>
              <Button href="/about-us">About Us</Button>
            </div>
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default Aboutus;
