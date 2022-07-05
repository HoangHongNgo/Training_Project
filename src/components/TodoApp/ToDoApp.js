import React, { useState } from 'react'
import CreateToDo from '../CreateTodo/CreateToDo'
import ToDoList from '../ToDoList/ToDoList'

export default function ToDoApp() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            task: "todo 1",
            isComplete: false
        },
        {
            id: 2,
            task: "todo 2",
            isComplete: false
        },
        {
            id: 3,
            task: "todo 3",
            isComplete: false
        },
    ])

    const addTodo = ( todoContent ) => {
        const newTodo = {
            id: Date.now(),
            task: todoContent,
            isComplete: false
        }
        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const doneTodo = (id) => {
        const todoListClone = [...todoList]
        const index = todoListClone.findIndex(todo => todo.id === id)
        todoListClone[index].isComplete = true
        setTodoList(todoListClone)
    }

  return (
    <div>
        <h1 style={{backgroundColor: '#DEF0D6', textAlign: 'center', marginBottom: 20}}>My Todo App</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 10px'}}>
            <CreateToDo addTodo={addTodo} />
            <ToDoList todoList={todoList} deleteTodo={deleteTodo} doneTodo={doneTodo} />
        </div>
    </div>
  )
}
