const allcon = (target , strs) =>{
    const table=Array(target.length+1)
    .fill()
    .map(() => []);

    table[0]=[[]];

    for(let i=0;i<=target.length;i++){
        for(let str of strs){
            if(target.slice(i,i+str.length)===str){
               const result= table[i].map(sub => [...sub,str]);
               table[i+str.length].push(...result);
            }
        }
    }
    return table[[target.length]];
}

console.log(allcon("abcdef",["ab","abc","cd","def","abcd",'ef','c']));
console.log(allcon("purple",['purp','p','ur','le','purpl']));
console.log(allcon("skateboard",['bo','rd','ate','t','ska','sk','boar']));
console.log(allcon("enterapotentpot",['a','p','ent','enter','ot','o','t']));
// console.log(allcon("eeeeeeeeeef",["e","ee","eee","eeeeeeeee"]));