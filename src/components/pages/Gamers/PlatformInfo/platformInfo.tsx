import { Flex, Image, Text, Box, Link } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import GameXplorerLogo from '../../../../Icons/gameXplorerLogo';
import PlayVideoIcon from '../../../../Icons/playVideoIcon';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import { Colors } from '../../../../colors';
import ChevronRightIcon from '../../../../Icons/chevronRightIcon';
import { CartridgesScroll } from './cartridgesScroll';
import { HashPadSroll } from './hashPadSroll';
import MobileGameXplorerLogo from '../../../../Icons/mobileGameXplorerLogo';

export const PlatformInfo = () => {
	const ref = useRef(null!);
	const inputRef = useRef(null!);

	return (
		<Flex direction="column" justifyContent="flex-start">
			<Flex direction="column" p={["0px 0px 0px 80px", "0px 0px 0px 150px", "0px 0px 0px 150px" , "0px 0px 0px 150px"]}>
				<Flex maxW="20%">
					<SectionInfoButton label="PLATFORM" />
				</Flex>
				<Flex
					direction="column"
					fontSize={['24px', '32px', '64px', '70px']}
					fontWeight="700"
					pt="46px"
					gridGap="-40px"
					lineHeight="110%"
					zIndex="1"
				>
					<Text>A brand new platform</Text>
					<Text>for gamers and game</Text>
					<Text>
					developers<strong>.</strong>
					</Text>
				</Flex>
			</Flex>
			<Flex direction="column" position="relative">
				<Flex pt="-30px" ref={inputRef}>
					<HashPadSroll />
					{<Image src="/assets/images/hash_pad/iPad_00000.jpg" />}
				</Flex>
				<Flex
					position="absolute"
					top="50%"
					justifyContent={['center', 'center', 'space-between', 'space-between']}
					direction={['column', 'column', 'column', 'row']}
					alignItems="center"
					p={['30px 0px 0px 0px', '40px 80px 0 px 40px', '40px 220px 0px 220px', '40px 220px 0px 220px']}
					gridGap={[ "50px", "100px", "120px", "150px"]}
					zIndex="10"
				>
					<Flex
						direction="column"
						justifyContent={['center', 'center', 'flex-start', 'flex-start']}
						gridGap="50px"
						alignItems={['center', 'center', 'flex-start', 'flex-start' ]}
					>
						<Flex display={['none', 'none', 'flex', 'flex']}>
						<GameXplorerLogo />
						</Flex>
						<Flex display={['flex', 'flex', 'none', 'none']}>
							<MobileGameXplorerLogo />
						</Flex>
						<Box fontSize={['14px', '18px', '22px', '26px']} fontWeight="500" maxW={['60%', '75%', 'none', 'none']}>
							<Text as="span">
								Combines a digital game store with a blockchain explorer and social media for gamers.
							</Text>
							<Text color="#A1A1A6" as="span">
								{' '}
								It also creates an environment for browsing games and user profiles while introducing an
								element of social media.
							</Text>
						</Box>
						<Link href='https://gamexplorer.io/' target='_blank' zIndex='2' _hover={{active: 'none'}}>
						<Flex gridGap="3px" justifyContent='flex-start' zIndex='2' cursor='pointer' _hover={{opacity: '0.8'}}> 
							<Flex
								zIndex='10000'
								bgColor={Colors.brandMain}
								color="white"
								cursor='pointer'
								borderRadius="0px 0px 0px 14px"
								p="8px 13px"
								fontSize="14px"
								alignItems="center"
								fontWeight="600"
							>
								Go to GameXplorer
							</Flex>
							<Flex bgColor={'#9A2727'} alignItems="center" p="15px">
								<ChevronRightIcon />
							</Flex>
						</Flex>
						</Link>
					</Flex>
					
					<Flex
						gridGap={["20px", "30px", "40p", "40px"]}
						alignItems={['center', 'center', 'flex-start', 'flex-start' ]}
						justifyContent={['center', 'center', 'flex-start', 'flex-start']}
						direction={['column', 'column', 'row', 'row']}
					>
						<Text fontSize={['22px', '32px', '42px', '50px']} fontWeight="600">
							How does our platform works<strong>?</strong>
						</Text>
						<PlayVideoIcon width={66} height={66} cursor='pointer' _hover={{opacity: '0.8'}} />
					</Flex>
				</Flex>
			</Flex>
			<Flex direction="column" justifyContent="flex-start">
				<Flex direction="column" p={["450px 0px 0px 80px" ,"300px 0px 0px 210px","300px 0px 0px 210px" , "300px 0px 0px 210px"]} zIndex="1">
					<Flex pt="100px" maxW="20%" right={{sm: '80%'}}>
						<SectionInfoButton label="LICENSES" />
					</Flex>
					<Flex pt="50px" maxW={["85%", "80%", "70%", "70%"]} fontSize={['24px', '32px', '64px', '70px']} fontWeight="600" lineHeight="110%" direction="column">
						<Text>What can </Text>
						<Text>
						gamers gain using our cartridges<strong>?</strong>
						</Text>
					</Flex>
					<Box pt="50px" fontSize={["16px", "18px", "22px", "26px"]} maxW={['80%', '60%', '50%', "50%"]} fontWeight="500">
						<Text as="span">
							{' '}
							The gaming licenses you purchased on the HashUp platform are in the form of{' '}
							<strong>ERC-20 tokens</strong>.
						</Text>
						<Text as="span" color={Colors.additional}>
							{' '}
							In short, they work just like other cryptocurrencies.{' '}
						</Text>
						<Text pt="50px" color='white'>
							{' '}
							Store games in your crypto wallet. Alongside <strong>Bitcoin</strong> and <strong>Ethereum</strong>.{' '}
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default PlatformInfo;
