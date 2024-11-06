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
    label: "Address",
    icon: <FaLocationDot />,
    name: "Guniyalekh - Mukteshwar, Nainital",
    path: "https://goo.gl/maps/8Hr5H5V5kP1E3z3X6",
  },
  {
    label: "Call us",
    icon: <IoCall />,
    name: "+91 99998 52278",
    path: "tel:+91 99998 52278",
  },
  {
    label: "Email us",
    icon: <MdEmail />,
    name: "oakclimbingresort@gmail.com",
    path: "mailto:oakclimbingresort@gmail.com",
  },
];
