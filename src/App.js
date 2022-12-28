import React, { useEffect, useState } from 'react';
import { Button , FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './message';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [Messages, setMessages] = useState([]);
  const [Username, setUsername] = useState('');

  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    })
  } , [])
  useEffect(() => {
    setUsername(prompt('Please Enter your Name'))
  }, [] )

  

  const Sendmessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({username: Username , text: input , timestamp: firebase.firestore.FieldValue.serverTimestamp()});
    //setMessages([...Messages, {username: Username, text: input}]);
    setInput('');
  }
  function Refershpage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <img src='https://image.freepik.com/free-vector/illustration-speech-bubble_53876-5625.jpg' onClick={Refershpage}/>
      <form className="app__form">
      <FormControl className='app__formcontrol'>
        <Input className='app__input' placeholder='Enter the message...' value={input} onChange={event => setInput(event.target.value)}/>
        <Button className='app__button' disabled={!input} variant='contained' color='primary' type='submit' onClick={Sendmessage}>
        Send
        </Button>
      </FormControl>
      
      </form>
      
      <FlipMove>
      {
        Messages.map( ({id , message}) => (
          <Message key={id} Usernam={Username} text={message} />
        ))
      }
      </FlipMove>


    </div>
  );
}

export default App;
