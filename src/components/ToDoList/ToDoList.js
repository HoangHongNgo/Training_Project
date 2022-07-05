import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

export default function ToDoList({todoList, deleteTodo, doneTodo}) {
    const renderTodo = () => {
        return todoList.map((todo, index) => {
            return <ToDoItem deleteTodo={deleteTodo} doneTodo={doneTodo} todo={todo} key={todo.id} />
        })
    }

  return (
    <div style={{width: '60%'}}>
        <h2 style={{backgroundColor: '#3579B8', textAlign: 'center', marginBottom: 10}}>My todo list</h2>
        <div style={{backgroundColor: '#fbfbfb', padding: '20px 5px'}}>
            {renderTodo()}
        </div>
    </div>
  )
}
