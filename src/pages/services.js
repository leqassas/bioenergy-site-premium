import Head from "next/head";
import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
export default function Home() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Recycle the present to save the future"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"services"}
        bg={"../serv/operation-plants-min.webp"}
        text={"Recycle the present to save the future"}
        heading={"Services"}
      />
      <Services />
    </>
  );
}
