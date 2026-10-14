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
  Heading,
  Flex,
  useToast,
} from "@chakra-ui/react";

import { BsPerson, BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function JoinForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef2 = useRef(null);
  const toast = useToast();

  function onSubmit(values) {
    const PromiseToast = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbxxbNuWpeAL4v9zt-LN2CCXZjzymRgRIgLjUKOzB7mR8W_1aw4pOZeIcsBL8sv6DgJ0/exec",
          { method: "POST", body: new FormData(formRef2.current) }
        );
        if (res.ok) {
          formRef2.current?.reset();
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
      ref={formRef2}
      w={"full"}
      onSubmit={handleSubmit(onSubmit)}
      align="center"
      justify="center"
      px={["1.5rem", "3rem", "6rem"]}
      py="5rem"
      gap="0.5rem"
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
          Join Us
        </Heading>
        <Heading
          fontSize={["1.2rem", "1.5rem", "2rem", "2.5rem"]}
          color={"black"}
          as="h3"
          fontWeight={"700"}
          textTransform={"capitalize"}
          lineHeight={"normal"}
        >
          Build Your Career With Us
        </Heading>
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
                size="md"
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
        <Flex
          w="full"
          gap="1.75rem"
          align={"center"}
          flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <FormControl isInvalid={errors.mail}>
            <InputGroup>
              <Input
                id="mail"
                type="email"
                size="md"
                placeholder="Email Address"
                borderColor="#E2E1E3"
                borderWidth={"2px"}
                rounded="2rem"
                {...register("mail", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
          <FormControl isInvalid={errors.job}>
            <InputGroup>
              <Input
                id="job"
                placeholder="Job Title"
                type="text"
                borderColor="#E2E1E3"
                borderWidth={"2px"}
                size="md"
                rounded="2rem"
                {...register("job", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                aria-invalid={errors.job ? "true" : "false"}
              />
            </InputGroup>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.job && errors.job.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl isInvalid={errors.phone}>
          <InputGroup>
            <Input
              id="phone"
              type="tel"
              borderColor="#E2E1E3"
              borderWidth={"2px"}
              size="md"
              rounded="2rem"
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

        <FormControl isInvalid={errors.msg}>
          <Textarea
            id="msg"
            borderColor="#E2E1E3"
            borderWidth={"2px"}
            minH="8.7rem"
            rounded="1.875rem"
            py="1.25rem"
            px="1.88rem"
            _hover={{
              borderColor: "gray.400",
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
        <Flex w="full" justify="flex-end">
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
            Send Request
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
}
