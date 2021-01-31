
const countcon =(target,strs,memo={}) =>{
    if(target in memo) return memo[target];
    if(target==="") return 1;
    
    let count=0;
    for(str of strs){
        if(target.indexOf(str)===0){
            const suff=target.slice(str.length);
            const total=countcon(suff,strs,memo);
            memo[target]=count;
            count+=total;
        }
    }
    memo[target]=count;
    return count;
}


console.log(countcon("purple",['purp','p','ur','le','purpl']));
console.log(countcon("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",['e','ee','eeeee','eeeeeeeeee']))
console.log(countcon("enterapotentpot",['a','p','ent','enter','ot','o','t']));