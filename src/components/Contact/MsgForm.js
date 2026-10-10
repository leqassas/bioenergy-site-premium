import {
  VStack,
  Button,
  FormControl,
  Input,
  InputGroup,
  FormErrorMessage,
  FormErrorIcon,
  InputLeftElement,
  Textarea,
  HStack,
  Heading,
  Text,
  Flex,
  Divider,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { MdPhoneCallback } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

import { BsPerson, BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function MsgForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef1 = useRef(null);
  const toast = useToast();

  function onSubmit(values) {
    const PromiseToast = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzqxNIVfMKk9ft97pU3kqpmyPQ39IcngWGtnCMAel599bB7CPlzrA3bxa4ZiABGfOCVTQ/exec",
          { method: "POST", body: new FormData(formRef1.current) }
        );
        if (res.ok) {
          formRef1.current?.reset();
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
        description: "Your Message has been sent!",
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
    <VStack
      as="form"
      rounded={"1rem"}
      spacing={"1.25rem"}
      w={"full"}
      onSubmit={handleSubmit(onSubmit)}
      align="start"
      ref={formRef1}
      justify="center"
      px={["1.5rem", "3rem", "6rem"]}
      py="5rem"
      gap="1.2rem"
      sx={{
        input: {
          py: "0.75rem",
          px: "1.88rem",
        },
      }}
    >
      <VStack spacing={"1.25rem"} align={"start"} w="full">
        <Heading
          textTransform={"uppercase"}
          fontSize={"2rem"}
          as="h2"
          fontWeight={"700"}
          color={"prim"}
          letterSpacing={"0.25rem"}
        >
          Send A Message
        </Heading>
        <Heading
          fontSize={["1.2rem", "1.5rem", "2rem", "2.5rem"]}
          color={"black"}
          as="h3"
          fontWeight={"700"}
          lineHeight={"normal"}
          textTransform={"capitalize"}
        >
          We’d love to hear from you
        </Heading>
        <Text
          fontSize={["1rem", "1rem", "1.2rem", "1.5rem"]}
          fontWeight={"300"}
          color={"text"}
        >
          Please submit your information and we will get in touch with you
        </Text>
      </VStack>
      <VStack spacing={"1.8rem"} w="full">
        <Flex
          w="full"
          gap="1.75rem"
          align={"center"}
          flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <FormControl isInvalid={errors.firstname}>
            <InputGroup>
              <Input
                id="firstname"
                placeholder="First Name"
                borderColor="#E2E1E3"
                borderWidth={"2px"}
                type="text"
                rounded="2rem"
                {...register("firstname", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                aria-invalid={errors.firstname ? "true" : "false"}
              />
            </InputGroup>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.lastname}>
            <InputGroup>
              <Input
                id="lastname"
                placeholder="Last Name"
                borderColor="#E2E1E3"
                borderWidth={"2px"}
                type="text"
                size="md"
                rounded="2rem"
                {...register("lastname", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                aria-invalid={errors.lastname ? "true" : "false"}
              />
            </InputGroup>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.lastname && errors.lastname.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl isInvalid={errors.phone}>
          <InputGroup>
            <Input
              id="phone"
              type="number"
              size="md"
              rounded="2rem"
              borderColor="#E2E1E3"
              borderWidth={"2px"}
              placeholder="Phone Number"
              {...register("phone", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Phone number must be in correct format",
                },
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.mail}>
          <InputGroup>
            <Input
              id="mail"
              type="email"
              size="md"
              borderColor="#E2E1E3"
              borderWidth={"2px"}
              placeholder="Email Address"
              rounded="2rem"
              {...register("mail", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.mail && errors.mail.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.msg}>
          <Textarea
            id="msg"
            borderColor="#E2E1E3"
            borderWidth="2px"
            minH="8.7rem"
            rounded="1.875rem"
            py="1.25rem"
            px="1.88rem"
            _hover={{
              borderRadius: "gray.300",
            }}
            placeholder="Your Message"
            {...register("msg", {
              required: "Can't be empty",
              minLength: {
                value: 10,
                message: "Minimum length should be 10",
              },
            })}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.msg && errors.msg.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl float="right">
          <Button
            h={"3.125rem"}
            w="full"
            maxW="12rem"
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            type="submit"
            isLoading={isSubmitting}
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            Submit
          </Button>
        </FormControl>
        <VStack w="full" spacing={"1rem"}>
          <HStack w="full" spacing={"1.7rem"}>
            <Divider borderColor={"text"} />
            <Heading
              fontSize={"1rem"}
              fontWeight={"700"}
              color="text"
              whiteSpace={"pre"}
              letterSpacing={"0.125rem"}
            >
              CONTACT INFO
            </Heading>
            <Divider borderColor={"text"} />
          </HStack>
          <Flex
            w="full"
            align={"center"}
            flexWrap={"wrap"}
            justify={"center"}
            gap={["1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem", "2rem"]}
          >
            <HStack spacing={"1.25rem"}>
              <Icon as={MdPhoneCallback} boxSize={"1.75rem"} color="prim" />
              <Text color="text" fontSize={"1.25rem"} fontWeight={"400"}>
                (+202) 25193640
              </Text>
            </HStack>
            <HStack spacing={"1.25rem"}>
              <Icon as={IoIosMail} boxSize={"1.75rem"} color="prim" />
              <Text color="text" fontSize={"1.25rem"} fontWeight={"400"}>
                Info@BioEnergyEgy.com
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </VStack>
    </VStack>
  );
}
