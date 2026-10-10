import {
  Button,
  Flex,
  HStack,
  Stack,
  Box,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import NextLink from "next/link";
import { useRef, useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isNotMobile] = useMediaQuery("(min-width: 1150px)");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      color="white"
      fontSize={"1.2rem"}
      fontWeight={"normal"}
      pos={"fixed"}
      zIndex={"banner"}
      w="full"
      px={["1.2rem", "2.75rem", "3.75rem", "3.75rem"]}
      alignItems={"center"}
      mt={scrolled ? "0" : ["0.8rem", "1rem", "2rem"]}
      bg={scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent"}
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      boxShadow={scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"}
      transition="all 0.4s ease"
      sx={{
        "@media screen and (max-height:620px)": {
          mt: scrolled ? "0" : "0.8rem",
        },
      }}
      h="4.75rem"
      top="0"
      justifyContent={"space-between"}
    >
      <Box as={NextLink} href={"/"} w="full" maxW="15rem">
        <Image
          src="../logow.svg"
          w="full"
          alt="logo"
          maxW={["7.75rem", "7.75rem", "10.75rem", "10.75rem"]}
        />
      </Box>
      {!isNotMobile ? (
        <>
          <Box display={isNotMobile ? "none" : "block"}>
            <Hamburger
              size={"22"}
              toggled={isOpen}
              toggle={isOpen ? onClose : onOpen}
              color={"white"}
            />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            blockScrollOnMount
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                transform={"scale(1.3)"}
                color="white"
                top="2rem"
                right="2rem"
              />
              <DrawerBody
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
                justifyContent={"center"}
                bg="prim"
                color="white"
                h="full"
              >
                <Stack
                  direction={"column"}
                  gap="1rem"
                  textAlign={"start"}
                  alignItems={"start"}
                  justifyContent={"center"}
                  h="full"
                >
                  <Button
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/"
                    onClick={onClose}
                  >
                    Home
                  </Button>
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/about"
                    onClick={onClose}
                  >
                    About Us
                  </Button>
                  <Menu isLazy closeOnBlur>
                    <MenuButton
                      m="0"
                      rightIcon={<RiArrowDropDownLine />}
                      fontWeight={"normal"}
                      as={Button}
                      variant="none"
                    >
                      Products
                    </MenuButton>
                    <MenuList color="black" fontSize={"0.8rem"}>
                      <MenuItem
                        as={NextLink}
                        href={"/products"}
                        onClick={onClose}
                      >
                        All Products
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/products/#rdf"}
                        onClick={onClose}
                      >
                        Alternative Fuels
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/products/#organic"}
                        onClick={onClose}
                      >
                        Organic Fertilizers
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/products/#rec"}
                        onClick={onClose}
                      >
                        Recyclables
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/products/#rpet"}
                        onClick={onClose}
                      >
                        r-PET Granules
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/products/#steel"}
                        onClick={onClose}
                      >
                        Steel Slag Recycling
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu isLazy closeOnBlur>
                    <MenuButton
                      m="0"
                      rightIcon={<RiArrowDropDownLine />}
                      fontWeight={"normal"}
                      as={Button}
                      variant="none"
                    >
                      Services
                    </MenuButton>
                    <MenuList color="black" fontSize={"0.8rem"}>
                      <MenuItem
                        as={NextLink}
                        href={"/services"}
                        onClick={onClose}
                      >
                        All Services
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#afr"}
                        onClick={onClose}
                      >
                        Technical Consultancy for AFR businesses
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#turnkey"}
                        onClick={onClose}
                      >
                        Turnkey Alternative Fuel Facility
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#steel"}
                        onClick={onClose}
                      >
                        Steel Slag Treatment
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#zero"}
                        onClick={onClose}
                      >
                        Zero Waste Service
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#landfills"}
                        onClick={onClose}
                      >
                        Operation and Maintenance of Landfills
                      </MenuItem>
                      <MenuItem
                        as={NextLink}
                        href={"/services/#plants"}
                        onClick={onClose}
                      >
                        Operation and maintenance of <br /> waste management
                        Plants
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  {/* <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/why"
                    onClick={onClose}
                  >
                    Why Us?
                  </Button> */}
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/projects"
                    onClick={onClose}
                  >
                    Projects
                  </Button>
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/contact"
                    onClick={onClose}
                  >
                    Contact Us
                  </Button>
                  <HStack gap="0.2rem" w="full">
                    {/* <Link href="/" target="_blank" as={NextLink}>
                      <IconButton
                        _hover={{
                          transform: "scale(1.2)",
                        }}
                        variant="none"
                        rounded={"full"}
                        icon={<SiTwitter />}
                      />
                    </Link>
                    <Link href="/" target="_blank" as={NextLink}>
                      <IconButton
                        _hover={{
                          transform: "scale(1.2)",
                        }}
                        variant="none"
                        rounded={"full"}
                        icon={<SiFacebook />}
                      />
                    </Link>
                    <Link href="/" target="_blank" as={NextLink}>
                      <IconButton
                        _hover={{
                          transform: "scale(1.2)",
                        }}
                        variant="none"
                        rounded={"full"}
                        icon={<SiInstagram />}
                      />
                    </Link>
                    <Link href="/" target="_blank" as={NextLink}>
                      <IconButton
                        _hover={{
                          transform: "scale(1.2)",
                        }}
                        variant="none"
                        rounded={"full"}
                        icon={<SiYoutube />}
                      />
                    </Link> */}
                    {/* <Link
                      href="https://www.linkedin.com/company/bioenergy-for-alternative-fuel"
                      target="_blank"
                      as={NextLink}
                    >
                      <IconButton
                        _hover={{
                          transform: "scale(1.2)",
                        }}
                        variant="none"
                        rounded={"full"}
                        icon={<SiLinkedin />}
                      />
                    </Link> */}
                    <Link
                      href="https://www.linkedin.com/company/bioenergy-for-alternative-fuel"
                      target="_blank"
                      as={NextLink}
                    >
                      <Button
                        _hover={{
                          background: "blue.200",
                        }}
                        w="full"
                        variant="outline"
                        rounded={"full"}
                        leftIcon={<SiLinkedin />}
                      >
                        LinkedIn
                      </Button>
                    </Link>
                  </HStack>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <HStack display={!isNotMobile ? "none" : "block"}>
            <Button
              fontSize={"1rem"}
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/"
              transition={"all 0.3s ease"}
              _hover={{ color: "prim", transform: "translateY(-2px)" }}
            >
              Home
            </Button>
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/about"
              fontSize={"1rem"}
              transition={"all 0.3s ease"}
              _hover={{ color: "prim", transform: "translateY(-2px)" }}
            >
              About Us
            </Button>
            <Menu isLazy closeOnBlur>
              <MenuButton
                m="0"
                rightIcon={<RiArrowDropDownLine />}
                fontWeight={"normal"}
                as={Button}
                variant="none"
                fontSize={"1rem"}
                transition={"all 0.3s ease"}
                _hover={{ color: "prim", transform: "translateY(-2px)" }}
              >
                Products
              </MenuButton>
              <MenuList color="black">
                <MenuItem as={NextLink} href={"/products"}>
                  All Products
                </MenuItem>
                <MenuItem as={NextLink} href={"/products/#rdf"}>
                  Alternative Fuels
                </MenuItem>
                <MenuItem as={NextLink} href={"/products/#organic"}>
                  Organic Fertilizers
                </MenuItem>
                <MenuItem as={NextLink} href={"/products/#rec"}>
                  Recyclables
                </MenuItem>
                <MenuItem as={NextLink} href={"/products/#rpet"}>
                  r-PET Granules
                </MenuItem>
                <MenuItem as={NextLink} href={"/products/#steel"}>
                  Steel Slag Recycling
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy closeOnBlur>
              <MenuButton
                fontSize={"1rem"}
                m="0"
                rightIcon={<RiArrowDropDownLine />}
                fontWeight={"normal"}
                as={Button}
                variant="none"
                transition={"all 0.3s ease"}
                _hover={{ color: "prim", transform: "translateY(-2px)" }}
              >
                Services
              </MenuButton>
              <MenuList color="black">
                <MenuItem as={NextLink} href={"/services"}>
                  All Services
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#afr"}>
                  Technical Consultancy for AFR businesses
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#turnkey"}>
                  Turnkey Alternative Fuel Facility
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#steel"}>
                  Steel Slag Treatment
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#zero"}>
                  Zero Waste Service
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#landfills"}>
                  Operation and Maintenance of Landfills
                </MenuItem>
                <MenuItem as={NextLink} href={"/services/#plants"}>
                  Operation and maintenance of <br /> waste management Plants
                </MenuItem>
              </MenuList>
            </Menu>
            {/* <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/why"
              fontSize={"1rem"}
              transition={"all 0.3s ease"}
              _hover={{ color: "prim", transform: "translateY(-2px)" }}
            >
              Why Us?
            </Button> */}
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/projects"
              fontSize={"1rem"}
              transition={"all 0.3s ease"}
              _hover={{ color: "prim", transform: "translateY(-2px)" }}
            >
              Projects
            </Button>
          </HStack>
          <Flex w="full" maxW="15rem" align={"center"} justify={"center"}>
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/contact"
              fontSize={"1rem"}
              transition={"all 0.3s ease"}
              _hover={{ color: "prim", transform: "translateY(-2px)" }}
            >
              Contact Us
            </Button>
            <IconButton
              size={"lg"}
              variant="ghost"
              color={"white"}
              rounded={"full"}
              _hover={{
                background: "blue.200",
              }}
              colorScheme="whiteAlpha"
              as={NextLink}
              border="2px solid white"
              href={
                "https://www.linkedin.com/company/bioenergy-for-alternative-fuel"
              }
              icon={<SiLinkedin />}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
}

