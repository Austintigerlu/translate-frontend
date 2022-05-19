import {useState, useEffect} from 'react'
import LoginNav from './LoginNav'
import Nav from "./Nav";

function Header(props){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(props.currentUser)
      }, [props.currentUser])

    return (
        <header>
            {user ? <LoginNav setCurrentUser={props.setCurrentUser}/>: <Nav/>}
        </header>
    )
  } 
  
export default Header