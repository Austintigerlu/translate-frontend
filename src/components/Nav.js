import logo from './logos/Duo Amigo-logos_transparent.png'
import { Link } from "react-router-dom";

function Nav(){
    return (
    <>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-20 w-20"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/">
                                <p className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </p>
                            </Link>
                            <Link to="/IM">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Messaging
                                </p>
                            </Link>
                            <Link to="/translate">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Translate
                                </p>
                            </Link>
                        </div>
                        </div>
                        <div className="mr-2 flex items-end space-x-4">
                            <Link to="/login">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Login
                                </p>
                            </Link>
                            <Link to="/register">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Register
                                </p>
                            </Link>
                        </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav