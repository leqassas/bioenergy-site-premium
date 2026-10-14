import { MBox } from "@/styles/Motion";
import { Heading, VStack, Image, Box } from "@chakra-ui/react";

export default function Partners() {
  return (
    <VStack
      my="5rem"
      px={["1.5rem", "3rem", "6rem"]}
      spacing="6rem"
      w="full"
    >
      <VStack spacing={"5.8rem"} w="full">
        <VStack spacing={"1.25rem"}>
          <Heading
            fontSize={"2.25rem"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            ALTERNATIVE FUEL PARTNERS
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            fontWeight={"400"}
            textAlign={"center"}
            textTransform={"capitalize"}
            as="h3"
          >
            Collaborating for a Sustainable Tomorrow
          </Heading>
        </VStack>
        <MBox
          display={"flex"}
          flexWrap="wrap"
          alignItems={"center"}
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "space-between",
          ]}
          gap="2rem"
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Box maxW="220px">
            <Image src="/alternative/Cemex_logo.svg" alt="Cemex" objectFit="contain" />
          </Box>
          <Box maxW="220px">
            <Image src="/alternative/HeidelbergCement_Logo.svg" alt="Heidelberg Cement" objectFit="contain" />
          </Box>
          <Box maxW="220px">
            <Image src="/alternative/lafarge-egypt.svg" alt="Lafarge Egypt" objectFit="contain" />
          </Box>
          <Box maxW="220px">
            <Image src="/alternative/logo.png" alt="Alternative partner logo" objectFit="contain" />
          </Box>
        </MBox>
      </VStack>
      <VStack spacing={"5.8rem"} w="full">
        <VStack spacing={"1.25rem"}>
          <Heading
            fontSize={"2.25rem"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            ZERO WASTE PARTNERS
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            fontWeight={"400"}
            textAlign={"center"}
            textTransform={"capitalize"}
            as="h3"
          >
            Partnering for Innovation and Excellence
          </Heading>
        </VStack>
        <MBox
          display={"flex"}
          flexWrap="wrap"
          alignItems={"center"}
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "space-between",
          ]}
          gap="2rem"
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Box maxW="150px">
            <Image src="/zero/froneri-ice-cream.svg" alt="Froneri" objectFit="contain" />
          </Box>
          <Box maxW="150px">
            <Image src="/zero/mars-inc.svg" alt="Mars" objectFit="contain" />
          </Box>
          <Box maxW="150px">
            <Image src="/zero/nestle.svg" alt="Nestle" objectFit="contain" />
          </Box>
          <Box maxW="150px">
            <Image src="/zero/P&G_Logo_SVG.svg" alt="P&G" objectFit="contain" />
          </Box>
          <Box maxW="150px">
            <Image src="/zero/scib-paints-logo.jpg" alt="Scib Paints" objectFit="contain" />
          </Box>
          <Box maxW="150px">
            <Image src="/zero/unilever.svg" alt="Unilever" objectFit="contain" />
          </Box>
        </MBox>
      </VStack>
    </VStack>
  );
}

