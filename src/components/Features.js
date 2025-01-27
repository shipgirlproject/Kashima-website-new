import { Link } from 'react-router-dom';
import React from 'react';

const Features = () => {
    return (
        <div>
            <section className="text-white relative bg-darkGray overflow-hidden">
                {/* Feature 1 */}

                {/* Decorative HR */}
                <div className="relative w-full mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-1/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">
                    {/* Mock Chat Interface */}
                    <div className="relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>

                    {/* Text Content */}
                    <div className="mt-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lorem ipsum</h2>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/music-player" className="inline-block text-primary-400 hover:text-primary-500 underline transition-colors"> Try it out → </Link>
                    </div>
                </div>

                {/* Decorative HR */}
                <div className="relative w-full mt-12 mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-1/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">
                    {/* Mock Chat Interface */}
                    <div className="relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>

                    {/* Text Content */}
                    <div className="mt-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lorem ipsum</h2>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  
                        </p>
                        <Link to="/music-player" className="inline-block text-primary-400 hover:text-primary-500 underline transition-colors"> Try it out → </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Features;
