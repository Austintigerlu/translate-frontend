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
            {localStorage.getItem('user') ? <LoginNav URL={props.URL}currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>: <Nav/>}
        </header>
    )
  } 
  
export default Header