import { Flex } from '@chakra-ui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { PartnersInfo } from './partnersInfo';

export const Partners = () => {
	return (
		<Flex w="100vw" position="absolute" left={["0px", "0px", "-80px", "-80px"]} bottom="100px" alignItems="center" zIndex="1000">
			<Marquee gradient={false}>{PartnersInfo.map((partner) => partner.logo)}</Marquee>
		</Flex>
	);
};

export default Partners;
