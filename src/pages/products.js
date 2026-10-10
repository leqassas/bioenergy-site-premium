import Head from "next/head";
import Hero from "@/components/Hero";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Got pollution? Be the solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"products"}
        bg={"../productsbg.png"}
        text={"Got pollution? Be the solution"}
        heading={"Products"}
      />
      <Products />
    </>
  );
}
