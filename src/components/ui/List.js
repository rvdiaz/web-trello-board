import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createLists } from '../../slices/listSlice';
import { CardsList } from './CardsList';

export const List = () => {
  const {list}=useSelector(state=>state.list);
  const dispatch=useDispatch();

  useEffect(() => {
      dispatch(createLists());
  }, [dispatch])
  return (
    <div className='listWrapper'>
        {list.map((list,index)=>(
            <CardsList
                listCards={list}
                key={index}
            />
        ))}
    </div>
  )
}
