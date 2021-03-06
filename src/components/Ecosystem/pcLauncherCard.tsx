import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { Colors } from "../../colors";
import ChevronRightIcon from "../../Icons/chevronRightIcon";
import GameXplorerLogo from "../../Icons/gameXplorerLogo";
import PCLauncherLogo from '../../Icons/pcLauncherLogo';


export const PCLauncherCard = () => {
  return (
    <Flex w="100vw" h="80vh" p="50px 140px" display={['none', 'none', 'flex', 'flex']}>
      <Flex flexDirection="column" gridGap="50px" >
        <PCLauncherLogo />
        <Text fontSize="44px" fontWeight="700" w='50%'>
        PC Launcher with MetaMask and DRM!
        </Text>
        <Text fontSize="20px" fontWeight="300" color={Colors.greyText} w='35%'>
        Our tool that allows you to download and play Web 2.0 and Web3 games on your computer. Your virtual gaming shelf is the HashUp PC Launcher!        </Text>
        <Flex gridGap="3px">
          <Flex
            bgColor={Colors.brandMain}
            fontSize="13px"
            fontWeight="600"
            p="12px 22px"
            borderRadius="0 0 0 18px"
            cursor="pointer"
          >
            Play Games
          </Flex>
          <Flex
            bgColor={Colors.brandMain}
            opacity="0.6"
            p="12px"
            alignItems="center"
            cursor="pointer"
          >
            <ChevronRightIcon />
          </Flex>
        </Flex>
      </Flex>
      <Image
        src="assets/pcLauncherCard.png"
        position="absolute"
        right="0"
        w="50%"
      />
    </Flex>
  );
};

export default PCLauncherCard