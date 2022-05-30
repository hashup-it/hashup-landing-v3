import Header from "../components/Header/header";
import SectionOne from "../components/SectionOne/sectionOne";
import Advantages from "../components/Advantages/advantages";
import ChoosePath from "../components/ChoosePath/choosePath";
import GlobalContainer from "../components/GlobalContainter/globalContainer";
import Community from "../components/Community/community";
import { Flex } from "@chakra-ui/react";
import StickySocials from "../components/StickySocials/stickySocials";
import WhatYouGet from "../components/WhatYouGetSection/whatYouGet";
import Premiere from "../components/Premiere/premiere";
import Recommendations from "../components/Recommendations/recommendations";
import Ecosystem from "../components/Ecosystem/ecosystem";
import Roadmap from "../components/Roadmap/roadmap";

const Index = () => (
  <Flex>
    <GlobalContainer>
      <Header />
      <SectionOne />
      <Advantages />
      <ChoosePath />
      <WhatYouGet />
      <Recommendations />
      <Ecosystem />
      <Premiere />
      <Community />
      <Roadmap />
    </GlobalContainer>
  </Flex>
);

export default Index;
