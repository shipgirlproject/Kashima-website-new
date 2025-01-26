import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-darkGray">
    <div className="container flex flex-row-reverse flex-wrap pl-[4rem] pt-24 pb-12 sm:pl-[5rem]">
      <div className="grid grid-cols-2 gap-3 gap-y-6 md:grid-cols-3 justify-between w-full mb-24 ml-auto md:w-3/5 lg:w-1/2 md:mb-0 leading-loose md:leading-relaxed md:pl-6">
        {/* First Column */}
        <div>
          <ul>
            <li className="text-white mb-3">Get started</li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">Invite Kashima</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">Premium</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">Dashboard</Link></li>
          </ul>
          <ul className="mt-8">
            <li className="text-white mb-3">Kashima</li>
            <li><Link className="font-medium text-white hover:text-gray-500 current" to="">Documentation</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">Music Player</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">Dashboard</Link></li>
          </ul>
        </div>

        {/* Second Column */}
        <div className='pl-[2rem] sm:pl-16 md:pl-1'>
          <ul>
            <li className="text-white mb-3">More Links</li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="" target="_blank">Developers</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">About</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="">FAQ</Link></li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <ul>
            <li className="text-white mb-3">Follow us</li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="https://discord.gg/FVqbtGu" rel="noopener noreferrer" target="_blank">Discord</Link></li>
            <li><Link className="font-medium text-white hover:text-gray-500" to="https://github.com/shipgirlproject" target="_blank">GitHub</Link></li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="mr-auto">
        <Link className="header-logo mr-4 flex items-center gap-x-2 transition-colors current" to="/">
        <img src="https://i.imgur.com/VAYBowN.png" width={100} height={100} alt="Kashima Logo" />
        <span className="pl-[1rem] text-4xl text-white">Kashima</span>
        </Link>
        <p className="pt-[1rem] text-white">Shipgirl Project Founded in 2017</p>
        <div className="text-sm pt-[.5rem] text-white">© 2025 All rights reserved | Designed with ❤️ by <Link to="https://github.com/Kaireu"><span className="underline font-bold hover:text-gray-500 cursor-pointer">eli.</span></Link> </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
