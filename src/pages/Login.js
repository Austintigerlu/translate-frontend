import {Link, useNavigate, Navigate} from 'react-router-dom';
import{useEffect, useState} from 'react';

function Login(props) {
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  async function handleLogin(e){
    e.preventDefault()

    const form = e.target;
    
    //console.log('form 0', form[0].value)
    //console.log('form 1', form[1].value)
    const user = {
      username: form[0].value,
      password: form[1].value
    }
    try{
      //console.log(user)
      const res = await fetch(props.URL+'users/login', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      })
      //console.log('res: ', res)
      const data = await res.json()
      //console.log('token: ', data);
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
        //console.log(data);
        if(data.isLoggedIn){
          fetch(props.URL + `users/get/${data.username}`)
            .then(res => res.json())
            .then(userData => {
              //console.log(userData);
              localStorage.setItem('user', userData)
              return props.setCurrentUser(userData);
            })
            .catch(err => console.log(error))
        }
      return data.isLoggedIn ? navigate('/'): null})
    .catch(err => setError(err))
  }, [error, navigate, props])

    return (
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Log in to your account</h1>
          <Link to="/register" className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">or register here</p>
          </Link>
          <form className="mt-8 space-y-6" onSubmit={(e) => handleLogin(e)}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only" htmlFor="username">Username: </label>
                <input 
                  id='username'  
                  required 
                  type="username" 
                  placeholder='Username'
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">Password: </label>
                <input 
                  id="password" 
                  required 
                  type="password" 
                  placeholder='Password'
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button
                type="submit" 
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >Login</button>
            </div>
          </form>
          {error === "Success" ? <Navigate to="/"/>: <div>{error}</div>}
        </div>
      </div>
    )
  }
  
  export default Login;