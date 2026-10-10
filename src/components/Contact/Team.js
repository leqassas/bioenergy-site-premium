import { VStack, Heading, Link, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Team() {
  return (
    <VStack
      py="5rem"
      gap="1.25rem"
      bg="prim"
      color="white"
      align={"center"}
      justify={"center"}
      px={["1.5rem", "3rem", "6rem"]}
    >
      <Heading
        as="h2"
        color="prim2"
        fontSize="2rem"
        letterSpacing={"0.25rem"}
        textTransform={"uppercase"}
        fontWeight={"700"}
      >
        Need help?
      </Heading>
      <Heading
        as="h3"
        fontSize={["1.2rem", "1.5rem", "2.5rem"]}
        fontWeight={"600"}
        textAlign={"center"}
      >
        Reach out to our Business Development Manager:
      </Heading>
      <chakra.NextLink
        as={NextLink}
        color="white"
        href="mailto:Ahmed.magdy@bioenergyegy.com"
        fontSize={["1rem", "1.2rem", "2.5rem"]}
        fontWeight={"700"}
        pos={"relative"}
        transition={"all 0.3s ease"}
        _before={{
          content: "''",
          width: "0",
          h: "3px",
          bg: "prim2",
          rounded: "full",
          transition: "all 0.3s ease",
          position: "absolute",
          left: "0",
          bottom: "1px",
          zIndex: "overlay",
        }}
        _hover={{
          _before: {
            w: "100%",
          },

          color: "prim2",
        }}
      >
        Ahmed.magdy@bioenergyegy.com
      </chakra.NextLink>
    </VStack>
  );
}
