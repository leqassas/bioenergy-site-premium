import { VStack, Heading, Text } from "@chakra-ui/react";
import { MBox } from "@/styles/Motion";

export default function Project({ status, head, txt, children, color }) {
  return (
    <VStack
      spacing={"0"}
      px={["1.5rem", "3rem", "6rem"]}
      py="6.5rem"
      bg={color}
    >
      <MBox
        display={"flex"}
        flexDir={"column"}
        h="full"
        w="full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        gap="3.12rem"
      >
        <VStack spacing={"1.25rem"} align={"start"} w="full">
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            fontWeight={"700"}
            color={color === "white" ? "prim" : "prim2"}
            letterSpacing={"0.25rem"}
          >
            {status}
          </Heading>
          <Heading
            fontSize={["2rem", "2.25rem", "3rem"]}
            color={color === "white" ? "black" : "white"}
            as="h3"
            fontWeight={"700"}
            lineHeight={"normal"}
          >
            {head}
          </Heading>
          <Text
            fontSize={["1rem", "1rem", "2rem"]}
            fontWeight={"400"}
            color={color === "white" ? "text" : "white"}
          >
            {txt}
          </Text>
        </VStack>
        {children}
      </MBox>
    </VStack>
  );
}

