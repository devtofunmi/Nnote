import { BsCalendar } from "react-icons/bs";
import { AiFillFileUnknown, AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlinePhonelink } from "react-icons/md";
import { Img } from "@chakra-ui/react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";

const FeaturesCard = [
  {
    icon: <Img src={one} />,
    heading: "Plan and manage your day",
    text: "Start your morning with a clean slate",
  },
  {
    icon: <Img src={two} />,
    heading: "Never forget a thing",
    text: "Quickly add your tasks,notes,expenses",
  },
  {
    icon: <Img src={three} />,
    heading: "Find everything fast",
    text: "Quickly search through your items with one tap",
  },
  {
    icon: <Img src={four} />,
    heading: "With you, everywhere",
    text: "Accessible across all your device",
  },
];

export default FeaturesCard;
