"use client";
import {
  Section,
  SectionHeading,
  Container,
  Button,
  SliderSwip,
} from "@/components";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const Nearby = () => {
  return (
    <Section>
      <Section className="bg-bgLight">
        <Container>
          <SectionHeading title="Nearby Tourist Spots" className="lg:pb-10" />
        </Container>
        <Container>
          <SliderSwip
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            classNameSwiper="mySwiper"
            modules={[Pagination]}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".nearby-pagination",
            }}
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {() => (
              <div className="w-full flex flex-col gap-8 justify-center items-center">
                <div className="relative aspect-[4/2.5] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/banner.png"
                    alt="Nearby"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Nearby</h3>
              </div>
            )}
          </SliderSwip>

          <div className="nearby-pagination w-full flex justify-center gap-1 cursor-pointer items-center mt-10 mb-4"></div>
        </Container>
      </Section>
      <div className="flex justify-center pt-10">
        <Button href="/accommodation">book now</Button>
      </div>
    </Section>
  );
};

export default Nearby;
