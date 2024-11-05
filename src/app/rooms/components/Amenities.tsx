import {
  Section,
  Container,
  SectionHeading,
  AmenitiesCard,
} from "@/components";
import { amenitiesProps } from "@/types/type";
import {
  AcceptsCards,
  AirConditioning,
  DailyHousekeeping,
  FreeParking,
  FreeWifi,
  RoomService,
} from "@/utils/icon";

const Amenities = () => {
  const amenitiesCardsData: amenitiesProps[] = [
    {
      icon: <FreeWifi />,
      title: "Free Wifi",
    },
    {
      icon: <RoomService />,
      title: "Room Service",
    },
    {
      icon: <DailyHousekeeping />,
      title: "Daily Housekeeping",
    },
    {
      icon: <FreeParking />,
      title: "Free Parking",
    },
    {
      icon: <AirConditioning />,
      title: "Air Conditioning",
    },
    {
      icon: <AcceptsCards />,
      title: "Accepts Cards",
    },
  ];
  return (
    <Section>
      <Container>
        <SectionHeading
          color="text-[#777]"
          title="Amenities"
          description="Discover the height of luxury living at Oak Climbing Resort, where our lavish amenities are ready for your delight.  "
        />

        <div className="flex w-full flex-wrap gap-x-24 gap-y-7 mt-10 items-center justify-center">
          {amenitiesCardsData.map((card, index) => (
            <AmenitiesCard key={index} icon={card.icon} title={card.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Amenities;
