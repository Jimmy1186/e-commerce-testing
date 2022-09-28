import type { NextPage } from "next";
import { useRef, useEffect, useCallback } from "react";
import React from "react";
import { trpc } from "../utils/trpc";
const Redirect: NextPage = () => {
  const myEl = useRef(null);
  const payMutation = trpc.useMutation(["example.hello"]);
  const onPay = useCallback(() => {
    payMutation.mutate({
      text: "sda",
    });
  
  }, []);

onPay()

  useEffect(() => {
     
    if(payMutation.data?.htm){
(myEl.current as unknown as HTMLElement).getElementsByTagName("form")[0]?.submit();
    }
  
  }, []);

if(payMutation.isLoading){
  return <>wait</>
}
  return (
    <>
      <div ref={myEl} dangerouslySetInnerHTML={{ __html: payMutation.data?.htm.toString() }} />
    </>
  );
};



export default Redirect;
