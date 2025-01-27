import React from "react";
import { motion } from "framer-motion";

const testimonials = [
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
    feedback: "There is a command for every situation i could think of and it covers anything i could need in terms of utility",
    image: "https://cdn.discordapp.com/avatars/292273255346339840/4b6e670470b3606107afe463a5f477be.png?size=512",
  },
  {
    name: "quysan_",
    feedback: "Gotta say this is one of the best bot for playing music! tysm devs team",
    image: "https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F478067675097202689%2Fd4f90979240b771a3cde8258fc52d9e9.png%3Fsize%3D512&w=64&q=75",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="bg-darkGray py-16 text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Captains Are Saying
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-10 sm:w-32 bg-gradient-to-r from-darkGray via-darkGray/70 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-10 sm:w-32 bg-gradient-to-l from-darkGray via-darkGray/70 to-transparent pointer-events-none z-10"></div>

          {/* Motion container */}
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#323236] rounded-lg shadow-lg flex-shrink-0 w-64 md:w-80 p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full border-4 border-[#202023] mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="italic text-gray-300">"{testimonial.feedback}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
