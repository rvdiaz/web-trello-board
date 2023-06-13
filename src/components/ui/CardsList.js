import React from 'react'
import { useSelector } from 'react-redux'

export const CardsList = () => {
  const {list}=useSelector((state)=>state.list);
  
  return (
    <div>
      {list.map((item,index)=>(
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  )
}
