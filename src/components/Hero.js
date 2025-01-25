import { Link } from 'react-router-dom';
import React from 'react';
import StarrySky from './StarrySky';
import { DiscordIcon, DashboardIcon, MusicIcon } from "./Icons";

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <StarrySky />

            <section>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 text-white">
                        <div>
                            <h1 className="text-6xl md:text-7xl font-bold">Kashima</h1>
                            <p className="pt-[1rem] text-2xl md:text-3xl leading-relaxed">
                                The first feature-rich shipgirl bot that doesn't compromise over quality in anything I do. What are you waiting for? Invite me now ❤️
                            </p>

                            <div className="pt-[1rem] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start">
                                <Link to="">
                                    <button type="button" className="pl-[1rem] pr-[1rem] text-[1.2rem] text-white hover:text-[#5865f2] bg-[#5865f2] hover:bg-white font-bold rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center outline outline-2 outline-[#a5abf5] hover:outline-white" >
                                        <DiscordIcon /> <p>Add Kashima!</p>
                                    </button>
                                </Link>

                                <Link to="">
                                    <button type="button" className="pl-[1rem] pr-[1rem] text-[1.2rem] text-white hover:text-white hover:bg-[#008cff] font-bold rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center outline outline-2 outline-white hover:shadow-3xl hover:shadow-[#008cff] hover:outline-[#008cff] hover:shadow-[0_0_10px_4px_#008cff] transition-all duration-300">
                                        <DashboardIcon /> <p className="pl-[.5rem]">Dashboard</p>
                                    </button>
                                </Link>

                                <Link to="">
                                    <button type="button" className="pl-[1rem] pr-[1rem] text-[1.2rem] text-white hover:text-white hover:bg-[#008cff] font-bold rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center outline outline-2 outline-white hover:shadow-3xl hover:shadow-[#008cff] hover:outline-[#008cff] hover:shadow-[0_0_10px_4px_#008cff] transition-all duration-300">
                                        <MusicIcon /> <p className="pl-[.5rem]">Music Player</p>
                                    </button>
                                </Link>
                            </div>
                        </div>


                        <div>
                            <img className="w-full rounded-3xl" src="https://i.imgur.com/4nXArVT.png" alt="Kashima Image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
