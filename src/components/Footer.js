import {
  SimpleGrid,
  Text,
  Heading,
  Center,
  Divider,
  Image,
  Stack,
  HStack,
  Icon,
  Input,
  FormControl,
  Button,
  chakra,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { MdPhoneCallback, MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

import { useRef } from "react";
import { useForm } from "react-hook-form";
export default function LargeWithLogoCentered() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef3 = useRef(null);
  const toast = useToast();

  function onSubmit(values) {
    const PromiseToast = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbxZ6QSy1VNjMBHYzU5otoHAEIsFkcLURCjutMjZjoINp-2_OAH4pG-Q0LWSjM_CnfQs8w/exec",
          { method: "POST", body: new FormData(formRef3.current) }
        );
        if (res.ok) {
          formRef3.current?.reset();
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        reject();
      }
    });
    toast.promise(PromiseToast, {
      success: {
        title: "Sent!",
        description: "Sent successfully!",
        duration: 3000,
        isClosable: true,
      },
      error: {
        title: "Failed",
        description: "Something wrong",
        duration: 3000,
        isClosable: true,
      },
      loading: {
        title: "Submitting",
        description: "Please wait",
        duration: 3000,
      },
    });
    return PromiseToast;
  }
  return (
    <>
      {/*footer*/}
      <Center bg="prim" color="white" flexDir={"column"} w="full">
        <Center
          px={["1.5rem", "3rem", "6rem"]}
          py="5.25rem"
          w="full"
        >
          <Flex
            flexDir={["column", "column", "column", "column", "row"]}
            align={"center"}
            justify={"space-between"}
            gap={["4rem", "4rem", "4rem", "4rem", "4rem", "0"]}
            w="full"
          >
            <Stack
              alignItems={"start"}
              justifyContent={"start"}
              spacing={"1.8rem"}
              position={"relative"}
              w="full"
              maxW="26.5rem"
            >
              <Image
                src="/logow.svg"
                alt="logo"
                w="full"
                pos="relative"
                maxW="16.8125rem"
              />

              <Stack spacing={"1rem"}>
                <Heading fontSize={"1.563rem"}>
                  Waste fueling{" "}
                  <chakra.span color="prim2">the future.</chakra.span>
                </Heading>
                <Text
                  fontSize={"1.25rem"}
                  lineHeight={[
                    "normal",
                    "normal",
                    "normal",
                    "normal",
                    "2.5rem",
                  ]}
                  fontWeight={"light"}
                >
                  Based in Egypt and expanding operations in Middle East &
                  Africa.
                </Text>
              </Stack>
            </Stack>

            <Stack
              alignItems={"start"}
              justifyContent={"space-between"}
              w="full"
              maxW="26.5rem"
              minH={["auto", "auto", "13.75rem"]}
              spacing={["1.5rem", "1.5rem", "0"]}
            >
              <Heading
                fontSize={"1.7rem"}
                fontWeight={"600"}
                letterSpacing={"0.25rem"}
                textTransform={"uppercase"}
              >
                Contact Info
              </Heading>
              <HStack spacing={"2rem"}>
                <Icon as={MdPhoneCallback} boxSize={"1.75rem"} color="prim2" />
                <Text fontSize="1.25rem">(+202) 25193640</Text>
              </HStack>
              <HStack spacing={"2rem"}>
                <Icon as={IoIosMail} boxSize={"1.75rem"} color="prim2" />
                <Text fontSize="1.25rem">Info@BioEnergyEgy.com</Text>
              </HStack>
              <HStack spacing={"2rem"}>
                <Icon as={MdLocationPin} boxSize={"1.75rem"} color="prim2" />
                <Text fontSize="1.25rem">
                  Zeini Tower 25 Misr Helwan – Maadi
                </Text>
              </HStack>
            </Stack>
            <Stack
              alignItems={"start"}
              justifyContent={"space-between"}
              w="full"
              maxW="26.5rem"
              minH={["auto", "auto", "13.75rem"]}
              spacing={["1.5rem", "1.5rem", "0"]}
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef3}
            >
              <Heading
                fontSize={"1.7rem"}
                fontWeight={"600"}
                letterSpacing={"0.25rem"}
                textTransform={"uppercase"}
              >
                Newsletter
              </Heading>
              <Text fontSize={"1.2rem"} fontWeight={"light"}>
                Subscribe to our newsletter to get latest news from Bio Energy{" "}
              </Text>
              <FormControl
                display={"flex"}
                flexDir={["column", "row"]}
                gap="1rem"
                alignItems={"center"}
                justifyContent={"center"}
                w="full"
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                  sx={{
                    "::placeholder": {
                      color: "white",
                    },
                  }}
                  color="white"
                  rounded="full"
                  borderColor="prim2"
                  borderWidth="3px"
                  h="3.125rem"
                  w="full"
                />
                <Button
                  p="0.875rem 2.625rem"
                  variant={"none"}
                  bg="prim2"
                  isLoading={isSubmitting}
                  h="3.125rem"
                  w={["full", "auto"]}
                  type="submit"
                  color="textPrim"
                  rounded={"full"}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  Subscribe
                </Button>
              </FormControl>
            </Stack>
          </Flex>
        </Center>
        <Divider />
        <Center w="full" fontSize={["1rem", "1rem", "1.25rem"]}>
          <Text textAlign="center" w="full" py="2.25rem" px="2rem">
            Copyrights © 2023 Bio Energy | Powered by{" "}
            <chakra.span
              as={"a"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                color: "prim2",
              }}
              href="https://vuedigitalsolutions.com"
              target="_blank"
            >
              VUE Digital Solutions
            </chakra.span>
          </Text>
        </Center>
      </Center>
    </>
  );
}
