import { Button, Container, Section, SectionHeading } from "@/components";
import Grid from "./Grid";

const page = () => {
  return (
    <main>
      <Section className="bg-bgLight">
        <Container>
          <SectionHeading title="Gallery" />
        </Container>
      </Section>
      <Grid />
      <section className="flex justify-center lg:pt-10 lg:pb-20 pt-5 pb-10">
        <Button href="/about-us">Book Now</Button>
      </section>
    </main>
  );
};

export default page;
