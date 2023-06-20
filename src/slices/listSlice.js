import { createSlice } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';
import { dataDefault } from "../data/dataDefault";
import { getCardandListById } from "../helpers/helpers";

const initialState = {
    list: [],
    error:null
  }

const listSlices=createSlice({
    name:'list',
    initialState,
    reducers:{
        createLists(state){
            let list=[];
            const {cardQuantityPerList}=dataDefault;
            let count=1;
            for(let i=0;i<cardQuantityPerList.length;i++){
                let persons=[];
                for(let j=1;j<cardQuantityPerList[i];j++){
                    const person={
                        id:count,
                        photo:`https://randomuser.me/api/portraits/med/men/${count}.jpg`,
                        name:faker.person.fullName(),
                        job:faker.person.jobTitle()
                    }
                    persons.push(person);
                    count++;
                }
                
                let titleList=faker.company.name();
                list.push({
                    id:i,
                    title:titleList,
                    arrayList:persons
                });
            }
           
            state.list=list;
            
        },
        addCardByIds(state,action){
           const {listIdDrop,cardId,position}=action.payload;
           const {card,list}=getCardandListById(cardId,state.list);
           const cardList=[...state.list[listIdDrop].arrayList];
           if(list.id!==listIdDrop){
            cardList.splice(position,0,card);
            state.list[listIdDrop].arrayList=cardList;
            
            const deleteInList=[...state.list[list.id].arrayList];
            const cardDeletedList=deleteInList.filter(item=>item.id!==cardId);
            state.list[list.id].arrayList=cardDeletedList;
            }else if(card.id!==cardId){
                const aux=cardList.filter(item=>item.id!==cardId);
                aux.slice(position,0,card);
                state.list[listIdDrop].arrayList=aux;
            }
        },
        removeCardById(state,action){
            console.log(action.card);
        }
    }
})

export const {createLists,addCardByIds} =listSlices.actions;

export default listSlices.reducer;