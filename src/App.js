import logo from './logo.svg';
import './App.css';

import StudentTable from './components/StudentTable'
import ToDoApp from './components/TodoApp/ToDoApp';
import Message from './components/Message/Message';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { useFormik } from 'formik';
import { getAllByPlaceholderText } from '@testing-library/react';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEdit, setIdEdit] = useState();
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      content: 'Xin chào',
      time: new Date(2021, 6, 3, 11, 30)
    },
    {
      id: 2,
      content: 'Xin chào',
      time: new Date(2022, 6, 3, 11, 30)
    },
    {
      id: 3,
      content: 'Ban ơi ?',
      time: new Date(2022, 6, 5, 11, 30)
    },
    {
      id: 4,
      content: 'Sao bạn không rep tin nhắn tôi ?',
      time: new Date(2022, 6, 5, 13, 30)
    },
  ])
  const showModal = (id) => {
    setIsModalVisible(true);
    setIdEdit(id);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderMessage = () => {
    return messageList.map((message, index) => {
      return <div key={message.id} onClick={() => showModal(message.id)}>
        <Message {...message} onClick={showModal} />
      </div>
    })
  }

  const formik = useFormik({
    initialValues: {
      id: 0,
      edit: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))

    },
  });
  
  return (
    <div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">Edit</label>
       <input
         type="text"
         onChange={formik.handleChange}
         value={formik.values.edit}
         name='edit'
       />
       <button type="submit">Submit</button>
     </form>
      </Modal>
      {renderMessage()}
    </div>
  );
}

export default App;
