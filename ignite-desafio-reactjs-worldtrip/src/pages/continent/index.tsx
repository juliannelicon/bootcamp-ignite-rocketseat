import { Box, Flex, HStack, Text, Grid, Center, Image, SimpleGrid, Heading, useMediaQuery, useBreakpointValue } from '@chakra-ui/react';

import { Header } from "../../components/Header";

export default function Continent() {
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

        <Flex
          w="100%"
          h={useBreakpointValue({ base: "150", md: "500" })}
          align={useBreakpointValue({ base: "center", md: "end" })}
          justify={useBreakpointValue({ base: "center", md: "left" })}
          bgImage="url('/images/europa/Europa.svg')"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
        >
          <Text
            ml={["0", "32"]}
            mb={["0", "16"]}
            color="white.800"
            fontWeight="600"
            fontSize={["2xl", "4xl"]}
          >
            Europa
          </Text>
        </Flex>

        <Flex
          w="100%"
          mx="auto"
          maxWidth={1160}
          px="6"
          direction="column"

        >
          <SimpleGrid
            flex="1"
            mt={["6", "20"]}
            minChildWidth="300px"
            justifyContent="center"
            alignItems="center"
            gap={10}
          >
            <Box>
              <Text textAlign="justify" fontSize="sm">
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
            </Box>
            <Box>
              <SimpleGrid columns={3} fontWeight="600">
                <Box >
                  <Text color="yellow.800" fontSize={["2xl", "4xl"]}>50</Text>
                  <Text fontSize="sm">países</Text>
                </Box>
                <Box >
                  <Text color="yellow.800" fontSize={["2xl", "4xl"]}>60</Text>
                  <Text fontSize="sm">línguas</Text>
                </Box>
                <Box >
                  <Text color="yellow.800" fontSize={["2xl", "4xl"]}>24</Text>
                  <Text fontSize="sm">cidades +100</Text>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <Heading
            mt={["8", "20"]}
            mb="10"
            fontSize={["2xl", "4xl"]}
            fontWeight="500"
            color="gray.700"
          >
            Cidades +100
          </Heading>

          <SimpleGrid
              mb="20"
              spacing={10}
              minChildWidth="200px"
              pl={["4", "0"]}
          >
            <Box maxW="2xs" borderWidth="1px" borderRadius="lg">
              <Image src="/images/europa/Londres.svg" />
              <Flex maxW="sm" p="4" justifyContent="space-between">
                <Flex direction="column">
                  <Text fontSize="xl" color="gray.700">Londres</Text>
                  <Text fontSize="small" color="gray.500">Reino Unido</Text>
                </Flex>
                <Image src="/images/europa/LondresBandeira.svg" />
              </Flex>
            </Box>
            <Box maxW="2xs" borderWidth="1px" borderRadius="lg">
              <Image src="/images/europa/Paris.svg" />
              <Flex maxW="sm" p="4" justifyContent="space-between">
                <Flex direction="column">
                  <Text fontSize="xl" color="gray.700">Paris</Text>
                  <Text fontSize="small" color="gray.500">França</Text>
                </Flex>
                <Image src="/images/europa/ParisBandeira.svg" />
              </Flex>
            </Box>
            <Box maxW="2xs" borderWidth="1px" borderRadius="lg">
              <Image src="/images/europa/Roma.svg" />
              <Flex maxW="sm" p="4" justifyContent="space-between">
                <Flex direction="column">
                  <Text fontSize="xl" color="gray.700">Roma</Text>
                  <Text fontSize="small" color="gray.500">Itália</Text>
                </Flex>
                <Image src="/images/europa/RomaBandeira.svg" />
              </Flex>
            </Box>
            <Box maxW="2xs" borderWidth="1px" borderRadius="lg">
              <Image src="/images/europa/Praga.svg" />
              <Flex maxW="sm" p="4" justifyContent="space-between">
                <Flex direction="column">
                  <Text fontSize="xl" color="gray.700">Praga</Text>
                  <Text fontSize="small" color="gray.500">República Tcheca</Text>
                </Flex>
                <Image src="/images/europa/PragaBandeira.svg" />
              </Flex>
            </Box>
            <Box maxW="2xs" borderWidth="1px" borderRadius="lg">
              <Image src="/images/europa/Amsterda.svg" />
              <Flex maxW="sm" p="4" justifyContent="space-between">
                <Flex direction="column">
                  <Text fontSize="xl" color="gray.700">Amsterdã</Text>
                  <Text fontSize="small" color="gray.500">Holanda</Text>
                </Flex>
                <Image src="/images/europa/AmsterdaBandeira.svg" />
              </Flex>
            </Box>
          </SimpleGrid>

        </Flex>
      </Flex>
    </Flex>
  )
}