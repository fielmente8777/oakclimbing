import { Container, Section, SectionHeading } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";

const page = () => {
  return (
    <div>
      <PageTopBanner title={"Blogs"} para={"Blogs Oak Climbing Resort is located in the Mukteshwar- the land of sublime natural beauty and serene spirituality, where you can connect with your inner self. Oak Resort is ideal for those looking for tranquility, peace, and beautiful settings of the hills"} />

      <Container>
        <div className="space-y-10 mt-10">
          blog
        </div>

      </Container>
    </div>
  );
};

export default page;
