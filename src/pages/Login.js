
import{useEffect} from 'react';

function Login(props) {

  function handleLogin(e){
    e.preventDefault()

    const form =e.target;
    const user = {
      username: form[0].value,
      password: form[1].value
    }

    fetch(props.URL+'users/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token)
    })
  }

  useEffect(()=> {
    fetch(props.URL+'users/isUserAuth', {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => data.isLoggedIn)
  }, [props.URL])

    return (
      <form onSubmit={e => handleLogin(e)}>
        <label for="username">Username: </label>
        <input id='username' required type="username"/>
        <br></br>
        <label for="password">Password: </label>
        <input id="password" required type="password"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
  
  export default Login;