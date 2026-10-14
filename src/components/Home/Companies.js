import { Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function Companies() {
  return (
    <VStack
      spacing={"0"}
      bgImage="../../ourcompanies.webp"
      bgPos={"100% 0%"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <VStack bg="#1E4717B2" spacing="3.12rem" w="full" px={["1.5rem", "3rem", "6rem"]} py="5rem">
        <VStack spacing={"1.25rem"}>
          <Heading
            fontSize={"2rem"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="prim2"
            letterSpacing={"0.25rem"}
          >
            OUR COMPANIES
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            fontWeight={"400"}
            textAlign={"center"}
            textTransform={"capitalize"}
            as="h3"
            color="white"
          >
            Driving Success Together
          </Heading>
        </VStack>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={["3rem", "5rem", "8.75rem"]}
          flexWrap={"wrap"}
        >
          <Image
            alt="the green innovation"
            src="/tgi-w.svg"
            w="full"
            maxW="22.5rem"
          />
          <Image
            alt="estidama"
            src="/estidama-w.svg"
            w="full"
            maxW="22.5rem"
          />
        </Flex>
      </VStack>
    </VStack>
  );
}
