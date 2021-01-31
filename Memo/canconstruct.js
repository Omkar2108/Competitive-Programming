const cancon=(target,strs,memo={})=>{

    if(target in memo) return memo[target];

    if(target === '') return true;
    for(let str of strs){
        if(target.indexOf(str)===0) {
            const suf=target.slice(str.length);
            if(cancon(suf,strs,memo)===true){
                memo[target]=true;
                return true;
            }
        }
    }
    memo[target]=false;
    return false;
};


console.log(cancon("abcdef",["ab","abc","cd","def","abcd"]));
console.log(cancon("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(cancon("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee",,"eee","eeeeeeeee"]));