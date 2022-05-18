import {useNavigate, Navigate} from 'react-router-dom';
import{useEffect, useState} from 'react';

function UpdateProfile(props) {
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  async function handleUpdateProfile(e){
    e.preventDefault()

    const form = e.target;
    
    console.log('form 0', form[0].value)
    console.log('form 1', form[1].value)
    const user = {
      username: form[0].value,
      email: form[1].value
    }
    try{
      console.log(user)
      const res = await fetch(props.URL+`users/updateprofile/${props.currentUser._id}`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      })
      console.log('res: ', res)
      const data = await res.json()
      setError(data.message)
    } catch(err){
      setError(err)
    }
  }
    return (
      <div>
        <form onSubmit={(e) => handleUpdateProfile(e)}>
          <label htmlFor="username">Username: </label>
          <input id='username'  required type="username"/>
          <br></br>
          <label htmlFor="email">Email: </label>
          <input id="email" required type="email"/>
          <input type="submit" value="Submit"/>
        </form>
        {error === "Success" ? <Navigate to="/"/>: <div>{error}</div>}
      </div>
    )
  }
  
  export default UpdateProfile;