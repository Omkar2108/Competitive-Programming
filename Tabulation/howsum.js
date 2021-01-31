const howsum=(target,nums) =>{
    const ans = Array(target+1).fill(null);
    ans[0]=[];

    for(let i=0;i<=target;i++){
        if(ans[i]!==null){
            for(let num of nums){
                 ans[i+num]=[...ans[i],num];
            }
        }
    }
    return ans[target];
}

console.log(howsum(7,[2,3]));
console.log(howsum(300,[7,14]));