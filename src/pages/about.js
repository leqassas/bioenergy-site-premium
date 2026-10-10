import Head from "next/head";
import Hero from "@/components/Hero";
import Aboutus from "@/components/About/Aboutus";
export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="We recycle material, not ideas!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"about"}
        bg={"../../aboutushero.webp"}
        text={"We recycle material, not ideas!"}
        heading={"About Us"}
      />
      <Aboutus />
      {/* <Markets/> */}
      {/* <Partners/> */}
    </>
  );
}
