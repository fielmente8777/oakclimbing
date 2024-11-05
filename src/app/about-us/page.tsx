import { Button, Container, Section, SectionHeading } from "@/components";
import { Banner, WhyChooseUs } from "./components";
import Image from "next/image";

const page = () => {
  return (
    <main className="my-14">
      <Banner />
      <Section>
        <Container>
          <SectionHeading title="About Us" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <p className=""></p>
            </div>
          </div>
        </Container>
      </Section>
      <WhyChooseUs />
      <Section>
        <div className="w-full relative aspect-[4/1.5]">
          <Image
            src="/images/banner.webp"
            alt="alt"
            fill
            className="object-cover"
          />
        </div>
      </Section>
      <section className="flex justify-center ">
        <Button href="/about-us">Book Now</Button>
      </section>
    </main>
  );
};

export default page;
