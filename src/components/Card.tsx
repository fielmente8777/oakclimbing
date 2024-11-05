import Image, { StaticImageData } from "next/image";

interface CardProps {
  data: {
    id: number;
    blog: boolean;
    image: string | StaticImageData;
    title: string;
  };
}
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className={`relative ${data?.blog === true ? "aspect-[4/3]" : "aspect-[4/2.5]"} rounded-lg w-full overflow-hidden`}
      >
        <Image
          src="/images/banner.webp"
          alt="Nearby"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {data?.blog === true ? (
        <h3 className="text-[16px] text-left font-medium text-primary ">
          {data?.title}
        </h3>
      ) : (
        <h3 className="text-xl text-center font-medium">Nearby</h3>
      )}
    </div>
  );
};

export default Card;
