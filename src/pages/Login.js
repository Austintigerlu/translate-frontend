import {useNavigate, Navigate} from 'react-router-dom';
import{useEffect, useState} from 'react';

function Login(props) {
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  async function handleLogin(e){
    e.preventDefault()

    const form = e.target;
    
    console.log('form 0', form[0].value)
    console.log('form 1', form[1].value)
    const user = {
      username: form[0].value,
      password: form[1].value
    }
    try{
      console.log(user)
      const res = await fetch(props.URL+'users/login', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      })
      console.log('res: ', res)
      const data = await res.json()
      console.log('token: ', data);
      localStorage.setItem("token", data.token)
      setError(data.message)
    } catch(err){
      setError(err)
    }
  }
  
  useEffect(()=> {
    fetch(props.URL+'users/isUserAuth', {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.isLoggedIn){
          fetch(props.URL + `users/get/${data.username}`)
            .then(res => res.json())
            .then(userData => {
              console.log(userData);
              return props.setCurrentUser(userData);
            })
            .catch(err => console.log(error))
        }
      return data.isLoggedIn ? navigate('/'): null})
    .catch(err => setError(err))
  }, [error])

    return (
      <div>
        <form onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="username">Username: </label>
          <input id='username'  required type="username"/>
          <br></br>
          <label htmlFor="password">Password: </label>
          <input id="password" required type="password"/>
          <input type="submit" value="Submit"/>
        </form>
        {error === "Success" ? <Navigate to="/"/>: <div>{error}</div>}
      </div>
    )
  }
  
  export default Login;