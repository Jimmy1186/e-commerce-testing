import { useSession } from "next-auth/react";
import React from "react";
import Breadcrumb from "../../components/widget/Breadcrumb";


// const fakeData = {
//     shotgun:{

//     }
// }

function index() {
  const { data: session } = useSession();

  console.log(session);
  if (session?.user?.isAdmin || !session) {
    return <h1>無權限</h1>;
  }
  return (
    <>
      <main className="w-full h-full bg-stone-100 flex flex-col gap-3 mx-auto pt-24 px-3  lg:max-w-7xl  lg:grid grid-cols-6 xl:max-w-[1440px]">
        <Breadcrumb />
        <div className="w-full">
            <p className="text-3lx">新增商品</p>
            <div className="divider"></div>
            <div className="flex items-center gap-3">
                <p>商品名稱</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="w-full">

            </div>
        </div>
      </main>
    </>
  );
}

export default index;
