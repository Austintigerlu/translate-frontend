import {Navigate} from 'react-router-dom';
import{useState} from 'react';

function UpdateProfile(props) {
  const [error, setError] = useState(null)

  const currentUser = props.currentUser
  async function handleUpdateProfile(e){
    e.preventDefault()

    const form = e.target;
    
    const user = {
      name: form[0].value,
      username: form[1].value,
      email: form[2].value,
      profilePic: form[3].value
    }
    try{
      //console.log(user)
      const res = await fetch(props.URL+`users/${props.currentUser._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      })
      //console.log('res: ', res)
      const data = await res.json()
      setError(data.message)
    } catch(err){
      setError(err)
    }
  }
return (
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 md:mt-5 ml-5 border-solid border-4 border-black">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg text-center font-medium text-gray-900">Profile</h3>
              <p className="mt-1 ml-5 text-sm text-gray-600">Name: {currentUser.name}</p>
              <p className="mt-1 ml-5 text-sm text-gray-600">Username: {currentUser.username}</p>
              <p className="mt-1 ml-5 text-sm text-gray-600">Email: {currentUser.email}</p>
              <p className="mt-1 ml-5 text-sm text-gray-600">Profile Picture: <img src={currentUser.profilePic} alt={currentUser.profilePic}/></p>
            </div>
          </div>
          <div className="mt-5 md:mt-5 mr-5 md:col-span-2 border-solid border-4 border-black">
        <form onSubmit={(e) => handleUpdateProfile(e)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" required name="name" id="name" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' placeholder={currentUser.name}>
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700"> Username </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="username" id="username" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' placeholder={currentUser.username}>
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="email" id="email" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' placeholder={currentUser.email}>
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700"> Profile Picture </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="profilePic" id="profilePic" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' placeholder={currentUser.profilePic}>
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Submit"
        className="group relative w-full flex justify-center
        py-2 px-4 border border-transparent text-sm font-medium
         text-white bg-blue-600 hover:bg-indigo-700"
        />
        </form>
        {error === "Success" ? <Navigate to="/"/>: <div>{error}</div>}
          </div>
      </div>
      </div>
    )
}
  
  export default UpdateProfile;