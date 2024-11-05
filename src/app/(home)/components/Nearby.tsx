"use client";
import {
  Section,
  SectionHeading,
  Container,
  Button,
  SliderSwip,
  Card,
} from "@/components";
import { Autoplay, Pagination } from "swiper/modules";

const Nearby = () => {
  const data = [
    {
      image: "/images/Kainchi-Dham.webp",
      title: "Kainchi Dham",
    },
    {
      image: "/images/Boating.webp",
      title: "Boating in Bhimtal & Naukuchital",
    },
    {
      image: "/images/Paragliding.webp",
      title: "Paragliding",
    },
    {
      image: "/images/Bhalu-Waterfall.webp",
      title: "Bhalu Gaad Waterfall",
    },
    {
      image: "/images/IVRI-Forest.webp",
      title: "IVRI Forest",
    },
    {
      image: "/images/Starscapes-Observatory.webp",
      title: "Starscapes Observatory",
    },
  ];
  return (
    <Section>
      <Section className="bg-bgLight">
        <Container>
          <SectionHeading title="Nearby Tourist Spots" className="pb-10" />
        </Container>
        <Container>
          <SliderSwip
            data={data}
            classNameSwiper="mySwiper"
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: true,
            }}
            loop
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".nearby-pagination",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {(item) => <Card data={item} />}
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
