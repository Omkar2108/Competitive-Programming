const grid=(m,n,memo={}) =>{
    const key=m+','+n;
    if(key in memo) return memo[key];
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    memo[key]=grid(m-1,n,memo)+grid(m,n-1,memo);
    return memo[key];
};

console.log(grid(6,6));
