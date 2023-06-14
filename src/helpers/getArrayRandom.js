import { getRandomNumber } from "./getRandomNumbers";

export const getArrayRandom=(aux)=>{
    let list=[];
    for(let i=0;i<aux;i++){
        list.push(getRandomNumber(1,50));
    } 
    return list;
}