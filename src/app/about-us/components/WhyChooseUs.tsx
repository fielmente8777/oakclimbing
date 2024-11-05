import { Button, Card, Container, Section, SectionHeading } from "@/components";
import { HimalayanViewPoint, HomeHills, PerfectGetaway } from "@/utils/icon";

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
      <Container className="bg-bgLight rounded-lg shadow-md">
        <div className="flex flex-col items-center gap-10 lg:p-[5rem] py-[3rem]">
          <SectionHeading title="Why Choose Us" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
          <Button href="/about-us">Book Now</Button>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
