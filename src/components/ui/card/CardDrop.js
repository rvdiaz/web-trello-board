import React from 'react'
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { addCardByIds } from '../../../slices/listSlice';
import {Card} from './Card';
import { CardPreview } from './CardPreview';

export const CardDrop = ({id,photo,name,job,listId,position}) => {
    const dispatch=useDispatch();
   
    const [{isOver}, drop] = useDrop(() => ({
        accept: "card",
        drop: (item,monitor) => addImageToBoard(item,monitor),
        collect: (monitor) => ({
          isOver: monitor.isOver()
        }),
        hover:({id,idList},monitor)=>{
          
        }
      }));
    
      const addImageToBoard=({id,idList},monitor)=>{  
        if(id){
          dispatch(addCardByIds({
              listIdDrop:listId,
              cardId:id,
              position:position
          })) 
        }
      }
     
  return (
    <div ref={drop}>
      {isOver && <CardPreview/>}
      <Card
        photo={photo}
        name={name}
        job={job}
        id={id}
        idList={listId}
      />
    </div>
  )
}
