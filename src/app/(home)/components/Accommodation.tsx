import { Button, Container, Section, SectionHeading } from "@/components";

const Accommodation = () => {
  return (
    <Section>
      <Container>
        <SectionHeading title="Accommodation" className="lg:pb-10" />
      </Container>
      <section className="bg-bgLight">
        <Container>
          <SectionHeading
            className="lg:max-w-3xl lg:mx-auto text-center"
            h1
            span="Welcome to"
            title="Oak Climbing Resort"
            description="Explore the Untouched Paradise In The Lap Of Himalayas At Oak Climbing Resort."
          />
        </Container>
      </section>
      <div className="flex justify-center pt-10">
        <Button href="/accommodation">View All</Button>
      </div>
    </Section>
  );
};

export default Accommodation;
