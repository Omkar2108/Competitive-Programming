const cansum =(target,nums) => {
    const arr=Array(target+1).fill(false);
    arr[0]=true;
    for(let i=0;i<=target;i++){
        if(arr[i]===true){
            for(let j=0;j<nums.length;j++){
                 arr[i+nums[j]]=true;
            }
        }
    }
    return arr[target];
}


console.log(cansum(7,[4,2,4]));
console.log(cansum(7,[1,2,3]))