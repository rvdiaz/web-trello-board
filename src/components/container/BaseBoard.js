import React from 'react'

export const BaseBoard = (props) => {
  return (
    <div className='baseContainer'>
         <div className='boardContainer'>
            {props.children}
        </div>
    </div>
  )
}
