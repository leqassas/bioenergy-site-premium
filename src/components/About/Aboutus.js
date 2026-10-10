import {
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import People from "./People";

import { MBox } from "@/styles/Motion";
import { BsDot } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

export default function Aboutus() {
  return (
    <>
      <MBox
        display={"flex"}
        flexDir={"column"}
        bg="white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <VStack
          spacing={"1.25rem"}
          align={"start"}
          w="full"
          px={["1.5rem", "3rem", "6rem"]}
          py="4.5rem"
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            OUR MISSION
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.25rem"]}
            color="black"
            as="h3"
            fontWeight={"600"}
            lineHeight={"normal"}
          >
            To improve people’s lives, provide them a better future, making the
            earth a better place to live in
          </Heading>
          <Text
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={"400"}
            color={"text"}
          >
            while protecting the nature, fighting the environmental challenges
            and by offering ethical waste management solutions, and more
            sustainable energy resources.
          </Text>
        </VStack>
        <VStack
          spacing={"1.25rem"}
          bg="prim"
          align={"start"}
          w="full"
          px={["1.5rem", "3rem", "6rem"]}
          py="4.5rem"
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            fontWeight={"700"}
            color="prim2"
            letterSpacing={"0.25rem"}
          >
            OUR VISION
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.25rem"]}
            color="white"
            as="h3"
            fontWeight={"600"}
            lineHeight={"normal"}
          >
            Change the way people think about waste
          </Heading>
          <Text
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={"400"}
            color={"white"}
          >
            by leading the markets we operate it in to a better future where
            materials are reused, and energy is renewable.
          </Text>
        </VStack>
        <VStack
          spacing={"1.25rem"}
          align={"start"}
          w="full"
          px={["1.5rem", "3rem", "6rem"]}
          py="4.5rem"
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            Philosophies
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.25rem"]}
            color="black"
            as="h3"
            fontWeight={"600"}
            lineHeight={"normal"}
          >
            There’s a big difference between being in a community, and being
            part of it.
          </Heading>
          <Text
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={"400"}
            color={"text"}
          >
            That’s why focus on making a positive impact on the planet and
            places we call home.
          </Text>
        </VStack>
      </MBox>

      <VStack
        spacing={"0"}
        bgImage="../../aboutus2.webp"
        bgPos={"100% 82%"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <VStack
          bg="#1E4717B2"
          spacing="3.12rem"
          w="full"
          px={["1.5rem", "3rem", "6rem"]}
          py="6rem"
          align={"start"}
        >
          <Heading
            fontSize={["2rem", "2.25rem", "2.25rem"]}
            color="prim2"
            as="h3"
            fontWeight={"700"}
            lineHeight={"normal"}
            textTransform={"uppercase"}
            letterSpacing={"0.25rem"}
          >
            GET TO KNOW THE PEOPLE WHO INSPIRE US
          </Heading>
          <List spacing={"3.2rem"} w="full">
            <ListItem
              fontSize={["1rem", "1.5rem", "1.5rem"]}
              color="white"
              fontWeight={"400"}
              display={"flex"}
              gap="1rem"
              w="full"
            >
              <ListIcon
                transform={"scale(3)"}
                as={BsDot}
                color="prim2"
                pos="relative"
                top="0.5ch"
              />
              At Bioenergy, our people are the key to our success. We believe
              that business like Bioenergy have to ensure an open, healthy and
              respectful culture for all our employees.
            </ListItem>
            <ListItem
              fontSize={["1rem", "1.5rem", "1.5rem"]}
              color="white"
              fontWeight={"400"}
              display={"flex"}
              gap="1rem"
              w="full"
            >
              <ListIcon
                transform={"scale(3)"}
                as={BsDot}
                color="prim2"
                pos="relative"
                top="0.5ch"
              />
              Our staff are consulted on matters that affect their careers and
              wellbeing positively and they, in return, play the most effective
              role shaping our success.
            </ListItem>
          </List>
        </VStack>
      </VStack>

      <People />
      <VStack
        spacing={"0"}
        bgImage="../../aboutus1.webp"
        bgPos={"100% 50%"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <VStack
          bg="#1E4717B2"
          spacing="3.12rem"
          w="full"
          px={["1.5rem", "3rem", "6rem"]}
          py="5rem"
        >
          <VStack spacing={"1.25rem"} align={"start"}>
            <Heading
              fontSize={["2rem", "2.25rem", "2.25rem"]}
              color="prim2"
              as="h3"
              fontWeight={"700"}
              textTransform={"uppercase"}
              letterSpacing={"0.25rem"}
              lineHeight={"normal"}
            >
              Because Nature needs something in return
            </Heading>
            <Text
              fontSize={["1rem", "2rem", "2rem"]}
              fontWeight={"400"}
              color={"white"}
            >
              At our best, we inspire people from homes to cities to every kind
              of business to do the right things the right way through our
              ethical And eco-friendly business practices.
            </Text>
          </VStack>
          <List spacing={"3.2rem"} w="full">
            <ListItem
              fontSize={["1rem", "1.5rem", "1.5rem"]}
              color="white"
              fontWeight={"400"}
              display={"flex"}
              w="full"
              gap={["0.5rem", "1rem", "1.5rem"]}
            >
              <ListIcon as={FaCheck} color="prim2" pos="relative" top="0.5ch" />
              We don’t just serve alternative fuels; we serve a better future.
            </ListItem>
            <ListItem
              fontSize={["1rem", "1.5rem", "1.5rem"]}
              color="white"
              fontWeight={"400"}
              display={"flex"}
              w="full"
              gap={["0.5rem", "1rem", "1.5rem"]}
            >
              <ListIcon as={FaCheck} color="prim2" pos="relative" top="0.5ch" />
              Using waste that cannot be recycled as an energy source is a way
              to reduce the amount that is sent to landfill.
            </ListItem>
          </List>
        </VStack>
      </VStack>
      <VStack
        spacing="3.12rem"
        w="full"
        px={["1.5rem", "3rem", "6rem"]}
        py="5rem"
      >
        <VStack spacing={"1.25rem"} align={"center"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            our awards
          </Heading>
          <Heading
            fontSize={["2rem", "2.25rem", "2.25rem"]}
            color="black"
            as="h3"
            fontWeight={"600"}
            lineHeight={"normal"}
          >
            Recognized Excellence
          </Heading>
        </VStack>
        <List spacing={"3.2rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.5rem", "1.5rem"]}
            color="text"
            fontWeight={"400"}
            display={"flex"}
            gap="1rem"
            w="full"
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color="#009D56"
              pos="relative"
              top="0.5ch"
            />
            In 2018, BioEnergy has been awarded with an honorary Alternative
            Fuel Award (AFA) by Lechtenberg& Partner at the 5th Alternative
            Fuels Symposium.
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.5rem", "1.5rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            color="text"
            gap="1rem"
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color="#009D56"
              pos="relative"
              top="0.5ch"
            />
            BioEnergy has been recognized as one of the fastest growing company
            worldwide in the alternative fuels field for the project “Waste,
            Fueling the Future of Pyroprocess”.
          </ListItem>
        </List>
      </VStack>
    </>
  );
}

