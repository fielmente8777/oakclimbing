import { Button, Card, Container, Section, SectionHeading } from "@/components";

const WhyChooseUs = () => {
  return (
    <Section>
      <Container className="bg-bgLight rounded-lg shadow-md">
        <div className="flex flex-col items-center gap-8 lg:p-[5rem] py-[3rem]">
          <SectionHeading title="Why Choose Us" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {[1, 2, 3].map((src, index) => (
              <Card key={index} />
            ))}
          </div>
          <Button href="/about-us">Book Now</Button>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
