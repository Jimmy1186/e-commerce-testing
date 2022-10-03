import React from 'react'
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-full border-t-2 ">
    <div className="flex w-full justify-center">
      <span className="">© 2022 SUMMITGURE</span>
      <div className="">
        <Image
          src="/static/icons/fb.png"
          width={15}
          height={15}
          alt="facebook"
        />
        <Image src="/static/icons/ig.png" width={15} height={15} alt="ig" />
        <Image
          src="/static/icons/twitter.png"
          width={15}
          height={15}
          alt="twitter"
        />
      </div>
    </div>
  </footer>
  )
}

export default Footer