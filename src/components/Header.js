import {Link} from "react-router-dom"

function Header(props){
    return (
        <header>
            <nav>
                <Link to="/">
                    <div>TITLE</div>
                </Link>
                <Link to="/IM">
                    <div>Messaging</div>
                </Link>
                <Link to="/translate">
                    <div>Translate</div>
                </Link>
                <Link to="/login">
                    <div>Login</div>
                </Link>
                <Link to="/register">
                    <div>Register</div>
                </Link>
            </nav>
        </header>
    )
  } 
  
  export default Header