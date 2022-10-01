import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";
const slides = [
  { url: "/static/home/0.jpg", title: "beach" },
  { url: "/static/home/1.jpg", title: "beach" },
  { url: "/static/home/2.jpg", title: "boat" },
  { url: "/static/home/3.jpg", title: "forest" },
  // { url: "", title: "city" },
  // { url: "", title: "italy" },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  //   useEffect(()=>{
  //     const timer = setTimeout(()=>{
  //         setCurrentIndex(perv=>perv>=slides.length-1? 0 :perv+1)
  //     },3000)
  //     return ()=>clearTimeout(timer)
  //   },[currentIndex])
  return (
    <>
      <div className=" flex  h-full w-full overflow-hidden relative  top-0 z-0">
        {slides.map((s, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundImage: `url(${s.url})`,
                marginLeft: i === 0 ? `-${currentIndex * 100}%` : undefined,
              }}
              className={` h-screen w-full overflow-auto bg-cover bg-center bg-no-repeat shrink-0  transition-all duration-300 ease-in-out `}
            ></div>
          );
        })}
        <div className="absolute bottom-0 w-full  flex justify-center">
          {slides.map((s, i) => {
            return (
              <FiberManualRecordIcon
                key={i}
                sx={{ color: currentIndex === i ? "#fff" : "#6c6c6c" }}
                onClick={() => setCurrentIndex(i)}
              />
            );
          })}
        </div>

        <div className="absolute  left-0 z-10 h-full w-1/6 flex justify-center items-center ">
          <ChevronLeftIcon
            sx={{ color: "#fff" }}
            onClick={() => goToPrevious()}
          />
        </div>

        <div className="absolute  right-0  h-full w-1/6 flex justify-center items-center ">
          <ChevronRightIcon sx={{ color: "#fff" }} onClick={() => goToNext()} />
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
