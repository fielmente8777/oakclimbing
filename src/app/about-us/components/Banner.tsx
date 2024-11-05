import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <PageTopBanner title={"About Us"} para={"Perched at 7,500 feet in the picturesque hill town of Mukteshwar, Oak Climbing Resort is where adventure meets serenity. Surrounded by dense oak forests and offering panoramic views of the snow-capped Himalayan ranges, our resort provides the ideal setting for both thrill-seekers and nature lovers"} />

      <Section className="bg-bgLight">
        <Container>
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-4 gap-4 ">
              {[1, 2, 3, 4].map((src, index) => (
                <div className="flex items-center justify-center w-full h-full" key={index}>
                  <div
                    className={`overflow-hidden rounded-lg hover:border-4  w-full border-white hover:shadow-3xl duration-1000 transition ease-in-out relative  ${index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3.8]"}`}
                  >
                    <Image
                      src="/images/banner.webp"
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
