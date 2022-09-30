import type { GetServerSideProps, NextPage } from "next";
import { useRef, useEffect, useCallback } from "react";
import React from "react";
import { trpc } from "../utils/trpc";
const Redirect: NextPage = (props:any) => {
  const myEl = useRef(null);
  useEffect(() => {
    (myEl.current as unknown as HTMLElement).getElementsByTagName("form")[0]?.submit();
  }, []);
  



  return (
    <>
      <div ref={myEl} dangerouslySetInnerHTML={{ __html: props.result.htm }} />
    </>
  );
};



export default Redirect;

export const getServerSideProps: GetServerSideProps = async(context)=> {

     const result = await fetch(`${process.env.API_URL}/api/PaymentDoneServer`).then(res=>{return res})
     console.log(result)
    


  return { props: { result:JSON.stringify(result) } };
}
