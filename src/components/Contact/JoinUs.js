import { Flex, Box } from "@chakra-ui/react";
import JoinForm from "./JoinForm";

export default function JoinUs() {
  return (
    <Flex
      w="full"
      align={"center"}
      justify={["center", "center", "center", "center", "space-between"]}
      flexDir={["column", "column", "column", "column", "row"]}
      h={["auto", "auto", "auto", "auto", "60rem"]}
    >
      <Box
        bgImage={"../../joinus.webp"}
        bgRepeat={"no-repeat"}
        bgPos={"20% 100%"}
        bgSize={"cover"}
        w="full"
        maxW={["full", "full", "full", "full", "52rem"]}
        h={["25rem", "25rem", "25rem", "25rem", "full"]}
      >
        <Box
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)"
          w="full"
          h="full"
        />
      </Box>
      <JoinForm />
    </Flex>
  );
}
