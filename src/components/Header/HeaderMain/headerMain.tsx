import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../colors";
import RedTriangleIcon from "../../../Icons/redTriangleIcon";
import HeaderMainButtons from "./headerMainButtons";

export const HeaderMain = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      alignItems="center"
      zIndex="10"
      justifyContent="center"
      gridGap="32px"
      mt="50px"
    >
      <Flex fontSize={{base: '12px', lg: "15px"}} fontWeight="600" color="white" gridGap="4px" display={{}}>
        <RedTriangleIcon mt="-5px" />Licensing protocol based on  <strong>ERC20</strong> 
        <RedTriangleIcon transform="rotate(3deg)" mt="15px" />
      </Flex>
      <Flex
        flexDirection="column"
        fontSize={{base: '38px', lg: "80px"}}
        fontWeight="800"
        color="white"
        gridGap="-40px"
        textAlign='center'
        alignItems="center"
        lineHeight="100%"
      >
        <Flex>Decentralized Games</Flex>
        <Flex>Marketplace and</Flex>
        <Flex>
          Publishing Platform
          <strong>.</strong>
        </Flex>
      </Flex>
      <HeaderMainButtons />
    </Flex>
  );
};

export default HeaderMain;
