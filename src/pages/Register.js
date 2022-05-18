import {useNavigate, Navigate} from 'react-router-dom';
import{useEffect, useState} from 'react';

function Register(props) {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault()
    const form = e.target
    const user = {
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
      name: form[3].value,
      profilePic: form[4].value
    }

    try {
      const res = await fetch(props.URL + 'users/register', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await res.json()
      setError(data.message)
    } catch (err){
      setError(err)
    }
  }

  useEffect(()=>{
    fetch(props.URL+'users/isUserAuth', {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(data => data.isLoggedIn ? navigate('/'): null)
    .catch(err => setError(err))
  }, [navigate, props.URL])

    return (
      <div>
        <form onSubmit={(e)=>handleRegister(e)}>
          <label for="username">Username: </label>
          <input id="username" required type="text"/>
          <br></br>
          <label for="email">Email: </label>
          <input id='email' required type="email"/>
          <br></br>
          <label for="password">Password: </label>
          <input id="password" required type="password"/>
          <br></br>
          <label for="name">Name: </label>
          <input id="name" required type="text"/>
          <br></br>
          <label for="profilePic">profilePic: </label>
          <input id="profilePic" type="text"/>
          <br></br>
          <input type="submit" value="Sign Up"/>
        </form>
        {error === "Success" ? <Navigate to="/login"/>: <div>{error}</div>}
      </div>
    );
  }
  
  export default Register;