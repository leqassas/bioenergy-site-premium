import Head from "next/head";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contactus";
import Team from "@/components/Contact/Team";

import JoinUs from "@/components/Contact/JoinUs";
export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"contact"}
        bg={"contactus.webp"}
        heading={"Get in Touch"}
        text={"wherever you are"}
      />

      <Contact />
      <Team />
      <JoinUs />
    </>
  );
}
