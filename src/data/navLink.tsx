import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export const navLink = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about-us/",
  },
  {
    name: "Accomodation",
    path: "/rooms/",
  },
  {
    name: "Gallery",
    path: "/gallery/",
  },
  {
    name: "Blog",
    path: "/blog/",
  },
  {
    name: "Contact us",
    path: "/contact-us/",
  },
];

export const contactLink = [
  {
    icon: <FaLocationDot />,
    name: "Guniyalekh- Mukteshwar, Nainital",
    path: "https://goo.gl/maps/8Hr5H5V5kP1E3z3X6",
  },
  {
    icon: <IoCall />,
    name: "+91 99998 52278",
    path: "tel:+91 99998 52278",
  },
  {
    icon: <MdEmail />,
    name: "oakclimbingresort@gmail.com",
    path: "mailto:oakclimbingresort@gmail.com",
  },
];
