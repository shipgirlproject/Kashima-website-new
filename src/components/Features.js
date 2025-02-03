import { Link } from 'react-router-dom';
import React from 'react';

const Features = () => {
    return (
        <div>
            <section className="text-white relative bg-darkGray overflow-hidden pt-[2rem]">
                {/* Feature 1 */}

                {/* Decorative HR */}
                <div className="relative w-full mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">

                    <div className="relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>

                    {/* Text Content */}
                    <div className="mt-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Web-Based Music Player Control</h2>
                        <p className="text-gray-300 mb-6">
                        Easily manage your music playback from the web. Play, pause, skip, and control the queue in real time all from your browser. Note: Music streaming requires you to be in a voice channel.
                        </p>
                        <Link to="/music-player" className="inline-block text-primary-400 hover:text-primary-500 underline transition-colors"> Try it out → </Link>
                    </div>
                </div>

                {/* Feature 2 */}

                {/* Decorative HR */}
                <div className="relative w-full mt-12 mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">

                    {/* Text Content */}
                    <div className="mb-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h2>
                        <p className="text-gray-300 mb-6">
                        Customize Kashima effortlessly with our web-based dashboard. Adjust channel logs, and other settings all in one place.
                        </p>
                        <Link to="/music-player" className="inline-block text-primary-400 hover:text-primary-500 underline transition-colors"> Dashboard → </Link>
                    </div>

                    <div className="mb-12 relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>


                </div>

                {/* Feature 3 */}

                {/* Decorative HR */}
                <div className="relative w-full mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">

                    <div className="relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>

                    {/* Text Content */}
                    <div className="mt-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderation</h2>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}

                {/* Decorative HR */}
                <div className="relative w-full mt-12 mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">

                    {/* Text Content */}
                    <div className="mb-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Server Logs</h2>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="mb-12 relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">
                    </div>

                </div>

                {/* Feature 4 */}

                {/* Decorative HR */}
                <div className="relative w-full mb-12">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
                </div>

                {/* Section Content */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-16">

                    <div className="relative flex items-center justify-center bg-gray-800 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6">

                    </div>

                    {/* Text Content */}
                    <div className="mt-12 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Starboarding</h2>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

            </section >
        </div >
    );
};

export default Features;
