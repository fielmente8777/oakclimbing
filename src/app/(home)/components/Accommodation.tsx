import RoomsCard from "@/app/rooms/components/RoomsCard";
import { Button, Container, Section, SectionHeading } from "@/components";
import RoomImage from "../../../../public/images/room.webp"
const Accommodation = () => {

  const roomDatas = [
    {
      "id": 1,
      "image": RoomImage,
      "name": "Crystal Stone Cottage",
      "description": "Our 3 BHK Luxury Cottages provide an exquisite retreat that combines spacious elegance with stunning natural surroundings. Our cottage features beautifully appointed bedroom with plush bedding to ensure a restful night’s sleep. The open-plan living area includes a cozy lounge with comfortable seating and a dining space perfect for gathering with family and friends. With modern amenities and stylish decor, our cottages offer a serene and inviting atmosphere, making them an ideal choice for a memorable getaway. Enjoy the perfect blend of comfort and luxury in your own private haven.",
      "linkName": "Book Now",
      "linkUrl": "https://www.google.com/",
    },
    {
      "id": 2,
      "image": RoomImage,
      "name": "Stone Bite Cottage",
      "description": "Our 2 BHK Luxury Cottages offer a delightful escape, combining stylish comfort with a touch of nature. Designed to accommodate up to four guests, each cottage features elegantly furnished bedrooms, ensuring a restful stay for everyone. The inviting living area boasts comfortable seating and a dining space, perfect for enjoying meals together. With modern amenities and tasteful decor, our cottages create a warm and welcoming ambiance, ideal for a relaxing getaway. Experience the perfect balance of luxury and tranquility in your own charming retreat.",
      "linkName": "Book Now",
      "linkUrl": "https://www.google.com/",
    },

  ]
  return (
    <Section>
      <Container>
        <SectionHeading title="Accommodation" className="lg:pb-10" />
      </Container>
      <section>
        <Container>
          <div className="space-y-10 mt-10">
            {roomDatas.map((roomData, index) => (
              <RoomsCard roomData={roomData} key={index} />
            ))}
          </div>

        </Container>
      </section>
      <div className="flex justify-center pt-10">
        <Button href="/accommodation">View All</Button>
      </div>
    </Section>
  );
};

export default Accommodation;
