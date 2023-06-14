import React from 'react'

export const HeaderCard = (props) => {
  const {job}=props;
  return (
    <div className=''>
      <h2 className='cardHeaderTitle paddingCard' >
        {job}
      </h2>
    </div>
  )
}
