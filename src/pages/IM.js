import './IM.css'
function IM() {
    const currId = "1234"
    const messages = [{
      content: 'hey',
      sender: "1254"
      },
      {
        content: 'hello how are you',
        sender: "1234"
      },
      {
        content: "I'm good how are you",
        sender: '1254'
      }
    ]
    const displayMessages = messages.map((message) => {
      return (
        <div className={message.sender === currId ? 'left' : 'right'}>
          <h3>{message.content}</h3>
        </div>
      )
    })
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