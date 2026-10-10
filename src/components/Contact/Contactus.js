import { Flex, chakra, Box } from "@chakra-ui/react";
import MsgForm from "./MsgForm";

export default function Contactus() {
  return (
    <Flex
      w="full"
      align={"center"}
      justify={["center", "center", "center", "center", "space-between"]}
      flexDir={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      h={["auto", "auto", "auto", "auto", "60rem"]}
    >
      <MsgForm />
      <Box
        w={"full"}
        maxW={["full", "full", "full", "full", "52rem"]}
        h={["25rem", "25rem", "25rem", "25rem", "full"]}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6739408605404!2d31.24839227505814!3d29.96005602256496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847ee23f4b875%3A0x560866793fe4e7b6!2sEl%20Zeini%20Tower%2C%2025%20Masr%20-%20Helwan%20Agriculture%20Rd%2C%20Maadi%20Al%20Khabiri%20Ash%20Sharqeyah%2C%20Maadi%2C%20Cairo%20Governorate%204211123!5e0!3m2!1sen!2seg!4v1722507480318!5m2!1sen!2seg"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
        />
      </Box>
    </Flex>
  );
}
