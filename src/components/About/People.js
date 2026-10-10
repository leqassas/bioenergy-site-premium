import { Flex, VStack, Heading } from "@chakra-ui/react";
import Card from "../Card";

export default function People() {
  return (
    <VStack spacing={"3.12rem"} align={"center"} w="full" py="4.5rem">
      <VStack spacing={"1.25rem"} align={"center"}>
        <Heading
          textTransform={"uppercase"}
          fontSize={"2rem"}
          as="h2"
          fontWeight={"700"}
          color="prim"
          letterSpacing={"0.25rem"}
        >
          Key people
        </Heading>
        <Heading
          color="black"
          as="h3"
          fontSize={["1.5rem", "2rem", "2.5rem"]}
          fontWeight={"600"}
          lineHeight={"normal"}
          textAlign={"center"}
        >
          Guiding Our Vision, Shaping Our Future
        </Heading>
      </VStack>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        w="full"
        gap={"2rem"}
        px={["1.5rem", "3rem", "6rem"]}
      >
        {/* <Card
          heading={"Dina Samir"}
          text={"Project Manager"}
        /> */}
        <Card
          img={"../../team/magdy.webp"}
          heading={"Ahmed Magdi"}
          text={"Business Development Manager"}
        />
        <Card
          heading={"Ahmed El-prince"}
          text={"Financial Manager"}
          img={"../../team/prince.webp"}
        />

        {/* <Card
          img={"../../team/adel.webp"}
          heading={"Mohamed Adel"}
          text={"Technical manager"}
        /> */}
        <Card
          img={"../../team/seif.webp"}
          heading={"Seif Hamdi"}
          text={" Commercial Manager"}
        />
        {/* <Card
          img={"../team/tala.webp"}
          heading={"Tala Bassam"}
          text={"Business Development Specialist"}
        /> */}
      </Flex>
    </VStack>
  );
}
