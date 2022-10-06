import type { NextPage } from "next";
import Head from "next/head";
import ImageCarousel from "../components/widget/ImageCarousel";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageCarousel />

      <main className="w-full h-full bg-stone-100 flex flex-col mx-auto py-10">
        <div className="flex flex-col items-center gap-3 w-full p-2">
          <h2 className="font-semibold text-2xl">新產品</h2>
          <div
            className="w-full grid grid-cols-2 gap-2
          md:grid-cols-3 md:gap-4
          lg:grid-cols-4 lg:gap-5  
          lg:max-w-7xl 
          "
          >
            <div
              className="w-full h-full  flex flex-col gap-3 pb-3 items-center transition-all shadow hover:shadow-xl 
              md:h-80 lg:h-96 lg:gap-5"
            >
              <div className="w-full h-40 relative md:h-56 lg:h-72">
                <Image
                  src={"/static/home/1.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="new product"
                />
              </div>
              <h3 className="font-semibold">m4 rail system</h3>
              <span className="font-extrabold text-pink-700">$ 4999</span>
            </div>

            <div
              className="w-full h-full  flex flex-col gap-3 pb-3 items-center transition-all shadow hover:shadow-xl 
              md:h-80 lg:h-96 lg:gap-5"
            >
              <div className="w-full h-40 relative md:h-56 lg:h-72">
                <Image
                  src={"/static/home/1.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="new product"
                />
              </div>
              <h3 className="font-semibold">m4 rail system</h3>
              <span className="font-extrabold text-pink-700">$ 4999</span>
            </div>

            <div
              className="w-full h-full  flex flex-col gap-3 pb-3 items-center transition-all shadow hover:shadow-xl 
              md:h-80 lg:h-96 lg:gap-5"
            >
              <div className="w-full h-40 relative md:h-56 lg:h-72">
                <Image
                  src={"/static/home/1.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="new product"
                />
              </div>
              <h3 className="font-semibold">m4 rail system</h3>
              <span className="font-extrabold text-pink-700">$ 4999</span>
            </div>

            <div
              className="w-full h-full  flex flex-col gap-3 pb-3 items-center transition-all shadow hover:shadow-xl 
              md:h-80 lg:h-96 lg:gap-5"
            >
              <div className="w-full h-40 relative md:h-56 lg:h-72">
                <Image
                  src={"/static/home/1.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="new product"
                />
              </div>
              <h3 className="font-semibold">m4 rail system</h3>
              <span className="font-extrabold text-pink-700">$ 4999</span>
            </div>

            <div className="w-full h-full  flex flex-col gap-3 pb-3 items-center transition-all shadow hover:shadow-xl md:h-80">
              <div className="w-full h-40 relative md:h-56">
                <Image
                  src={"/static/home/1.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="new product"
                />
              </div>
              <h3 className="font-semibold">m4 rail system</h3>
              <span className="font-extrabold text-pink-700">$ 4999</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-stone-500 hover:text-slate-800">
          <Link href={"/category"}>
            <a>
              <p className="p-3 shadow flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                更多商品
              </p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
