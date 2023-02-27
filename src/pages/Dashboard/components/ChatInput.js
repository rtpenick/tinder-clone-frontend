import React, {useState} from 'react'

const ChatInput = () => {
  const [textarea, setTextarea] = useState("")
  return (
    <div className='chat-input'>
      <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}/>
      <button className='secondary-button'>Submit</button>
    </div>
  )
}

export default ChatInput