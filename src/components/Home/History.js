import {
  Divider,
  Heading,
  Text,
  Button,
  VStack,
  chakra,
  Circle,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { MBox } from "@/styles/Motion";
import NextLink from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function History() {
  const ChakraSwiper = chakra(Swiper);
  const [isNotMobile] = useMediaQuery("(min-width: 1200px)");
  const YearComponent = ({ year, desc, reversed }) =>
    !reversed ? (
      <VStack
        w="full"
        spacing={"1.25rem"}
        position={"relative"}
        h="25rem"
        maxH="25rem"
      >
        <Center w="full" minH="8rem" h="8rem" maxH="8rem">
          <Text
            w="full"
            fontSize={"0.9rem"}
            color="white"
            textAlign={"center"}
            pt="1.5rem"
          >
            {desc}
          </Text>
        </Center>
        <Center w="full" pos={"relative"} h="7rem" maxH="7rem">
          <Divider
            orientation="vertical"
            pos="relative"
            borderWidth={"1px"}
            color={"white"}
            opacity={"1"}
          />
          <Divider
            position={"absolute"}
            bottom={"0"}
            borderWidth={"1px"}
            color={"white"}
            opacity={"1"}
          />

          <Circle
            boxSize={"30px"}
            bg="none"
            rounded="full"
            border="2px solid white"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            bottom={"-14px"}
            opacity={"1"}
          />
          <Circle
            boxSize={"16px"}
            bg="white"
            rounded="full"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            bottom={"-7px"}
            opacity={"1"}
          />
          <Circle
            boxSize={"8px"}
            bg="white"
            rounded="full"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            top={"-3px"}
            opacity={"1"}
          />
        </Center>

        <Heading fontSize={"3rem"} color="prim2">
          {year}{" "}
        </Heading>
      </VStack>
    ) : (
      <VStack
        w="full"
        spacing={"1.25rem"}
        position={"relative"}
        flexDir={"column-reverse"}
        h="25rem"
        maxH="25rem"
        top="calc(18% + 0.1px)"
      >
        <Center w="full" minH="8rem" h="8rem" maxH="8rem">
          <Text
            w="full"
            fontSize={"0.9rem"}
            pb="1.5rem"
            color="white"
            textAlign={"center"}
          >
            {desc}
          </Text>
        </Center>
        <Center w="full" pos={"relative"} h="7rem" maxH="7rem">
          <Divider
            orientation="vertical"
            pos="relative"
            borderWidth={"1px"}
            color={"white"}
            opacity={"1"}
          />
          <Divider
            position={"absolute"}
            top={"0"}
            borderWidth={"1px"}
            color={"white"}
            opacity={"1"}
          />

          <Circle
            boxSize={"30px"}
            bg="none"
            rounded="full"
            border="2px solid white"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            top={"-14px"}
            opacity={"1"}
          />
          <Circle
            boxSize={"16px"}
            bg="white"
            rounded="full"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            top={"-7px"}
            opacity={"1"}
          />
          <Circle
            boxSize={"8px"}
            bg="white"
            rounded="full"
            position={"absolute"}
            left="50%"
            transform={"translateX(-50%)"}
            bottom={"-3px"}
            opacity={"1"}
          />
        </Center>

        <Heading fontSize={"3rem"} color="prim2">
          {year}{" "}
        </Heading>
      </VStack>
    );

  const data = [
    {
      year: "2015",
      text: "BioEnergy was considered as a local cement industry supplier, providing biomass as a fossil fuel substitute.",
    },
    {
      year: "2016",
      text: "BioEnergy Entered RDF Market BioEnergy penetrated the RDF Market in Morocco & KSA",
    },
    {
      year: "2017",
      text: "BioEnergy became the operator of MENA's largest RDF facility owned by Heidelberg Cement Group",
    },
    {
      year: "2018",
      text: "BioEnergy has been awarded by El Minya Governorate for the management El Edwa Waste Management Facility.",
    },
    {
      year: "2019",
      text: "BioEnergy has been awarded by the biggest landfill and transfer stations in Egypt (Shabramant and Abu Rawash) waste managment facilities.",
    },
    {
      year: "2020",
      text: "BioEnergy has been awarded by the Aswan Governorate to manage the municipal solid waste collection utilizing our fleet to operate the collection process.",
    },
    {
      year: "2021",
      text: "BioEnergy installed a new shredding line at Abis MRF Facility joining hands with Nahdet Masr to double its production capacity.",
    },
    {
      year: "2022",
      text: "BioEnergy expanded its business by penetrating the recycling industry by supplying R-PET flakes & granules.",
    },
    {
      year: "2023",
      text: "BioEnergy expanded its business portfolio by becoming the first company in Egypt to supply steel slag. Additionally, BioEnergy commenced operations at the Arab Abu Saad shredding facility.",
    },
  ];
  const [year, setYear] = useState(data[0].year);

  return (
    <VStack pos={"relative"} spacing={"0"}>
      <MBox
        display={"flex"}
        flexDir={"column"}
        bg="white"
        px={["1.5rem", "3rem", "6rem"]}
        py="5rem"
        gap="1.56rem"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Heading
          textTransform={"uppercase"}
          fontSize={"2rem"}
          as="h2"
          fontWeight={"700"}
          color="prim"
          letterSpacing={"0.25rem"}
        >
          Who We Are
        </Heading>
        <Heading
          fontSize={["1.5rem", "2rem", "2.25rem"]}
          fontWeight={["500", "500", "600"]}
          color="black"
          as="h3"
          lineHeight={"normal"}
        >
          BioEnergy is recognized as one of the leading companies worldwide
          specially in the MENA region in the recycling and alternative fuels
          fields for its project “Waste, Fueling the Future”.
        </Heading>
        <Text
          fontSize={["1rem", "1rem", "1.5rem"]}
          fontWeight={"400"}
          color={"text"}
        >
          BioEnergy has been acquired by (TGI) The Green Innovation is a
          Netherlands-based company which is specialized in sustainable
          solutions for waste management and energy production.
        </Text>
        <Button
          w={["9.75rem", "9.75rem", "11.75rem"]}
          h={["3rem", "3rem", "3.5rem"]}
          variant={"none"}
          bg="transparent"
          color="black"
          rounded={"full"}
          border={"2px solid var(--chakra-colors-prim)"}
          as={NextLink}
          href="/about"
          _hover={{
            bg: "prim",
            color: "white",
          }}
        >
          Read More
        </Button>
      </MBox>
      <VStack
        bg="prim"
        px={["1.5rem", "3rem", "6rem"]}
        py="5rem"
        w="full"
      >
        <MBox
          display={"flex"}
          flexDir={"column"}
          gap="1.56rem"
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"2rem"}
            as="h2"
            color="prim2"
            fontWeight={"700"}
            letterSpacing={"0.25rem"}
          >
            HISTORY & MILESTONES
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.25rem"]}
            fontWeight={["500", "500", "600"]}
            as="h3"
            lineHeight={"normal"}
            color="white"
          >
            A look back at our path to transform the way we do business
          </Heading>
          <Text
            fontSize={["1rem", "1.5rem", "1.5rem"]}
            fontWeight={"300"}
            color={"white"}
          >
            Bio Energy was founded in Egypt as a direct response to a problem
            encountered by the country in 2013, due to the rising of the
            economic crisis and the law that states no fuel subsidies for
            the Energy Intensive Industries. The massive increase of the cost of
            production of 150% was the start of new adaptive strategy of the
            cement industry to cope up with the situation.
          </Text>
          <Heading
            fontSize={"2.25rem"}
            color="white"
            as="h3"
            fontWeight={"600"}
            lineHeight={"normal"}
            mt="1rem"
          >
            Pioneering Sustainable Solutions from{" "}
            <chakra.span color="prim2">2015 till present</chakra.span>
          </Heading>
          <ChakraSwiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={isNotMobile ? 3 : 1}
            w="full"
            spaceBetween={0}
            h="34rem"
            maxH="34rem"
            my="2rem"
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            gap="0"
            sx={{
              ".swiper-pagination-bullet-active": {
                backgroundColor: "prim2",
              },
              ".swiper-scrollbar-drag": {
                backgroundColor: "prim2",
                rounded: "full",
                border: "4px solid white",
              },
              ".swiper-scrollbar": {
                backgroundColor: "white",
                rounded: "full",
                overflow: "hidden",
                transform: "translateX(-50%)",
                left: "50%",
                maxW: "25vh",
                h: "1.2rem",
              },

              ".swiper-button-prev": {
                color: "prim",
              },
              ".swiper-button-next": {
                color: "prim",
              },
            }}
          >
            {data.map((i, index) => (
              <SwiperSlide key={i.year}>
                <YearComponent
                  year={i.year}
                  reversed={isNotMobile && index % 2 !== 0}
                  desc={i.text}
                />
              </SwiperSlide>
            ))}
          </ChakraSwiper>
        </MBox>
      </VStack>
    </VStack>
  );
}

