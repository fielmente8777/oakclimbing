import { Button} from "@/components";
import Grid from "./Grid";
import PageTopBanner from "@/components/PageTopBanner";

const page = () => {
  return (
    <main className="py-14">
      <PageTopBanner title={"Gallery"} para={"Explore a visual journey through the beauty and sophistication of our resort, capturing the essence of our refined accommodations and impeccable amenities."} />
      <Grid />
      <section className="flex justify-center lg:pt-10 lg:pb-20 pt-5 pb-10">
        <Button href="/about-us">Book Now</Button>
      </section>
    </main>
  );
};

export default page;
