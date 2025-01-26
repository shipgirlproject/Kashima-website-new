import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex items-end h-100 w-full">
            <footer className="w-full text-gray-500 bg-darkGray body-font pt-[1rem]">
                <div
                    className="container flex flex-col flex-wrap px-5 py-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-500 title-font md:justify-start">
                            <img src="https://i.imgur.com/VAYBowN.png" width={100} height={100} />
                        </a>
                        <p className="mt-2 text-sm text-white">The first feature-rich shipgirl bot that doesn't compromise over quality in anything I do. What are you waiting for? Invite me now ❤️</p>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm tracking-widest text-white font-bold up uppercase title-font">Quick Links</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link to='/about-us'>
                                        <a className="text-white cursor-pointer hover:text-gray-500">Dashboard</a>
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-500">Music Player</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-500">Profile</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm tracking-widest text-white font-bold uppercase title-font">More Links
                            </h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link to='/'>
                                        <a className="text-white cursor-pointer hover:text-gray-500">Team</a>
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-500">Documentation</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm tracking-widest text-white font-bold uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <Link to="">
                                        <a className="text-white cursor-pointer hover:text-gray-500">Discord Server</a>
                                    </Link>
                                </li>

                                <li className="mt-3">
                                    <Link to="">
                                        <a className="text-white cursor-pointer hover:text-gray-500">Support Us</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm tracking-widest text-white font-bold uppercase title-font">Contact us</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <p className="text-white">sayaa@gmail.com</p>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-white text-center">© 2025 All rights reserved | Designed with ❤️ by <Link to="https://github.com/Kaireu"><span className="underline font-bold hover:text-gray-500 cursor-pointer">eli.</span></Link> </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;