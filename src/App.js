import logo from './logo.svg';
import './App.css';

import StudentTable from './components/StudentTable'
import ToDoApp from './components/TodoApp/ToDoApp';
import Message from './components/Message/Message';
import { useState } from 'react';


function App() {
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      content: 'abc xyz def',
      time: Date.now()
    },
    {
      id: 2,
      content: 'abc xyz def 2',
      time: Date.now()
    },
  ])

  const renderMessage = () => {
    return messageList.map((message, index) => {
      return <div key={message.id}>
        <Message {...message}  />
      </div>
    })
  }
  
  return (
    <div>
      {renderMessage()}
    </div>
  );
}

export default App;
