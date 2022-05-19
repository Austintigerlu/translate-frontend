import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './IM.css'
function IM(props) {
  let displayMessages = '';
  const [messages, setMessages] = useState([])
  function getMessages(){
  console.log(props.URL+`messages/${props.currentUser._id}`)
  fetch(props.URL+`messages/${props.currentUser._id}`, {
  })
    .then(res => {
      console.log(res)
      return res.json()})
    .then(data => {
      console.log(data)
      setMessages(data)})
    .catch(err => console.log(err))
    
  }
  useEffect(() => getMessages(), [])
  // let currentTime = Date()
  // messages.sort((a, b) => (a.createdAt - currentTime) (b.createdAt - currentTime));

  if(messages){
     displayMessages = messages.map((message) => {
      return (<div className=''>
        <Link to={`/IM/${message.recipient._id}`}>
          <h3>{message.recipient.username === props.currentUser.username ? message.sender.username : message.recipient.username}</h3>
        </Link>
      </div>)
    })
  }
  return (
    <div className='IM'>
      <div className='header-tag'>
        <h1>Scarknight</h1>
      </div>
      <div className='message-display'>
        {displayMessages}
      </div>
    </div>
  )
}
  
  export default IM;