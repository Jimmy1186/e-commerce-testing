import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { parseBody } from "next/dist/server/api-utils/node";

function PaySuccess() {



  return <div>hello</div>;
}

export default PaySuccess;

// export const getServerSideProps: GetServerSideProps = async (context)=>{

//   const body = await parseBody(context.req, "1mb");
//   console.log(body);
//   return { props: {} };
  
// }
