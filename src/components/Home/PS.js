import { chakra, useMediaQuery, VStack, Heading, Flex } from "@chakra-ui/react";
import SCard from "../SCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import Card from "../Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function PS() {
  const ChakraSwiper = chakra(Swiper);
  const ChakraSwiperSlide = chakra(SwiperSlide);
  const [isNotMobile] = useMediaQuery("(min-width: 1500px)");
  return (
    <VStack
      px={["1.5rem", "3rem", "6rem"]}
      py="5rem"
      spacing={"4.5rem"}
      w="full"
    >
      <VStack align={"start"} spacing={"0"} w="full">
        <VStack spacing={"1.25rem"} align={"start"}>
          <Heading
            fontSize={"2rem"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            PRODUCTS
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            fontWeight={["500", "500", "600"]}
            textTransform={"capitalize"}
            as="h3"
          >
            Driving Success Together
          </Heading>
        </VStack>
        {/* <Flex
          align={"center"}
          justify={"center"}
          gap={"2.5rem"}
          w="full"
          flexWrap={"wrap"}
        >
          <Card
            heading={"Alternative Fuels (RDF & MBF)"}
            img={"../prod/rdf.webp"}
            link={"#rdf"}
          />
          <Card
            heading={"Organic Fertilizers"}
            img={"../prod/natural.webp"}
            link={"#organic"}
          />
          <Card
            heading={"r-PET Granules"}
            img={"../prod/rpet.webp"}
            link={"#rpet"}
          />
          <Card
            heading={"Recyclables"}
            img={"../prod/rec.webp"}
            link={"#rec"}
          />
          <Card
            heading={"Steel Slag"}
            img={"../prod/steel.webp"}
            link={"#steel"}
          />
        </Flex> */}
        <ChakraSwiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          pagination={{ clickable: true }}
          navigation
          py="3.12rem"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          w="full"
          spaceBetween={25}
          sx={{
            ".swiper-slide": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            ".swiper-pagination-bullet-active": {
              backgroundColor: "prim",
            },

            ".swiper-button-prev": {
              color: "green.300",
            },
            ".swiper-button-next": {
              color: "green.300",
            },
          }}
        >
          <SwiperSlide>
            <SCard
              type="slide"
              head={"Alternative Fuels (RDF & MBF)"}
              img={"../prod/rdf.webp"}
              link={"/products/#rdf"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              head={"Organic Fertilizers"}
              img={"../prod/natural.webp"}
              link={"/products/#organic"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              head={"r-PET Granules"}
              img={"../prod/rpet.webp"}
              link={"/products/#rpet"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              head={"Recyclables"}
              img={"../prod/rec.webp"}
              link={"/products/#rec"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              head={"Steel Slag"}
              img={"../prod/steel.webp"}
              link={"/products/#steel"}
            />
          </SwiperSlide>
        </ChakraSwiper>
      </VStack>
      <VStack align={"start"} spacing={"0rem"} w="full">
        <VStack spacing={"1.25rem"} align={"start"}>
          <Heading
            fontSize={"2rem"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
          >
            SERVICES
          </Heading>
          <Heading
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            fontWeight={["500", "500", "600"]}
            textTransform={"capitalize"}
            as="h3"
          >
            Recycle the present to save the future
          </Heading>
        </VStack>
        <ChakraSwiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          pagination={{ clickable: true }}
          navigation
          py="3.12rem"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          w="full"
          spaceBetween={25}
          sx={{
            ".swiper-slide": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            ".swiper-pagination-bullet-active": {
              backgroundColor: "prim",
            },

            ".swiper-button-prev": {
              color: "green.300",
            },
            ".swiper-button-next": {
              color: "green.300",
            },
          }}
        >
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/tech-min.webp"}
              head={"Technical Consultancy for AFR businesses"}
              link={"/services/#afr"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/turnkey-min.webp"}
              head={"Turnkey Alternative Fuel Facility"}
              link={"/services/#turnkey"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/steel-min.webp"}
              head={"Steel Slag Treatment"}
              link={"/services/#steel"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/zero-min.webp"}
              head={"Zero Waste Service"}
              link={"/services/#zero"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/operation-land-min.webp"}
              head={"Operation and Maintenance of Landfills"}
              link={"/services/#landfills"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SCard
              type="slide"
              img={"../serv/operation-plants-min.webp"}
              head={"Operation and Maintenance of Waste management plants"}
              link={"/services/#plants"}
            />
          </SwiperSlide>
        </ChakraSwiper>
      </VStack>
    </VStack>
  );
}
