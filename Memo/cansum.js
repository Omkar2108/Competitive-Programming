

const cansum =(target,nums,memo={})=> {
    if(target in memo) return memo[target];
    if(target===0) return true;
    if(target<0) return false;
    for(let num of nums){
        if(target%num===0) return true;
        let rem=target-num;
        if(cansum(rem,nums,memo)){
            memo[target]=true;
            return true;
        }
    }
    memo[target]=false;
    return false;
};

arr=[2,3,5,7];
console.log(cansum(1,arr));
console.log(cansum(300,[1,14]));