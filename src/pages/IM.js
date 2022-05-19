import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './IM.css'
import Thread from '../components/Thread'
function IM(props) {
  let displayMessages = [];
  const [messages, setMessages] = useState([])
  const [anything, setAnything] = useState([])
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
  function handleClick(i, arr){
    const display = []
    display.push(<h3>{i}</h3>)
    for(let idx of arr){
      display.push(<div className={idx.type === 'outgoing' ? 'left' : 'right'}>{idx.content}</div>)
    }
    display.push(<Thread currentUser={props.currentUser} URL={props.URL} username={i} />)
    setAnything(display)
  }
  useEffect(() => {
    if(props.currentUser)
      getMessages()
    }, 
  [])
  // let currentTime = Date()
  // messages.sort((a, b) => (a.createdAt - currentTime) (b.createdAt - currentTime));

  if(messages){
    const threads = {}
    for(let i of messages){
      if(i.recipient._id !== props.currentUser._id){
        if(i.recipient.username in threads){
          threads[i.recipient.username].push({type: 'outgoing', createdAt: i.createdAt, content : i.content})
        }
        else{
          threads[i.recipient.username] = [{type: 'outgoing', createdAt: i.createdAt, content : i.content}]
        }
      }
      else{
        if(i.sender.username in threads){
          threads[i.sender.username].push({type: 'incoming', createdAt: i.createdAt, content : i.content})
        }
        else{
          threads[i.sender.username] = [{type: 'incoming', createdAt: i.createdAt, content : i.content}]
        }
      } 
    }
    console.log(threads);
    for(let i in threads){
      displayMessages.push(
      <div onClick={() => handleClick(i, threads[i])}>
        <h3>{i}</h3>
      </div>
      )
    }
  }
  return props.currentUser ? (
    <div className='IM'>
      <div className='side-bar'>
        {displayMessages}
      </div>
      <div className='message-display'>
        <div className='header-tag'>
          <h1>Scarknight</h1>
        </div>
        <div className='messages-container'>
          {anything}
        </div>
      </div>
    </div>
  ) : <h2>You need to sign in to access this page</h2>
}
  
  export default IM;