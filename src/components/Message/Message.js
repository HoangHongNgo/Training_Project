import React from 'react'
import Tooltip from '../Tooltip/Tooltip'
import style from './Message.module.css'

export default function Message({id, content, time}) {

    // const [isHover]

    const handleHoverMesage = () => {

    }

  return (
    <div onMouseOver={() => {}} className={style['message']}>
        <p>{content}</p>
        <Tooltip time={time} />
    </div>
  )
}
