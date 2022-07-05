import React from 'react'
import Button from '../Button/Button'

export default function ToDoItem({todo, deleteTodo, doneTodo}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 15}}>
        <p style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>{todo.task}</p>
        <div>
            <Button disabled={todo.isComplete} content={"Done"} styleBtn={{display: 'inline-block', padding: '5px 10px', color: 'white', backgroundColor: "#499B4A", margin: '0 3px', cursor: 'pointer'}} handler={() => {doneTodo(todo.id)}} />
            <Button content={"Delete"} styleBtn={{display: 'inline-block', padding: '5px 10px', color: 'white', backgroundColor: "#D55451", margin: '0 3px', cursor: 'pointer'}} handler={() => {deleteTodo(todo.id)}} />
        </div>
    </div>
  )
}
