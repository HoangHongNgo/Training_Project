import React from 'react'

export default function Tooltip({time}) {
    // const currentTime = () => {
    //   let min = (Date.now() - time)/1000/60
    //   if (min < 60)
    //   return Math.round(min) + 'min';
    //   if (min < 1440)
    //   return Math.round(min/60) + 'hour';
    //   else return 'days'
    // } 
      let currentTime
      let min = (Date.now() - time)/1000/60
      if (min < 60)
      currentTime = Math.round(min) + 'mins ago'
      else if (min < 1440)
      currentTime = Math.round(min/60) + 'hours ago'
      else if (min < 10080) currentTime =  Math.round(min/60/24) + 'days ago'
      else currentTime = time.toLocaleString()
  return (
    <div>{currentTime}</div>
  )
}
