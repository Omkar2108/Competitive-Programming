const cancon= (target,strs) =>{
    const table =Array(target.length+1).fill(false);
    table[0]=true;
    for(let i=0;i<=target.length;i++){
        if( table[i] === true ) {
            for(let str of strs){
                if(target.slice(i,i+ str.length)===str){
                    table[i+str.length]=true;
                }
            }
        }
    }
    return table[target.length];
};


console.log(cancon("abcdef",["ab","abc","cd","def","abcd"]));
console.log(cancon("skateboard",['bo','rd','ate','t','ska','sk','boar']));
console.log(cancon("enterapotentpot",['a','p','ent','enter','ot','o','t']));
console.log(cancon("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeg",["e","ee","eee","eeeeeeeee"]));