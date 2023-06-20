import React from 'react'
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { addCardByIds } from '../../../slices/listSlice';
import {Card} from './Card';

export const CardDrop = ({id,photo,name,job}) => {
    const dispatch=useDispatch();

    const [collectedProps, drop] = useDrop(() => ({
        accept: "card",
        drop: (item,monitor) => addImageToBoard(item,monitor),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
        hover:(props,monitor)=>{
          console.log(name);
        }
      }));
    
      const addImageToBoard=(item,monitor)=>{  
        console.log(item.id);
        dispatch(addCardByIds({
          listIdDrop:id,
          cardId:item.id
         }))
      }

  return (
    <div ref={drop}>
      <Card
        photo={photo}
        name={name}
        job={job}
        id={id}
      />
    </div>
  )
}
