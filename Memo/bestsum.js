const bestsum= (target,nums,memo={}) => {
    if(target in memo) return memo[target];
    if(target===0) return [];
    if(target<0) return null;

    let bestarr=null;

    for(let num of nums){
        const rem=target-num;
        const result=bestsum(rem,nums,memo);
        if(result !==null){
            const short=[...result,num];
            if(bestarr===null ||short.length < bestarr.length){
                bestarr=short;
            }
        }
    }

    memo[target]= bestarr;
    return memo[target];
};

console.log(bestsum(9,[5,3,4,7]));
console.log(bestsum(8,[1,4,5]));
console.log(bestsum(100,[1,25,10]));