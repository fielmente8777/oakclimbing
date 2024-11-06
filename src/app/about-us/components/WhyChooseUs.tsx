"use client";
import {
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
  SliderSwip,
} from "@/components";
import { HimalayanViewPoint, HomeHills, PerfectGetaway } from "@/utils/icon";
import { Navigation } from "swiper/modules";

const WhyChooseUs = () => {
  const data = [
    {
      title: "Perfect Getaway",
      icon: <PerfectGetaway />,
      blog: false,
    },
    {
      title: "Your Home in the Hills",
      icon: <HomeHills />,
      blog: false,
    },
    {
      title: "Himalayan View Point",
      icon: <HimalayanViewPoint />,
      blog: false,
    },
  ];
  return (
    <Section>
      <Container>
        <div className="bg-bgLight rounded-lg shadow-md">
          <div className="lg:p-[5rem] py-[3rem]">
            <SectionHeading title="Why Choose Us" />

            <div className="lg:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
              {data.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>

            <div className="block lg:hidden">
              <SliderSwip
                data={data}
                classNameSwiper="chooseUs"
                slideperview={1}
                spacebetween={10}
                modules={[Navigation]}
                navigation={true}
              >
                {(item) => <Card data={item} />}
              </SliderSwip>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Button href="/about-us">Book Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
