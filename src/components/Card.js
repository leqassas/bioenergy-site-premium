import { Flex, VStack, Heading, Text, Link, Avatar } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import NextLink from "next/link";
import { MBox } from "@/styles/Motion";

export default function Card({ img, bg, heading, text, email, link }) {
  return (
    <VStack
      spacing="1.5rem"
      align={link ? "start" : "center"}
      w="full"
      maxW={"23.125rem"}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "translateY(-10px)",
      }}
    >
      {img && (
        <MBox
          w="full"
          h="23.125rem"
          bgImage={img}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          rounded={text ? "1.875rem" : "0.625rem"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />
      )}
      {!img && (
        <Avatar
          p="0"
          m="0"
          w="full"
          h="full"
          rounded="2rem"
          pos="absolute"
          zIndex={"-1"}
          bottom={"0"}
        />
      )}
      <VStack align={link ? "start" : "center"} spacing={"0.5rem"}>
        <Heading
          fontSize={link ? "1.4rem" : "1.75rem"}
          textAlign={"center"}
          fontWeight={"700"}
        >
          {heading}
        </Heading>
        {text && <Text fontSize={"1rem"}>{text}</Text>}
        {email && (
          <Flex align={"center"} justifyContent={"center"} gap="0.5rem">
            <MdEmail />
            <Text fontSize={"0.875rem"} as={Link} href={`mailto:${email}`}>
              {email}
            </Text>
          </Flex>
        )}
        {link && (
          <Link
            color={"prim"}
            fontSize={"1rem"}
            as={NextLink}
            href={`/products/${link}`}
          >
            Learn more
          </Link>
        )}
      </VStack>
    </VStack>
  );
}

