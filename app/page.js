'use client'
import { useEffect, useState } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { rl } from './firebase-config';

export default function Home() {
  const [msgs, setMsgs] = useState([])
  const [msg, setMsg] = useState('')
  const [username, setUsername] = useState('')
  useEffect(()=>{

    const messagesRef = ref(rl, 'messages');
    onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      if(messages){
      const messagesArray = Object.keys(messages).map(key => messages[key]);
      messagesArray.reverse();
      setMsgs(messagesArray)
      }
    }, {
      onlyOnce: false
    });


  }, [])

  function sendMessage() {
    if(msg){
    push(ref(rl, 'messages'), {
      username: username,
      text: msg
    });
    }
    setMsg('')
  }

  return (
    <div className='w-screen h-screen'>
      <input className='text-black' type='text' placeholder='Set Your Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
      <p>Username: {username}</p>
      <input className='text-black' type='text' placeholder='Send A Message' value={msg} onChange={(e)=>{setMsg(e.target.value)}}></input>
      <button onClick={sendMessage}>Send</button>
      {msgs.map(msg => (
        <div className='text-white text-xl border-2 border-white p-1 pl-2' key={msg.text}>{msg.username}: {msg.text}</div>
      ))}
    </div>
  );
}
