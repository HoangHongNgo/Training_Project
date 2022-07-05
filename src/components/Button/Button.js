import React from 'react'

export default function Button({content, styleBtn, handler, disabled}) {
  return (
    <div disabled onClick={handler} style={styleBtn}>{content}</div>
  )
}
