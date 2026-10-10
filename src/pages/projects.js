import Head from "next/head";
import Hero from "@/components/Hero";
import AllProjects from "@/components/Projects/AllProjects";

export default function projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Waste, Fueling the Future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"projects"}
        bg={"../../projects/abiis2.jpeg"}
        text={"Waste, Fueling the Future”."}
        heading={"Projects"}
      />
      <AllProjects />
    </>
  );
}
