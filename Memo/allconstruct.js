const allcon = (target , strs,memo={}) =>{

    if(target in memo) return memo[target];
    if(target === "") return [[]];

    let total=[];

    for(let str of strs){
        if(target.indexOf(str)===0){
            const suff=target.slice(str.length);
            const result=allcon(suff,strs,memo);
            const final=result.map(s=>[str,...s]);
            total.push(...final);
        }
    }
    memo[target]=total;
    return total;
};


console.log(allcon("purple",['purp','p','ur','le','purpl']));
console.log(allcon("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees",['e','eee','ee','eeeeee']));

