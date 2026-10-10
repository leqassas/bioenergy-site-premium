import { VStack, Heading, Text, ListItem, ListIcon } from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";

export default function Checkpoint({ head, text, prim }) {
  return (
    <ListItem
      fontSize={["1rem", "1.5rem", "2rem"]}
      fontWeight={"400"}
      display={"flex"}
      w="full"
      gap={["0.5rem", "1rem", "1.25rem"]}
    >
      <ListIcon
        as={FaCheck}
        color={!prim ? "prim2" : "prim"}
        pos="relative"
        fontSize={["1.2rem", "1.5rem", "2rem"]}
        top={[
          "calc(0.6rem - 0.5ch)",
          "calc(0.75rem - 0.5ch)",
          "calc(1rem - 0.5ch)",
        ]}
      />
      <VStack align="start">
        <Heading
          color={!prim ? "prim2" : "prim"}
          fontWeight={"600"}
          fontSize={["1.2rem", "1.5rem", "2rem"]}
        >
          {head}
        </Heading>
        <Text
          color={!prim ? "white" : "text"}
          fontSize={["1rem", "1.2rem", "1.5rem"]}
        >
          {text}
        </Text>
      </VStack>
    </ListItem>
  );
}
