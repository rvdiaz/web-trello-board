
export const getArrayRandom=(aux)=>{
    let list=[];
    for(let i=0;i<aux;i++){
        list.push(getRandomNumber(1,50));
    } 
    return list;
}

export const getRandomNumber=(min, max)=>{
    return Math.ceil(Math.random() * (max - min) + min);
}

export const getCardandListById=(id,list)=>{
    for(let i=0;i<list.length;i++){
        for(let j=0;j<list[i].arrayList.length;j++){
            if(list[i].arrayList[j].id===id){
                return {
                    card:list[i].arrayList[j],
                    list:list[i]
                };
            }
        }
    }
}