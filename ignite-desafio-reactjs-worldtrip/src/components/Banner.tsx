import { Flex, Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVerison = useBreakpointValue({
    base: false,
    md: false,
    lg: false,
    xl: true
  });

  return(
    <>
      <Flex
        w="100%"
        h="auto"
        bgImage="url('/Background.svg')"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Flex
          w="100%"
          justify="space-between"
          pl={["4", "4", "36"]}
          py={["7", "7", "20"]}
        >

          <Box maxWidth="xl">
            <Text
              color="white.800"
              fontSize={["xl", "4xl"]}
              fontWeight="500"
            >
              5 Continentes
            </Text>
            <Text
              color="white.800"
              fontSize={["xl", "4xl"]}
              fontWeight="500"
            >
              infinitas possibilidades.
            </Text>
            <Text
              color="gray.400"
              fontSize={["sm", "xl"]}
              mt={["2", "5"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

        </Flex>
      </Flex>

      { isWideVerison && (
        <Image
          width="xs" height={'auto'}
          src="/Airplane.svg"
          alt="WorldTrip"
          ml="auto"
          mr="36"
          mt="-48"
        />
      )}
    </>
  )
}