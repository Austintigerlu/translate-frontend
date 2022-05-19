import logo from './logos/Duo Amigo-logos_transparent.png'
import { Link, useNavigate } from "react-router-dom";


function Nav(props){
    const navigate = useNavigate()
    async function handleLogout(e){
        e.preventDefault();
        const setUser = props.setCurrentUser
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        setUser(null);
        navigate('/login')
        }
    async function handleDeleteAccount(e){
        console.log('made it')
        console.log(props.URL+`users/${props.currentUser._id}`);
        const res = await fetch(props.URL+`users/${props.currentUser._id}`, {
        method: "DELETE",
        })
        const data = await res.json()
        console.log('data ', data)
        const setUser = props.setCurrentUser
        localStorage.removeItem('token');
        localStorage.removeItem('user')
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
                                className="h-20 w-20"
                                src={logo}
                                alt="Workflow"
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
                            <button onClick={(e) => handleDeleteAccount(e)}>
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Delete Account
                                </p>
                            </button>
                        </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav