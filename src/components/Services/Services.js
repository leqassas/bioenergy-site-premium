import {
  Flex,
  VStack,
  Icon,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  chakra,
} from "@chakra-ui/react";
import SPSection from "../SPSection";
import { MdRocketLaunch } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import SSSection from "./SSection";

import { FaCheck } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

export default function Services() {
  return (
    <VStack spacing={"0"} w="full">
      {/* 1 */}
      <SPSection
        head={"Technical Consultancy for AFR businesses"}
        txt={
          "Out of integrating alternative fuels into the energy mix, industries can facilitate a transition to lower carbon emissions that is both economically viable and commercially attractive."
        }
        img={"../serv/tech-min.webp"}
        link="afr"
      >
        <Flex
          w="full"
          align={"start"}
          justify={"center"}
          gap={["1rem", "1rem", "1rem", "1rem", "2rem"]}
          flexWrap={["wrap", "wrap", "nowrap"]}
          pt="calc(3.12rem - 1.8rem)"
        >
          <VStack align={"start"} color="white" spacing={"1.25rem"} w="full">
            <Icon as={MdRocketLaunch} boxSize={"3rem"} />
            <Heading fontSize={"1.2rem"}>
              Accelerate the adoption of cleaner energy sources
            </Heading>
            <Text fontSize={"1rem"}>
              Bio Energy offers technical consulting services to cement
              companies seeking to incorporate alternative fuels into their
              energy mix.
            </Text>
          </VStack>
          <VStack align={"start"} color="white" spacing={"1.25rem"} w="full">
            <Icon as={MdContactSupport} boxSize={"3rem"} />
            <Heading fontSize={"1.2rem"}>
              Our team provides comprehensive guidance and support
            </Heading>
            <Text fontSize={"1rem"}>
              to implement the necessary AF facilities tailored to the specific
              needs of each customer.
            </Text>
          </VStack>
        </Flex>
      </SPSection>
      {/* 2 */}
      <SPSection
        head={"Turnkey Alternative Fuel Facility"}
        txt={
          "As part of our commitment to providing sustainable solutions, Bio Energy offers a comprehensive service to support industries in establishing Alternative Fuel facilities."
        }
        img={"../serv/turnkey-min.webp"}
        link="turnkey"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <List w="full" pt="calc(3.12rem - 1.8rem)">
          <ListItem fontWeight={"400"} display={"flex"} w="full" gap={"0.5rem"}>
            <ListIcon
              as={FaCheck}
              color={"prim"}
              pos="relative"
              top="calc(0.75rem - 0.5ch)"
              fontSize={"1.5rem"}
            />
            <VStack align="start">
              <Heading color={"prim"} fontWeight={"600"} fontSize={"1.5rem"}>
                End-to-End Construction and Equipment Support
              </Heading>
              <Text
                color={"text"}
                fontSize={["1rem", "1.2rem", "1.2rem"]}
                fontWeight={"400"}
              >
                We provide all necessary equipment and oversee the construction
                process from start to finish, ensuring seamless implementation
                and operation of these facilities.
              </Text>
            </VStack>
          </ListItem>
        </List>
      </SPSection>
      {/* 3 */}

      <SPSection
        head={"Steel Slag Treatment"}
        txt={
          "Introducing our innovative steel slag recycling solution at Bio Energy, designed to transform industrial  waste into valuable resources. "
        }
        img={"../serv/steel-min.webp"}
        link="steel"
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
              We provide all necessary equipment and oversee the construction
              process from start to finish, ensuring seamless implementation and
              operation of these facilities.
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
              Choose Bio Energy's steel slag treatment service to contribute to
              a greener future while benefiting from our expertise in
              transforming industrial by-products into valuable assets.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 4 */}
      <SPSection
        head={"Zero Waste Service"}
        txt={`In response to the significant challenges and as part of our commitment to environmental stewardship, Bio Energy offers a "Zero Waste/Incineration" service.`}
        img={"../serv/zero-min.webp"}
        link="zero"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <VStack align={"start"} spacing={"1.8rem"}>
          <Text
            fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem"]}
            color={"text"}
            w="full"
          >
            We assist highly waste-producing industrial facilities in
            responsibly managing their waste in economically viable ways.
          </Text>
          <Text
            fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem"]}
            color={"text"}
            w="full"
          >
            Our service ensures the efficient incineration of various types of
            waste, including hazardous materials.
          </Text>
        </VStack>
      </SPSection>
      {/* 5 */}
      <SPSection
        head={"Operation and Maintenance of Landfills"}
        txt={
          "Bio Energy specializes in the operation and maintenance of landfills, ensuring efficient waste management processes from sorting to recycling and composting."
        }
        img={"../serv/operation-land-min.webp"}
        link="landfills"
      >
        <VStack
          spacing={"1.8rem"}
          w="full"
          align={"start"}
          color="white"
          pt="calc(3.12rem - 1.8rem)"
        >
          <Heading
            as="h3"
            fontSize={["1.2rem", "1.2rem", "1.5rem"]}
            fontWeight={"700"}
            color="prim2"
          >
            Comprehensive Services:
          </Heading>
          <Text fontSize={["1rem", "1.2rem", "1.2rem"]} fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Effective Operations:</chakra.span>
             We oversee the operation of landfills, managing waste treatment
            processes to optimize efficiency
          </Text>
          <Text fontSize={["1rem", "1.2rem", "1.2rem"]} fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Maintenance Expertise:</chakra.span>
             Our team conducts regular maintenance work to uphold the
            functionality and safety of landfills.
          </Text>
          <Text fontSize={["1rem", "1.2rem", "1.2rem"]} fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Waste Treatment:</chakra.span> We
            handle all aspects of waste treatment, including sorting, recycling,
            and composting, to minimize environmental impact.
          </Text>
        </VStack>
      </SPSection>
      {/* 6 */}
      <SPSection
        head={"Operation and Maintenance of waste management Plants"}
        img={"../serv/operation-plants-min.webp"}
        link="plants"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <VStack
          spacing={"1.8rem"}
          fontSize={["1rem", "1.2rem", "1.2rem"]}
          w="full"
          align={"start"}
          color="text"
          pt="calc(3.12rem - 1.8rem)"
        >
          <Text fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Tailored Solutions: </chakra.span>
             Whether you're a local authority or a private company, we have the
            experts and resources to manage your plant efficiently.
          </Text>
          <Text fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>
              Long-Term Performance: 
            </chakra.span>
             Through proactive maintenance strategies and continuous monitoring,
            we ensure that your plant operates optimally, minimizing downtime
            and maximizing productivity.
          </Text>
          <Text fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Technical Expertise: </chakra.span>
             We With about 10 years of experience in the field, our team
            possesses unparalleled technical expertise in waste management
            operations.
          </Text>
          <Text fontWeight={"400"}>
            <chakra.span fontWeight={"700"}>Flexible Contracts:  </chakra.span>
             We Our goal is to provide you with a solution that meets your
            specific requirements and budget.
          </Text>
        </VStack>
      </SPSection>

      {/* <PSCard
        type={"s"}
        img={"../serv/tech-min.webp"}
        head={"Technical Consultancy for AFR businesses"}
        link={"/"}
        btn={
          <Button
            w={["9.75rem", "9.75rem", "11.75rem"]}
            h={["3rem", "3rem", "3.5rem"]}
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            as={NextLink}
            href="/services/Technical Consultancy for AFR businesses"
            _hover={{
              transform: "scale(1.05)",
            }}
            pos={"absolute"}
            bottom="3rem"
          >
            Learn More
          </Button>
        }
      />
      <PSCard
        type={"s"}
        img={"../serv/turnkey-min.webp"}
        head={"Turnkey Alternative Fuel Facilty"}
        link={"/"}
        btn={
          <Button
            w={["9.75rem", "9.75rem", "11.75rem"]}
            h={["3rem", "3rem", "3.5rem"]}
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            as={NextLink}
            href="/services/Turnkey Alternative Fuel Facilty"
            _hover={{
              transform: "scale(1.05)",
            }}
            pos={"absolute"}
            bottom="3rem"
          >
            Learn More
          </Button>
        }
      />
      <PSCard
        type={"s"}
        img={"../serv/zero-min.webp"}
        head={"Zero Waste Service"}
        link={"/"}
        btn={
          <Button
            w={["9.75rem", "9.75rem", "11.75rem"]}
            h={["3rem", "3rem", "3.5rem"]}
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            as={NextLink}
            href="/services/Zero Waste Service"
            _hover={{
              transform: "scale(1.05)",
            }}
            pos={"absolute"}
            bottom="3rem"
          >
            Learn More
          </Button>
        }
      />
      <PSCard
        type={"s"}
        img={"../serv/operation-land-min.webp"}
        head={"Operation and Maintenance of Landfills"}
        link={"/"}
        btn={
          <Button
            w={["9.75rem", "9.75rem", "11.75rem"]}
            h={["3rem", "3rem", "3.5rem"]}
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            as={NextLink}
            href="/services/Operation and Maintenance of Landfills"
            _hover={{
              transform: "scale(1.05)",
            }}
            pos={"absolute"}
            bottom="3rem"
          >
            Learn More
          </Button>
        }
      />
      <PSCard
        type={"s"}
        img={"../serv/operation-plants-min.webp"}
        head={"Operation and Maintenance of Waste management plants"}
        link={"/"}
        btn={
          <Button
            w={["9.75rem", "9.75rem", "11.75rem"]}
            h={["3rem", "3rem", "3.5rem"]}
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            as={NextLink}
            href="/services/Operation and Maintenance of Waste management plants"
            _hover={{
              transform: "scale(1.05)",
            }}
            pos={"absolute"}
            bottom="3rem"
          >
            Learn More
          </Button>
        }
      /> */}
    </VStack>
  );
}
