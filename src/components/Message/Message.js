import React from 'react'
import Tooltip from '../Tooltip/Tooltip'
import style from './Message.module.css'


export default function Message({id, content, time, showModal}) {

  return (
    <div className={style['message']} onClick={showModal}  >
        <p>{content}</p>
        <div className={style['tooltip']} ><Tooltip  time={time}/></div>
    </div>
  )
}
