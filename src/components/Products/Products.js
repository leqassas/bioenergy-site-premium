import {
  Flex,
  VStack,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  chakra,
  Image,
} from "@chakra-ui/react";
import SPSection from "../SPSection";
import SSSection from "../Services/SSection";

import { BsDot } from "react-icons/bs";

export default function Products() {
  return (
    <VStack spacing={"0"} w="full">
      {/* 1 */}
      <SPSection
        head={"Alternative Fuels"}
        img={"../prod/rdf.webp"}
        link="rdf"
        whiteBg
        headColor={"black"}
      >
        <VStack spacing={"1.25rem"} align={"start"} w="full">
          <Heading
            as="h3"
            color={"prim"}
            fontSize={["2rem", "2.25rem", "2rem"]}
          >
            RDF
          </Heading>
          <Text color="text" fontSize={["1rem", "1.2rem", "1.2rem"]}>
            RDF stands for Refuse-Derived Fuel, an alternative fuel produced
            from municipal solid waste (MSW) and industrial waste, which
            includes biodegradable materials such as cardboard, labels, and
            other corrugated materials.{" "}
          </Text>
          <Text color="text" fontSize={["1rem", "1.2rem", "1.2rem"]}>
            Compared to fossil fuels, RDF is more affordable and environmentally
            friendly, since it is approximately 20-30% cheaper than fossil fuel
            and emits 40% less CO2 compared to coal, which is the most common
            fuel used by the cement industry in Egypt.
          </Text>
        </VStack>
        <VStack spacing={"1.25rem"} align={"start"} w="full">
          <Heading
            as="h3"
            color={"prim"}
            fontSize={["2rem", "2.25rem", "2rem"]}
          >
            MBF
          </Heading>
          <Text color={"text"} fontSize={["1rem", "1.2rem", "1.2rem"]}>
            Main Burner Fuel is a high-quality alternative to fossil fuel,
            primarily produced from commercial waste, including paper,
            cardboard, wood, textiles, and plastic.
          </Text>
        </VStack>
      </SPSection>
      {/* 2 */}
      <SPSection
        head={"Organic Fertilizers"}
        txt={
          "Following the production of alternative fuels, we utilize the remaining organic waste to produce organic fertilizers through microbial decomposition."
        }
        img={"../prod/natural.webp"}
        link="organic"
        reverse
      >
        <List spacing={"3.12rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim2"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              Organic fertilizers contain a full spectrum of plant nutrients,
              including macro and micronutrients.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim2"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              This aids in buffering the soil and optimizing the pH level to
              maximize nutrient availability for plants, moreover, organic
              fertilizers play a role in preventing soil erosion and controlling
              diseases.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 3 */}

      <SPSection
        head={"Recyclables"}
        txt={
          "Discover our commitment to sustainability through our Recyclables division. "
        }
        img={"../prod/rec.webp"}
        link="rec"
        whiteBg
        headColor={"black"}
      >
        <List spacing={"1.25rem"} w="full" color="text">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text fontWeight={"400"} w="full">
              At BioEnergy, we believe in recycling material, not just ideas.
              With our motto "Recycle the present to save the future," we are
              dedicated to preserving the environment for generations to come.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text fontWeight={"400"} w="full">
              This aids in buffering the soil and optimizing the pH level to
              maximize nutrient availability for plants, moreover, organic
              fertilizers play a role in preventing soil erosion and controlling
              diseases.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text fontWeight={"400"} w="full">
              Our Recyclables division focuses on processing a variety of
              materials, including metals such as aluminum and iron, plastics
              including PET, HDPE, LDPE, PP, and glass.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 4 */}
      <SPSection
        head={"r-PET Granules"}
        txt={
          "At Bio Energy, we take the lead in collecting and sorting PET bottles and containers, transforming them into high-quality recycled PET (r-PET) flakes and pellets."
        }
        img={"../prod/rpet.webp"}
        link="rpet"
        reverse
      >
        <List spacing={"3.12rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim2"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              These r-PET granules serve as a sustainable alternative to primary
              plastics, ideal for the production of new packaging materials and
              various consumer products.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim2"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              By recycling PET, we actively contribute to the reduction of
              plastic waste in landfills and oceans, paving the way for a
              cleaner environment.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 5 */}
      <SPSection
        head={"Steel Slag"}
        txt={
          "Bio Energy offers high-quality treated steel slag ,a versatile material with applications across multiple industries. "
        }
        img={"../prod/steel.webp"}
        link="steel"
        whiteBg
        headColor={"black"}
      >
        <VStack w={"full"} spacing={"1.25rem"} align={"start"}>
          <Heading
            fontSize={["1.2rem", "1.5rem", "2rem"]}
            fontWeight={"600"}
            color="prim"
          >
            Our treated steel slag is designed for use in:
          </Heading>
          <List spacing={"1.25rem"} w="full" color="text">
            <ListItem
              fontSize={["1rem", "1.2rem", "1.2rem"]}
              fontWeight={"400"}
              display={"flex"}
              w="full"
              gap={"0.5rem"}
            >
              <ListIcon
                transform={"scale(3)"}
                as={BsDot}
                color={"prim"}
                pos="relative"
                top={[
                  "calc(0.5rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                ]}
                fontSize={["1rem", "1.2rem", "1.2rem"]}
              />
              <Text fontWeight={"400"} w="full">
                <chakra.span fontWeight={"700"}>Cement Production:</chakra.span>{" "}
                Enhances the properties of cement by improving its strength and
                durability.
              </Text>
            </ListItem>
            <ListItem
              fontSize={["1rem", "1.2rem", "1.2rem"]}
              fontWeight={"400"}
              display={"flex"}
              w="full"
              gap={"0.5rem"}
            >
              <ListIcon
                as={BsDot}
                color={"prim"}
                transform={"scale(3)"}
                pos="relative"
                top={[
                  "calc(0.5rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                ]}
                fontSize={["1rem", "1.2rem", "1.2rem"]}
              />
              <Text fontWeight={"400"} w="full">
                <chakra.span fontWeight={"700"}>Construction:</chakra.span>{" "}
                Serves as an effective aggregate in road building and other
                construction projects, offering both stability and
                sustainability.
              </Text>
            </ListItem>
            <ListItem
              fontSize={["1rem", "1.2rem", "1.2rem"]}
              fontWeight={"400"}
              display={"flex"}
              w="full"
              gap={"0.5rem"}
            >
              <ListIcon
                as={BsDot}
                color={"prim"}
                transform={"scale(3)"}
                pos="relative"
                top={[
                  "calc(0.5rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                  "calc(0.6rem - 0.5ch)",
                ]}
                fontSize={["1rem", "1.2rem", "1.2rem"]}
              />
              <Text fontWeight={"400"} w="full">
                <chakra.span fontWeight={"700"}>Painting:</chakra.span> Acts as
                a component in paint formulations, providing improved texture
                and finish.
              </Text>
            </ListItem>
          </List>
        </VStack>
      </SPSection>
    </VStack>
  );
}
