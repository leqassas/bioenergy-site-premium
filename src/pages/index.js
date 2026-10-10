import Head from "next/head";
import Hero from "@/components/Hero";
import History from "@/components/Home/History";
import { chakra } from "@chakra-ui/react";
import Employees from "@/components/Employees";
import Partners from "@/components/Partners";
import PS from "@/components/Home/PS";
import Companies from "@/components/Home/Companies";
import GreenHands from "@/components/Home/GreenHands";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <>
      <Head>
        <title>BioEnergy</title>
        <meta name="description" content="Waste, Fueling the Future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"home"}
        bg={"../serv/zero-min.webp"}
        heading={
          <>
            Waste Fueling{" "}
            <chakra.span color="prim2">
              {"\n"}
              <TypeAnimation
                aria-label={"The Future"}
                preRenderFirstString={true}
                cursor={false}
                sequence={["", 500, "The Future"]}
                repeat={0}
                speed={30}
              />
            </chakra.span>
          </>
        }
        text={
          "Based in Egypt and expanding operations in Middle East & Africa."
        }
      />
      <History />
      <PS />
      {/* <About/> */}
      <Companies />
      <Employees />

      <GreenHands />
      <Partners />
    </>
  );
}
