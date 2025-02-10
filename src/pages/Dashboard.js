import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Configuration from "../components/Configuration";
import { GearIcon, MusicIcon } from "../components/Icons";

function Dashboard() {
    const [activeSection, setActiveSection] = useState("configuration");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(false);
                setIsDropdownOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sections = {
        configuration: "Config Content"
    }

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-[#1e1f22] dark:border-[#1e1f22] shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
                    <button 
                        type="button" 
                        className="p-2 text-[gray-500] rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                        </svg>
                    </button>
                    <Link to="/" className="flex ms-2 md:me-24">
                        <img src="https://i.imgur.com/VAYBowN.png" className="h-8 me-3" alt="Kashima" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dashboard</span>
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            className="flex text-sm bg-[#1e1f22] rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://i.imgur.com/pgx29kK.jpeg" alt="user photo" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-[#1e1f22] dark:divide-[#3e4147]">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <p>elikajiwara</p>
                                </div>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                    <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-[#35373c] hover:font-semibold">Logout</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-[#1e1f22] dark:border-[#1e1f22] shadow-md`}>
                <div className="h-full px-3 pb-4 text-white overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li><Link to="general-settings" className="text-[#b5bac1] hover:text-white flex items-center p-2 hover:bg-[#35373c] rounded-md hover:font-semibold">
                        <GearIcon/> <p className="pl-2">Settings</p></Link> </li>
                        <li><Link to="general-settings" className="text-[#b5bac1] hover:text-white flex items-center p-2 hover:bg-[#35373c] rounded-md hover:font-semibold">
                        <MusicIcon /> <p className="pl-2">Music Dashboard</p> </Link> </li>
                    </ul>
                </div>
            </aside>

            {/* Content Area for Configuration */}
            <main className="bg-[#313338] p-4 sm:ml-64 mt-15">
                <Configuration />
            </main>
        </div>
    );
}

export default Dashboard;
