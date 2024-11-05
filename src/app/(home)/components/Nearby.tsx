"use client";
import {
  Section,
  SectionHeading,
  Container,
  Button,
  SliderSwip,
  Card,
} from "@/components";
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
            {() => <Card />}
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
