import { Center, Heading, chakra, Text, Box } from "@chakra-ui/react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "400"] });

export default function GreenHands() {
  return (
    <Center
      spacing={"0"}
      bgImage="../../greenhands.webp"
      bgPos={"100% 60%"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      w="full"
      minH="32.5rem"
    >
      <Center bg="#1E471799" px={["1.5rem", "3rem", "6rem"]} py="5rem" w="full" minH="32.5rem">
        <Box textAlign={"center"} margin="0 auto" w="full" maxW="55rem">
          <Heading
            fontWeight={"700"}
            color="white"
            letterSpacing={"normal"}
            w="full"
            pb={["1rem", "1.5rem", "1.5rem", "1.5rem", "2rem"]}
            fontFamily={poppins.style.fontFamily}
            fontSize={["2.5rem", "3rem", "3.5rem", "4.5rem", "5rem"]}
            lineHeight={"1.15"}
          >
            You’ll be in{" "}
            <chakra.span color="#91C888">
              green
            </chakra.span>{" "}
            hands.
          </Heading>

          <Text
            fontSize={["1rem", "1.2rem", "1.2rem", "1.5rem", "1.75rem"]}
            fontWeight={"400"}
            color="white"
            textAlign={"center"}
            letterSpacing={"1px"}
            w="full"
            fontFamily={poppins.style.fontFamily}
          >
            {"More than a decade of experience in global waste markets."}
          </Text>
        </Box>
      </Center>
    </Center>
  );
}
