import React from 'react'
import { useParams } from 'react-router';
function Thread(props) {
  const {username} = useParams()
    // const displayMessages = messages.map((message) => {
    //     return (
    //       <div className={message.sender === currId ? 'left' : 'right'}>
    //         <h3>{message.content}</h3>
    //       </div>
    //     )
    //   })
    async function handleSubmit(e){
      e.preventDefault()
      const form = e.target;
      const message = {
        content: form[0].value,
        recipient: username,
        sender: props.currentUser.username
      }
      const res = await fetch(props.URL+`messages/${2}/new`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(message)
      })
      console.log('res: ', res)
      const data = await res.json();
    }
  return (
    <div>
      <h2>Thread</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" required></input>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Thread