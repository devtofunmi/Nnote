import { Img } from "@chakra-ui/react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const FeaturesCard = [
  {
    image: <Img src={one} />,
    heading: "Plan and manage your day",
    text: "Start your morning with a clean slate, Plan ahead your day with a task in  our note",
  },
  {
    image: <Img src={two} />,
    heading: "Never forget a thing",
    text: "Quickly add your tasks,notes,expenses",
  },
  {
    image: <Img src={three} />,
    heading: "Find everything fast",
    text: "Quickly search through your items with one tap",
  },
  {
    image: <Img src={four} />,
    heading: "With you, everywhere",
    text: "Accessible across all your device",
  },
];

export default FeaturesCard;
