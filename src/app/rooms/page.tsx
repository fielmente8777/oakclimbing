import { Container } from "@/components";
import RoomsCard from "./components/RoomsCard";
import RoomImage from "../../../public/images/room.webp";
import PageTopBanner from "@/components/PageTopBanner";
import Amenities from "./components/Amenities";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Rooms & Suites - Oak Climbing Resort | Stay in Comfort in Uttarakhand",
  description: "Find your ideal stay at Oak Climbing Resort in Uttarakhand. Our comfortable, well-appointed rooms offer the perfect retreat after a day of adventure. Explore our accommodations for couples, families, and solo travelers, all set against the serene backdrop of the Himalayas",
};


const page = () => {
  const roomDatas = [
    {
      id: 1,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 2,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 3,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
    {
      id: 4,
      image: RoomImage,
      name: "Crystal Stone Cottage",
      description:
        "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      linkName: "Book Now",
      linkUrl: "https://engine.eazotel.com?id=ccb9b5a8-c327-4c5e-a050-a05630a6954b&hid=76167589",
    },
  ];
  return (
    <div className="py-14">
      <PageTopBanner
        title={"Accommodation"}
        para={"Experience unparalleled comfort and luxury at Anandha Inn"}
      />

      <Container>
        <div className="space-y-10 mt-10">
          {roomDatas.map((roomData, index) => (
            <RoomsCard roomData={roomData} key={index} />
          ))}
        </div>
      </Container>
      <Amenities />
    </div>
  );
};

export default page;
