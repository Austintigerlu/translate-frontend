import { Link } from "react-router-dom";

function Nav(props){
    
    async function handleLogout(e){
        e.preventDefault();
        const setUser = props.setCurrentUser
        localStorage.removeItem('token');
        setUser(null);
        }
    
    return (
    <>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block">
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
                            <Link to="/updateprofile">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Profile
                                </p>
                            </Link>
                            <button onClick={(e) => handleLogout(e)}>
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Logout
                                </p>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav