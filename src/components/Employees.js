import { Flex, VStack, Heading } from "@chakra-ui/react";
import Card from "./Card";

export default function Employees() {
  return (
    <VStack
      px={["1.5rem", "3rem", "6rem"]}
      py="5rem"
      gap="3.12rem"
    >
      <VStack spacing={"1.25rem"}>
        <Heading
          fontSize={"2rem"}
          textAlign={"center"}
          textTransform={"uppercase"}
          fontWeight={"700"}
          color="prim"
          letterSpacing={"0.25rem"}
        >
          Board of directors{" "}
        </Heading>
        <Heading
          fontSize={["1.5rem", "2rem", "2.5rem"]}
          textAlign={"center"}
          textTransform={"capitalize"}
          fontWeight={"400"}
          as="h3"
        >
          Guiding Our Vision, Shaping Our Future
        </Heading>
      </VStack>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
        w="full"
        gap="2rem"
      >
        <Card img={"../adv/mahmoud.webp"} heading={"Mahmoud Galal"} />
        <Card img={"../adv/Ayman-ismaiil.webp"} heading={"Ayman Ismaiil"} />
        <Card img={"../adv/beethoven-Tayel.webp"} heading={"Beethoven Tayel"} />
        {/* <Card img={"../adv/ahmed-Huzzayn.webp"} heading={"Ahmed Huzzayn"} /> */}

        {/* <Card
          img={"../adv/Yassin-Abdel-Ghaffar.webp"}
          heading={"Yassin AbdelGhaffar"}
        /> */}
      </Flex>
    </VStack>
  );
}
