import { VStack, List, Image, chakra, Flex } from "@chakra-ui/react";
import React from "react";
import Project from "./Project";
import Checkpoint from "./Checkpoint";

export default function AllProjects() {
  return (
    <VStack spacing={"0"}>
      {/* 1 */}
      <Project
        head={"Steel Slag Treatment Facility"}
        txt={
          "With an annual capacity of 70,000 tons, this treatment facility is dedicated to processing steel slag, converting it into valuable materials that can be reused in various industrial applications."
        }
        status={"ONGOING"}
        color={"white"}
      >
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"Expansion"}
            text={
              "Since 2023, Bio Energy has expanded into the alternative raw materials market by building and operating a steel slag treatment facility in Arab Abu Saad."
            }
            prim
          />
        </List>
      </Project>
      {/* 2 */}
      <Project
        head={"Shabramant Material Recovery Facility"}
        txt={
          "This facility is designed to segregate MSW into organic fractions, recyclables, and non-recyclable materials. The facility has a monthly production capacity of 3,000 tons of unshredded RDF, which is then transported to the Arab Abu Saad RDF shredding facility for further processing."
        }
        status={"ONGOING"}
        color={"prim"}
      >
        <Image
          w="full"
          alt="Shabramant Material Recovery Facility"
          src="../../projects/Shabramant.jpg"
          rounded="0.625rem"
        />
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"Award"}
            text={
              <>
                Since 2019, Bio Energy was awarded a contract by the Giza
                Governorate to build, operate, and manage the Shabramant Sorting
                Facility, handling{" "}
                <chakra.span fontWeight={"700"}>
                  more than 4,000 tons of municipal solid waste (MSW) per day.
                </chakra.span>
              </>
            }
          />
        </List>
      </Project>
      {/* 3 */}
      <Project
        head={"Arab Abu Saad Shredding Facility"}
        txt={
          "With a monthly production capacity exceeding 4,000 tons, the facility plays a crucial role in the region's waste management and energy production."
        }
        status={"ONGOING"}
        color={"white"}
      >
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"Progress"}
            text={
              "Since 2023, Bio Energy has operated the RDF shredding facility in Arab Abu Saad, designed to convert unshredded RDF from the Shabramant sorting facility into high-quality Refuse-Derived Fuel (RDF)."
            }
            prim
          />
        </List>
      </Project>
      {/* 4 */}
      <Project
        head={"Abiis Facility (Nahdet Misr)"}
        txt={
          "This project was executed in collaboration with Nahdet Misr, forming a joint venture between the two entities, with Nahdet Misr operating the plant that Bio Energy installed."
        }
        status={"ONGOING"}
        color={"prim"}
      >
        <Flex
          w="full"
          align={"center"}
          gap="2.5rem"
          flexWrap={"wrap"}
          justify={"center"}
        >
          <Image
            alt="Abiis Facility (Nahdet Misr)"
            src="../../projects/abiis1.jpeg"
            rounded="0.625rem"
            maxW="31.625rem"
            w="full"
            h="19rem"
            objectFit="cover"
          />
          <Image
            alt="Abiis Facility (Nahdet Misr)"
            src="../../projects/abiis2.jpeg"
            rounded="0.625rem"
            w="full"
            maxW="31.625rem"
            h="19rem"
            objectFit="cover"
          />
          <Image
            alt="Abiis Facility (Nahdet Misr)"
            src="../../projects/abiis3.jpeg"
            rounded="0.625rem"
            w="full"
            maxW="31.625rem"
            h="19rem"
            objectFit="cover"
          />
        </Flex>
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"New Line"}
            text={
              "Since 2021, Bio Energy has installed a new shredding line at the Abiis MRF plant to improve the quality of infeed waste material used in RDF production."
            }
          />
        </List>
      </Project>
      {/* 5 */}
      <Project
        head={"Aswan Waste Collection Management"}
        txt={
          "Utilizing its fleet, Bio Energy began operating the collection process and has successfully collected over 45,000 tons of municipal solid waste."
        }
        status={"Past"}
        color={"white"}
      >
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"Award"}
            text={
              "In 2020, BioEnergy was awarded a contract by the Aswan Governorate to manage municipal solid waste collection."
            }
            prim
          />
        </List>
      </Project>
      {/* 6 */}
      <Project
        head={"El-Edwa waste management facility"}
        txt={
          "The facility is designed to segregate municipal solid waste (MSW) into organic fractions, recyclables, and non-recyclable materials and process the waste to produce compost and alternative fuel. The plant was equipped with a capacity of 500 tons per day."
        }
        status={"Past"}
        color={"prim"}
      >
        <Image
          w="full"
          alt="El-Edwa waste management facility"
          src="../../projects/Minya Plant.jpg"
          rounded="0.625rem"
          h={["16rem", "20rem", "28rem", "32rem"]}
          objectFit="cover"
        />
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"Award"}
            text={
              "In 2018, Bio Energy was awarded a contract by the Minya Governorate to operate and manage the El-Edwa waste management facility."
            }
          />
        </List>
      </Project>

      {/* 7 */}

      <Project
        head={"Kattameya Plant"}
        txt={
          "In 2017, Heidelberg Group-Suez Cement appointed Bio Energy to operate and maintain the Kattameya plant, which has a capacity of 72,000 tons per year."
        }
        status={"Past"}
        color={"white"}
      >
        <Image
          w="full"
          alt="Kattameya Plant"
          src="../../projects/Kattameya Plant.jpg"
          rounded="0.625rem"
          h={["16rem", "20rem", "28rem", "32rem"]}
          objectFit="cover"
        />
        <List spacing={"3.12rem"} w="full">
          <Checkpoint
            head={"New Line"}
            text={
              "Bio Energy enhanced the facility by installing a new line in the transfer station to improve the quality of the infeed waste material used in RDF production."
            }
            prim
          />
          <Checkpoint
            head={"Success"}
            text={
              <>
                Utilizing technology tailored to the social and economic
                conditions of the region, Bio Energy successfully increased the
                calorific value of the RDF from{" "}
                <chakra.span fontWeight="700">3,000 to 4,200 kcal.</chakra.span>
              </>
            }
            prim
          />
        </List>
      </Project>

      {/* <Project
        head={"Minya Plant"}
        text1={"Completed"}
        text2={
          <>
            BioEnergy has been awarded by Minia Governorate to operate and
            manage El-EDWA waste management facility.
            <br />
            The facility has been designed to segregate MSW- Municipal Solid
            Waste in organic fraction, recyclables and non-recyclable materials
            in order to treat the municipal solid waste to produce compost and
            alternative fuel.
            <br />
            <strong>
              The plant has been designed with a capacity of 500 ton/day.
            </strong>
          </>
        }
        img={"../../projects/Minya Plant.jpg"}
      />
      <Project
        head={"Shabramant Material Recovery Facility"}
        text1={"Current"}
        text2={
          <>
            In 2020 BioEnergy has been awarded by the Giza Governorate to build
            , operate and manage the generated Municipal soild waste that
            amounts <strong>4000 tons per day</strong>.
            <br />
            The facility has been designed to segregate MSW- Municipal Solid
            Waste in organic fraction, recyclables and non-recyclable materials
            in order to treat the municipal solid waste to produce compost and
            alternative fue .
          </>
        }
        img={"../../projects/Shabramant.jpg"}
      />
      <Project
        head={"Aswan Waste Collection Management"}
        text1={"Completed"}
        text2={
          <>
            In 2020 BioEnergy has been awarded by the Aswan Governorate to
            manage the municipal solid waste collection utilizing our fleet to
            operate the collection process.
            <br />
            Starting Septmeber 2022, To operate the waste management collection
            tender at Aswan and managed to collect{" "}
            <strong>more than 45,000 tons</strong> of municipal soild waste
            uptill now
          </>
        }
        img={"../../projects/Aswan Waste.jpg"}
      />
      <Project
        head={"Abiis Plant (Nahdet Misr)"}
        text1={"Current"}
        text2={
          <>
            In 2021, BioEnergy installed a new line in a shredding station at
            Abiis MRF plant to increase the quality of the infeed waste material
            used in RDF production.
            <br />
            Joining hands with Nahdet Misr creating a joint venture between the
            two entities as Nahdet Misr will be operator of the plant installed
            by BioEnergy.
          </>
        }
        img={"../../projects/Abiis Plant.jpg"}
      /> */}
    </VStack>
  );
}
