const bestsum = (target,nums)=>{
    const ans=Array(target+1).fill(null);
    ans[0]=[];

    for (let i=0;i<=target;i++){
        if(ans[i]!==null){
            for(let num of nums){
                const result=[...ans[i],num];
                if(!ans[i+num] || ans[i+num].length > result.length)
                    ans[i+num]=result;
            }
        }
    }
    return ans[target];
}


console.log(bestsum(8,[2,5,3]));
console.log(bestsum(100,[1,25,10]));