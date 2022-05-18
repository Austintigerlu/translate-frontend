import React from 'react'

function Logout() {
    async function handleLogout(e){
        e.preventDefault();
        localStorage.removeItem('token');
        console.log(localStorage);
    }
    return (
        <div>
            <h1>Logout</h1>
            <button type="submit" onClick={(e) =>handleLogout(e)}>Logout</button>
        </div>
  )
}

export default Logout