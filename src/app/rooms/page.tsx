import { Container, Section } from "@/components";
import RoomsCard from "./components/RoomsCard";
import RoomImage from "../../../public/images/room.jpeg";
import PageTopBanner from "@/components/PageTopBanner";

const page = () => {
  const roomDatas = [
    {
      id: 1,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://www.google.com/",
    },
    {
      id: 2,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://www.google.com/",
    },
    {
      id: 3,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://www.google.com/",
    },
    {
      id: 4,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://www.google.com/",
    },
  ];
  return (
    <main>
      <PageTopBanner
        title={"Accommodation"}
        para={"Experience unparalleled comfort and luxury at Anandha Inn"}
      />

      <Section>
        <Container>
          {roomDatas.map((roomData, index) => (
            <div className="mb-10" key={index}>
              <RoomsCard roomData={roomData} />
            </div>
          ))}
        </Container>
      </Section>

      
    </main>
  );
};

export default page;
