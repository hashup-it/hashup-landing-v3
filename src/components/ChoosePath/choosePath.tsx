import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../colors";
import SectionInfoButton from "../SectionLabel/sectionInfoButton";
import PathComponent, { IPathComponents } from "./pathComponent";

export const ChoosePath = () => {
  const data: IPathComponents[] = [
    {
      topText: "New economy for",
      path: "/animations/pad_data.json",
      name: "Creator",
      description:
        "Get familiar with the new model of the creator economy. Publish games without intermediaries and decide how you want to earn. ",
    },
    {
      topText: "Freedom for",
      path: "/animations/wykres_data.json",
      name: "Gamer",
      description:
        "Share your experiences with other gamers. Take pride in your collection, follow your friends, and dive into the new wave of gaming!",
    },
    {
      topText: "New place for",
      path: "/animations/pad_data.json",
      name: "Investor",
      description:
        "A new distribution model means new and better opportunities. Discover the new world of investment!",
    },
  ];
  return (
    <Flex
      direction="column"
      alignItems="center"
      position="relative"
      pt="70px"
      pb="150px"
    >
      <Box
        w="100vw"
        h="1px"
        position="absolute"
        top="0"
        bgColor="white"
        opacity="0.1"
      />
      <SectionInfoButton label="WHO YOU ARE?" />
      <Flex p="20px" fontSize="60px" color="#ffffff" fontWeight="700">
        <Text> Choose a Path</Text>
        <strong>.</strong>
      </Flex>
      <Flex
        fontSize="20px"
        color={Colors.greyText}
        fontWeight="300"
        direction="column"
        alignItems="center"
      >
        <Text maxWidth="60vw" textAlign="center">
          Be the part of the revolution in the game industry and join our
          growing community of game creators, innovators, and gamers!
        </Text>
      </Flex>
      <Flex mt="30px" gridGap="32px" justifyContent="center" maxW="85vw">
        {data.map((element) => (
          <PathComponent {...element} />
        ))}
      </Flex>
      <Flex
        bgColor={Colors.brandMain}
        borderRadius="full"
        zIndex="0"
        filter="blur(100px)"
        opacity="0.4"
        w="275px"
        h="275px"
        position="absolute"
        bottom="25%"
        right="32.5%"
        transform="translate(15%, 15%)"
      ></Flex>
      <Box
        h="1px"
        w="100vw"
        bgColor="white"
        opacity="0.1"
        position="absolute"
        bottom="0"
      />
    </Flex>
  );
};

export default ChoosePath;
