import {Link} from "react-router-dom"

function Header(props){
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
      };
    return (
        <header>
            <nav style={navStyle}>
                <Link to="/IM">
                    <div>Messaging</div>
                </Link>
                <Link to="/translate">
                    <div>Translate</div>
                </Link>
                <Link to="/">
                    <div>TITLE</div>
                </Link>
                <Link to="/login">
                    <div>Login</div>
                </Link>
                <Link to="/register">
                    <div>Register</div>
                </Link>
                <Link to="/logout">
                    <div>Logout</div>
                </Link>
            </nav>
        </header>
    )
  } 
  
  export default Header