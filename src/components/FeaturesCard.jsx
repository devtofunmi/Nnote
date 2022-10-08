import { BsCalendar } from "react-icons/bs";
import { AiFillFileUnknown, AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlinePhonelink } from "react-icons/md";

const FeaturesCard = [
  {
    icon: <BsCalendar />,
    heading: "Plan and manage your day",
    text: "Start your morning with a clean slate",
  },
  {
    icon: <AiFillFileUnknown />,
    heading: "Never forget a thing",
    text: "Quickly add your tasks,notes,expenses",
  },
  {
    icon: <AiOutlineFileSearch />,
    heading: "Find everything fast",
    text: "Quickly search through your items with one tap",
  },
  {
    icon: <MdOutlinePhonelink />,
    heading: "With you, everywhere",
    text: "Accessible across all your device",
  },
];

export default FeaturesCard;
