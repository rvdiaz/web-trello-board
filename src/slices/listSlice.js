import { createSlice } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';
import { dataDefault } from "../data/dataDefault";

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
            for(let i=0;i<=cardQuantityPerList.length;i++){
                let persons=[];
                for(let j=1;j<=cardQuantityPerList[i];j++){
                    const person={
                        id:count,
                        photo:`https://randomuser.me/api/portraits/med/men/${count}.jpg`,
                        name:faker.person.fullName(),
                        job:faker.person.jobTitle()
                    }
                    persons.push(person);
                    count++;
                }
                list.push(persons);
            }
            state.list=list;
        }
    }
})

export const {createLists} =listSlices.actions;

export default listSlices.reducer;