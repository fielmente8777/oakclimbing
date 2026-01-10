// import Image from "next/image";

import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section className="pb-10 max-w-[1590px] w-full mx-auto">
      <div className="w-full relative lg:aspect-[4/1.65] aspect-[4/2.5]">
        <Image
          src="/images/banner.webp"
          alt="banner"
          fill
          className="object-cover"
        />
        {/* <LazyLoadedVideo
          src="https://eazotel-client-images.s3.ap-south-1.amazonaws.com/oakclimbing.mp4"
          autoPlay
          loop
          controls={false}
          muted
        /> */}
      </div>
    </section>
  );
};

export default Banner;
