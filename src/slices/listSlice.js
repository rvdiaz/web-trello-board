import { createSlice } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';
import { dataDefault } from "../data/dataDefault";
import { getCardById } from "../helpers/helpers";

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
            const {listIdDrop,cardId}=action.payload;
            const card=getCardById(cardId,state.list);
            
        },
        removeCardById(state,action){

        }
    }
})

export const {createLists,addCardByIds} =listSlices.actions;

export default listSlices.reducer;