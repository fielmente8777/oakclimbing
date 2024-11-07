import Grid from "./Grid";
import PageTopBanner from "@/components/PageTopBanner";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Gallery - Oak Climbing Resort | Explore the Beauty of Uttarakhand",
  description: "Browse the Oak Climbing Resort gallery and experience the beauty of Uttarakhand. See breathtaking views, thrilling climbing spots, cozy accommodations, and snapshots of unforgettable moments. Discover why our guests love staying in the heart of the Himalayas",
};

const page = () => {
  return (
    <main className="py-14">
      <PageTopBanner title={"Gallery"} para={"Explore a visual journey through the beauty and sophistication of our resort, capturing the essence of our refined accommodations and impeccable amenities."} />
      <Grid />
      <section className="flex justify-center lg:pt-10 lg:pb-20 pt-5 pb-10">
        <Link href="https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589" target="_blank" className="py-2 w-fit source-code-pro rounded-lg capitalize px-5 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary">
          Book now
        </Link>
      </section>
    </main>
  );
};

export default page;
