import {
  Box,
  Flex,
  Divider,
  Text,
  Image,
  Wrap,
  WrapItem,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';

import { Header } from "../components/Header";

import { Banner } from "../components/Banner";

import { Slide } from "../components/Slide";

export default function Home() {
  const isWideVerison = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      h="100vh"
      align="center"
      direction="column"
    >
      <Header />
      <Flex
        w="100%"
        mx="auto"
        maxWidth={1440}
        direction="column"
        alignItems="center"
      >
        <Banner />

        <Wrap mt={["9", "20"]} mx="4" justify="center" spacing={["50px", "100px"]}>
          <WrapItem>
            <Flex alignItems="center" justify="center" direction={["row", "column"]}>
              { isWideVerison ? (
                <Image
                  boxSize="65px"
                  src="/cocktail.svg"
                  alt="vida noturna"
                  mb="6"
                />
              ) : (
                <Icon mr="2" viewBox="0 0 200 200" color="yellow.800" boxSize="3">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              )}

              <Text fontSize={["lg", "xl"]} fontWeight={["500", "600"]}>vida noturna</Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex alignItems="center" direction={["row", "column"]}>
              { isWideVerison ? (
                <Image
                  boxSize="65px"
                  src="/surf.svg"
                  alt="praia"
                  mb="6"
                />
              ) : (
                <Icon mr="2" viewBox="0 0 200 200" color="yellow.800" boxSize="3">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              )}

              <Text fontSize={["lg", "xl"]} fontWeight={["500", "600"]}>praia</Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex alignItems="center" direction={["row", "column"]}>
              { isWideVerison ? (
                <Image
                  boxSize="65px"
                  src="/building.svg"
                  alt="moderno"
                  mb="6"
                />
              ) : (
                <Icon mr="2" viewBox="0 0 200 200" color="yellow.800" boxSize="3">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              )}

              <Text fontSize={["lg", "xl"]} fontWeight={["500", "600"]}>moderno</Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex alignItems="center" direction={["row", "column"]}>
              { isWideVerison ? (
                <Image
                  boxSize="65px"
                  src="/museum.svg"
                  alt="Clássico"
                  mb="6"
                />
              ) : (
                <Icon mr="2" viewBox="0 0 200 200" color="yellow.800" boxSize="3">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              )}

              <Text fontSize={["lg", "xl"]} fontWeight={["500", "600"]}>clássico</Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex alignItems="center" direction={["row", "column"]}>
              { isWideVerison ? (
                <Image
                  boxSize="65px"
                  src="/earth.svg"
                  alt="e mais"
                  mb="6"
                />
              ) : (
                <Icon mr="2" viewBox="0 0 200 200" color="yellow.800" boxSize="3">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              )}

              <Text fontSize={["lg", "xl"]} fontWeight={["500", "600"]}>e mais...</Text>
            </Flex>
          </WrapItem>
        </Wrap>

        <Divider mt={["9", "20"]} borderBottomColor="gray.700" width={["16", "24"]}/>

        <Box mt={["6", "20"]}>
          <Text align="center" fontSize={["xl", "4xl"]} fontWeight="500">
            Vamos nessa?
          </Text>
          <Text align="center" fontSize={["xl", "4xl"]} fontWeight="500">
            Então escolha seu continente
          </Text>
        </Box>

        <Slide />
      </Flex>
    </Flex>
  )
}
