import React, { useState } from 'react'

export default function Student({id, firstName, lastName, isAssign, setListChecking, listChecking}) {
    const [isCheck, setCheck] = useState(isAssign)
    const handleChange = (e) => {
        if(!isCheck) {
            setCheck(true)
            setListChecking([...listChecking, id])
        }
        else {
            setCheck(false)
            setListChecking(listChecking.filter(item => item !== id))
        }
    }

  return (
    <tr style={{textAlign: 'center'}}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td><input onChange={handleChange} type={"checkbox"} disabled={isAssign} checked={isCheck}/></td>
    </tr>
  )
}
