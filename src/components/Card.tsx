import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center">
      <div className="relative aspect-[4/2.5] w-full rounded-lg overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Nearby"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">Nearby</h3>
    </div>
  );
};

export default Card;
