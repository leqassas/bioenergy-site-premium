import { MBox } from "@/styles/Motion";
import { Card, CardBody, Heading, VStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SCard({ img, head, btn, type, text, link }) {
  return (
    <MBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      w="full"
      maxW={"31.25rem"}
      h="22rem"
      borderRadius={"0.625rem"}
    >
      <Card
        align="center"
        borderRadius={"0.625rem"}
        variant={"unstyled"}
        dropShadow={"none"}
        w="full"
        h="full"
        bgImage={img}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
      >
        <CardBody
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)"
          w="full"
          borderRadius={"0.625rem"}
        >
          <VStack
            spacing={"9.62rem"}
            align={"center"}
            w="full"
            py="2.5rem"
            px="3.25rem"
          >
            <Heading
              textAlign={"center"}
              color={"white"}
              fontSize={["1.5rem", "1.5rem", "2rem"]}
              fontWeight={"700"}
            >
              {head}
            </Heading>
            <Button
              pos="absolute"
              bottom={"2.5rem"}
              fontSize={"1.25rem"}
              href={link}
              as={NextLink}
              variant={"unstyled"}
              color="white"
              _hover={{
                color: "prim2",
              }}
            >
              Learn More
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </MBox>
  );
}

