import {useNavigate, Navigate} from 'react-router-dom';
import{useLayoutEffect, useState} from 'react';

function Login(props) {
  const [error, setError] = useState("")
  const navigate = useNavigate();
  
  async function handleLogin(e){
    e.preventDefault()

    const form = e.target;
    const user = {
      username: form[0].value,
      password: form[1].value
    }
    try{
      const res =await fetch(props.URL+'/users/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await res.json()
      localStorage.setItem("token", data.token)
      setError(data.message)
    } catch(err){
      console.log(error)
      setError(err)
    }
  }

  useLayoutEffect(()=> {
    fetch(props.URL+'users/username', {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res)
      return res.json()})
    .then(data => {
      console.log(data);
      return data.isLoggedIn ? navigate('/'): null})
    .catch(err => setError(err))
  }, [navigate])

    return (
      <div>
        <form onSubmit={(e) => handleLogin(e)}>
          <label for="username">Username: </label>
          <input id='username' required type="username"/>
          <br></br>
          <label for="password">Password: </label>
          <input id="password" required type="password"/>
          <input type="submit" value="Submit"/>
        </form>
        {error === "Success" ? <Navigate to="/"/>: <div>{error}</div>}
      </div>
    )
  }
  
  export default Login;