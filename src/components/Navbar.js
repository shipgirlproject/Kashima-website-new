import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiscordIcon } from "./Icons";

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? "bg-darkGray/90 shadow-lg" : "bg-darkGray/100"}`}>
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo and Menu Links */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src="https://i.imgur.com/VAYBowN.png" alt="Kashima" className="w-16 md:w-20" />
          </Link>

          <div className="hidden md:flex gap-6">
            <Link to="" className="text-white hover:font-bold">
              About
            </Link>
            <Link to="" className="text-white hover:font-bold">
              Commands
            </Link>
            <Link to="" className="text-white hover:font-bold">
              Team
            </Link>
            <Link to="" className="text-white hover:font-bold">
              Support Us
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden md2:flex">
          <button type="button" className="pl-[2rem] pr-[2rem] text-[1.1rem] text-white hover:text-[#5865f2] bg-[#5865f2] hover:bg-white font-bold rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center outline outline-2 outline-[#a5abf5] hover:outline-white" >
            <DiscordIcon /> Login with Discord
          </button>
        </div>

        <div className="md2:hidden hidden md:flex">
          <button type="button" className="pl-[2rem] pr-[2rem] text-[1.1rem] text-white hover:text-[#5865f2] bg-[#5865f2] hover:bg-white font-bold rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center outline outline-2 outline-[#a5abf5] hover:outline-white" >
            <DiscordIcon /> Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-[4rem]">
          <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://i.imgur.com/pgx29kK.jpeg" alt="avatar" onClick={() => { setIsDropdownOpen(!isDropdownOpen);setIsMobileMenuOpen(false);}}/>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-[-2.7rem] top-[3rem] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>elikajiwara</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Dashboard
                  </p>
                </li>
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Profile
                  </p>
                </li>
              </ul>
              <div className="py-1">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> Sign out
                </p>
              </div>
            </div>
          )}
        </div>

        <button className="md:hidden p-2 text-white focus:outline-none" onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen); setIsDropdownOpen(false); }} aria-label="Toggle Mobile Menu">
          {isMobileMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> </svg>)}
        </button>

        {/* Mobile View Hamburger Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[5rem] left-0 w-full bg-darkGray/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center gap-6 py-6">
              <Link to="" className="text-white hover:text-gray-400">
                About
              </Link>
              <Link to="" className="text-white hover:text-gray-400">
                Commands
              </Link>
              <Link to="" className="text-white hover:text-gray-400">
                Team
              </Link>
              <Link to="" className="text-white hover:text-gray-400">
                Support Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar2;
