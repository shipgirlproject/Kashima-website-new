import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const testimonialSlider = () => {
  const items = [
    {
      name: "Yanga",
      feedback: "The huge amount of commands and her high quality music player had me captivated at first sight",
      image: "https://cdn.discordapp.com/avatars/234752951887855616/1b4029337c722282e852feff5968875a.png?size=512",
    },
    {
      name: "Hunniphile",
      feedback: "It's amazing, hopefully it will still be alive at the end of the day. To whoever is reading this review, I 100% recommend it if you want an aesthetic music bot and more",
      image: "https://kashima.saya.moe/img/testimonial-3.jpg",
    },
    {
      name: "Keitanyan",
      feedback: "There is a command for every situation I could think of and it covers anything I could need in terms of utility",
      image: "https://cdn.discordapp.com/avatars/292273255346339840/4b6e670470b3606107afe463a5f477be.png?size=512",
    },
    {
      name: "quysan_",
      feedback: "Gotta say this is one of the best bots for playing music! tysm devs team",
      image: "https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F478067675097202689%2Fd4f90979240b771a3cde8258fc52d9e9.png%3Fsize%3D512&w=64&q=75",
    },
  ];

  const slidesRef = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState("20s");

  useEffect(() => {
    const slides = slidesRef.current;

    const updateAnimationSpeed = () => {
      const width = window.innerWidth;
      let speed;

      if (width >= 3440) {
        speed = "10s"; // Larger screens
      } else if (width >= 1280) {
        speed = "20s"; // Large screens
      } else if (width >= 1024) {
        speed = "25s"; // Medium screens
      } else if (width >= 768) {
        speed = "35s"; // Tablets
      } else {
        speed = "50s"; // Mobile
      }

      setAnimationSpeed(speed);
    };

    const animate = () => {
      if (!slides) return;

      const slidesLength = slides.children.length;

      if (slidesLength > 3) {
        const cloneNodes = Array.from(slides.children)
          .slice(-3)
          .map((node) => node.cloneNode(true));

        cloneNodes.forEach((node) => slides.prepend(node));

        slides.classList.add("animate");
      }
    };

    updateAnimationSpeed();
    animate();
    window.addEventListener("resize", updateAnimationSpeed);

    return () => window.removeEventListener("resize", updateAnimationSpeed);
  }, []);

  return (
    <div className="bg-darkGray text-white px-[.5rem] md:px-[3rem] xl:px-[10rem]">
      <div className="pt-[3rem] container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-[3rem]">
          What Captains Are Saying
        </h2>
      </div>

      <div className="relative w-full pb-[18rem] overflow-hidden">
        {/* Gradient fade effects */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-32 bg-gradient-to-r from-darkGray via-darkGray/70 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-10 sm:w-32 bg-gradient-to-l from-darkGray via-darkGray/70 to-transparent pointer-events-none z-10"></div>
        
        <div className="slide-container absolute left-0 h-full">
          <ul ref={slidesRef} className="slides flex flex-row flex-nowrap m-0 p-0" style={{ animation: `moveSlideshow ${animationSpeed} linear infinite` }}>
            {items.map((item, index) => (
              <li key={index} className="w-1/3 h-full flex items-center justify-center text-center px-4">
                <div className="bg-[#323236] rounded-lg shadow-lg flex-shrink-0 w-64 md:w-80 p-6 h-[15.8rem]">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-4 border-[#202023] mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                    </div>
                  </div>
                  <p className="italic text-gray-300 text-[15px] md:text-[1rem]">"{item.feedback}"</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        @keyframes moveSlideshow {
          100% {
            transform: translate3d(calc(-100% + 100vw), 0, 0);
          }
        }

        .slides.animate {
          animation: moveSlideshow ${animationSpeed} linear infinite;
        }

        .slide-container {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default testimonialSlider;
