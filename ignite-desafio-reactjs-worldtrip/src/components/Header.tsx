import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex
    as="header"
    w="100%"
    maxWidth={1440}
    justify="center"
    py="4"
  >
    <Image
      width={["20", "44"]} height={'auto'}
      objectFit="cover"
      src="/Logo.svg"
      alt="WorldTrip"
    />
    </Flex>
  )
}