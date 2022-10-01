import type { NextPage } from "next";
import Head from "next/head";
import ImageCarousel from "../components/widget/ImageCarousel";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

           <ImageCarousel />

      <main className="w-full h-full bg-stone-100 flex flex-col p-3">
       
     
      </main>
    </>
  );
};

export default Home;
