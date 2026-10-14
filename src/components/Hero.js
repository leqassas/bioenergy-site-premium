import {
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  useMediaQuery,
  chakra,
  SkeletonText,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import NextLink from "next/link";
import { Sen } from "next/font/google";
const sen = Sen({ subsets: ["latin"], weight: ["700"] });

const Fact = ({ img, text, count }) => {
  return (
    <VStack flex="1" pos={"relative"} bottom={"1.5rem"}>
      <Image
        src={img}
        w={"full"}
        maxW={["1.5rem", "2rem", "2.3rem"]}
        h={["1.5rem", "2rem", "2.3rem"]}
      />
      <Flex
        flexDir="column"
        justifyContent={"center"}
        fontFamily={sen.style.fontFamily}
      >
        {count ? (
          <Heading
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={["0.8rem", "0.8rem", "1.2rem", "1.5rem"]}
          >
            {count}
          </Heading>
        ) : (
          <Center w="full" my="0.2rem">
            <Spinner size={"md"} borderWidth={"3px"} />
          </Center>
        )}
        <Text
          textAlign={"center"}
          fontWeight={"normal"}
          fontSize={["0.6rem", "0.7rem", "1rem", "1.2rem"]}
          whiteSpace={"nowrap"}
          wordBreak={"keep-all"}
        >
          {text}
        </Text>
      </Flex>
    </VStack>
  );
};

export default function Hero({ page, bg, heading, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isNotMobile] = useMediaQuery("(min-width: 1500px)");
  const [result, setResult] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbySy_RWmBNa5AF-9S1nH_MeR51xmZRRwabAIToBJWNaxQlOTYguqA3uQ1dB9jq8x2Qy/exec"
        );
        const { data } = await res.json();
        setResult(data[0] || { energy: "100", waste: "200", employees: "50" });
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setResult({ energy: "100", waste: "200", employees: "50" });
      }
    };

    fetchData();
  }, []);
  return (
    <Flex
      pos={"relative"}
      bgImage={bg}
      bgColor={bg}
      minH={page !== "home" ? "60svh" : "100svh"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      zIndex="docked"
    >
      <Flex
        pos={"relative"}
        bg={
          "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.60) 100%)"
        }
        top="0"
        w={"full"}
        minH={page !== "home" ? "60svh" : "100svh"}
        alignItems={"center"}
        justifyContent={"center"}
        px={["1.2rem", "2.75rem", "3.75rem"]}
      >
        <Flex
          flexDir={"column"}
          align={["center", "center", page === "slide" ? "start" : "center"]}
          justify={"center"}
          gap="1rem"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: page !== "slide" ? true : false }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              textAlign={"center"}
              fontSize={["2.4rem", "2.4rem", "4rem"]}
              whiteSpace={["pre-line", "pre-line", "pre-line", "normal"]}
              sx={{
                "@media screen and (max-height: 620px)": {
                  fontSize: "2.5rem",
                },
              }}
              fontWeight={"600"}
              textTransform={page === "home" ? "uppercase" : "capitalize"}
            >
              {heading}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: page !== "slide" ? true : false }}
            transition={{ duration: 0.5 }}
          >
            {text && (
              <Text
                textAlign={[
                  "center",
                  "center",
                  page === "slide" ? "left" : "center",
                ]}
                fontSize={"1.5rem"}
                fontWeight={"300"}
                textTransform={"capitalize"}
                maxW={"full"}
                sx={{
                  "@media screen and (max-height: 620px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                {text}
              </Text>
            )}
          </motion.div>
          {page === "home" && (
            <Button
              w="full"
              maxW={"13.75rem"}
              h={"3.2rem"}
              variant={"none"}
              border={"0px solid #FFD850"}
              bg="prim2"
              mt="3.85rem"
              color="textPrim"
              rounded={"full"}
              as={NextLink}
              transition={"all 0.3s ease"}
              href="/about"
              sx={{
                "@media screen and (max-height: 620px)": {
                  mt: "2.5rem",
                  display: "none",
                },
              }}
              _hover={{
                color: "prim2",
                bg: "blackAlpha.200",
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              EXPLORE MORE
            </Button>
          )}
          {page === "home" && (
            <Flex
              pos="absolute"
              bottom={"0"}
              w={["90vw", "90vw", "50rem"]}
              px={["1.2rem", "2.75rem", "2.75rem", "2.75rem"]}
              minH={["7rem", "9rem", "9.5rem", "9.5rem"]}
              bg="rgba(0, 0, 0, 0.29)"
              borderTopRadius={"2rem"}
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              backdropFilter="blur(4.8px)"
              border="1.5px solid rgba(0, 0, 0, 0.2)"
              alignItems={"end"}
              justifyContent={"space-between"}
              ref={ref}
              sx={{
                "@media screen and (max-height: 620px)": {
                  minH: "9rem",
                },
              }}
            >
              <Fact
                img={"bolt 1.svg"}
                count={
                  isInView &&
                  result.energy && (
                    <>
                      <CountUp decimal="," end={parseInt(result.energy)} />{" "}
                      <chakra.span fontSize={"0.7rem"}>Gcal</chakra.span>
                    </>
                  )
                }
                text={<>Energy generated</>}
              />
              <Fact
                img={"toxic-waste 1.svg"}
                count={
                  isInView &&
                  result.waste && (
                    <>
                      <CountUp decimal="," end={parseInt(result.waste)} />{" "}
                      <chakra.span fontSize={"0.7rem"}>Tons</chakra.span>
                    </>
                  )
                }
                text={<>Waste processed</>}
              />
              <Fact
                img={"employee-removebg-preview 1.svg"}
                count={
                  isInView &&
                  result.employees && (
                    <CountUp end={parseInt(result.employees)} duration={2} />
                  )
                }
                text={<>Qualified Employees</>}
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

