import React from "react";
import RoadmapCard from "./roadmapCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Flex, Text } from "@chakra-ui/react";
import { IRoadmapCardIRoadmapCard } from "./roadmapCard";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 3,
  },
  1024: {
    items: 3,
  },
};

const itemsData: IRoadmapCardIRoadmapCard[] = [
  {
    quarter: "Q1 2021",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
  {
    quarter: "Q2 2021",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
  {
    quarter: "Q3 2021",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
  {
    quarter: "Q1 2022",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
  {
    quarter: "Q1 2022",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
  {
    quarter: "Q1 2022",
    data: [
      { data: "Setting up legal entity", isDone: true },
      { data: "$10M seed funding form Dupa z trupa" },
      { data: "Market research" },
      { data: "asdf" },
    ],
  },
];

export const CarouselRoadmap = () => {
  return (
    <AliceCarousel
      items={itemsData.map((data) => (
        <RoadmapCard quarter={data.quarter} data={data.data} />
      ))}
      mouseTracking
      controlsStrategy="alternate"
      disableButtonsControls
      paddingLeft={90}
      paddingRight={90}
      responsive={responsive}
    />
  );
};

export default CarouselRoadmap;
