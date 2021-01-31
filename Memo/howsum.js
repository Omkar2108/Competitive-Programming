const howsum = (target,numbers,memo= {}) => {
    if(target in memo) return memo[target];
    if(target===0) return [];
    if(target < 0) return null;

    for(let num of numbers){
        const rem=target-num;
        result={}
        result= howsum(rem,numbers,memo);
        if(result !== null){
            memo[target]=[...result,num];
            return memo[target];
        }
    }
    memo[target]=null;
    return null;
}

console.log(howsum(100,[3,1,2,3]));