import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const Carousel = () => {
  const items = [
    {
      name: "Yanga",
      feedback:
        "The huge amount of commands and her high quality music player had me captivated at first sight",
      image:
        "https://cdn.discordapp.com/avatars/234752951887855616/1b4029337c722282e852feff5968875a.png?size=512",
    },
    {
      name: "Hunniphile",
      feedback:
        "It's amazing, hopefully it will still be alive at the end of the day. To whoever is reading this review, I 100% recommend it if you want an aesthetic music bot and more",
      image: "https://kashima.saya.moe/img/testimonial-3.jpg",
    },
    {
      name: "Keitanyan",
      feedback:
        "There is a command for every situation I could think of and it covers anything I could need in terms of utility",
      image:
        "https://cdn.discordapp.com/avatars/292273255346339840/4b6e670470b3606107afe463a5f477be.png?size=512",
    },
    {
      name: "quysan_",
      feedback:
        "Gotta say this is one of the best bots for playing music! tysm devs team",
      image:
        "https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F478067675097202689%2Fd4f90979240b771a3cde8258fc52d9e9.png%3Fsize%3D512&w=64&q=75",
    },
  ];

  const slidesRef = useRef(null);

  useEffect(() => {
    const slides = slidesRef.current;

    const animate = () => {
      const slidesLength = slides.children.length;

      if (slidesLength > 3) {
        const cloneNodes = Array.from(slides.children)
          .slice(-3)
          .map((node) => node.cloneNode(true));

        cloneNodes.forEach((node) => slides.prepend(node));

        slides.classList.add("animate");
        slides.style.animationDuration = `${slidesLength * 2}s`;
      }
    };

    animate();
  }, []);

  return (
    <div className="bg-darkGray text-white overflow-x-hidden">
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
          <ul
            ref={slidesRef}
            className="slides flex flex-row flex-nowrap m-0 p-0"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className="w-1/3 h-full flex items-center justify-center text-center px-4"
              >
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
                  <p className="italic text-gray-300">"{item.feedback}"</p>
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
          animation: moveSlideshow linear infinite;
        }

        .slide-container {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
