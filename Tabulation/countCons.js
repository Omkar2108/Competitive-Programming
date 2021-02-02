const countcon= (target,strs)=>{
    const table=Array(target.length+1).fill(0);
    table[0]=1;

    for(let i=0;i<=target.length;i++){
        if(table[i]>0){
            for(let str of strs){
                if(target.slice(i,i+str.length)===str){
                    table[i+str.length]+=table[i];
                }
            }
        }
    }
    return table[target.length];
};

console.log(countcon("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countcon("purple",['purp','p','ur','le','purpl']));
console.log(countcon("skateboard",['bo','rd','ate','t','ska','sk','boar']));
console.log(countcon("enterapotentpot",['a','p','ent','enter','ot','o','t']));
console.log(countcon("eeeeeeeeeef",["e","ee","eee","eeeeeeeee"]));