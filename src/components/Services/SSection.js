import { Flex, Image, VStack } from "@chakra-ui/react";
import SPHeader from "../SPHeader";

export default function SSSection({
  head,
  txt,
  children,
  img,
  link,
  headColor,
  reverse,
}) {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      w="full"
      px={["1.5rem", "3rem", "6rem"]}
      py="5.2rem"
      id={link}
      flexDir={[
        "column",
        "column",
        "column",
        "column",
        reverse ? "row-reverse" : "row",
      ]}
      gap={["1.2rem", "2rem", "3rem", "4rem"]}
    >
      <Image
        alt={head}
        src={img}
        w="full"
        maxW={["full", "full", "full", "full", "38rem"]}
        h={["auto", "auto", "auto", "auto", "42rem"]}
        objectFit="cover"
        rounded="1.875rem"
      />
      <VStack
        spacing={headColor === "prim" ? "1.8rem" : "1.25rem"}
        align="start"
        justify="start"
        w="full"
      >
        <SPHeader
          txtColor={"text"}
          headColor={headColor}
          head={head}
          txt={txt}
        />
        {children}
      </VStack>
    </Flex>
  );
}
