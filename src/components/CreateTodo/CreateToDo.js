import React, { useState } from 'react'
import Button from '../Button/Button'
import style from './CreateTodo.module.css'

export default function CreateToDo({addTodo}) {
    const [inputTodo, setInputTodo] = useState("")

    const clearAll = () => {
        setInputTodo("")
    }

  return (
    <div style={{width: 'calc(40% - 20px)'}}>
        <h2 style={{marginBottom: 20}}>Add new task:</h2>
        <input onChange={(e) => {setInputTodo(e.target.value)}} value={inputTodo} className={style['input-add-todo']} type={"text"} placeholder="Create todo here" />
        <div className={style['user-ctrl']}>
            <Button content={"Add"} styleBtn={{display: 'inline-block', padding: '5px 10px', color: 'white', backgroundColor: "#499B4A", margin: '0 3px', cursor: 'pointer'}} handler={() => {
                if(!!inputTodo) {
                    addTodo(inputTodo)
                    clearAll()
                }
                }} />
            <Button content={"Clear All"} styleBtn={{display: 'inline-block', padding: '5px 10px', color: 'white', backgroundColor: "#D55451", margin: '0 3px', cursor: 'pointer'}} handler={clearAll} />
        </div>
    </div>
  )
}
