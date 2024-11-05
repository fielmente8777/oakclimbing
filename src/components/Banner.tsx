import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section className="pb-10 max-w-[1590px] w-full mx-auto">
      <div className="w-full relative aspect-[2/1]">
        <Image
          src="/images/banner.webp"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
