import { Container, Section, SectionHeading } from "@/components";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <Section className="bg-bgLight">
        <Container>
          <div className="flex flex-col gap-20">
            <SectionHeading
              className="lg:max-w-3xl lg:mx-auto text-center"
              h1
              title="Oak Climbing Resort"
              description="Explore the Untouched Paradise In The Lap Of Himalayas At Oak Climbing Resort."
            />

            <div className="grid grid-cols-4 gap-4 ">
              {[1, 2, 3, 4].map((src, index) => (
                <div className="flex items-center justify-center w-full h-full" key={index}>
                  <div
                    className={`overflow-hidden rounded-lg hover:border-4  w-full border-white hover:shadow-3xl duration-1000 transition ease-in-out relative  ${index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3.8]"}`}
                  >
                    <Image
                      src="/images/banner.png"
                      alt="view"
                      priority={true}
                      fill
                      className="w-full h-full object-cover hover:scale-110 duration-1000 transition ease-linear"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
};

export default Banner;
