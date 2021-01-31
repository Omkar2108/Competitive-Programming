const grid = (m,n) => {

    const a = Array(m+1).fill().map(()=> Array(n+1).fill(0));
    console.log(a);
    a[1][1]=1;
    for(let i=0;i<=m;i++){
        for(let j=0;j<=n;j++){
            if(j+1<=n) a[i+1][j] += a[i][j];
            if(i+1<=m) a[i][j+1] += a[i][j];
        }
    }
    return a[m][n];
}

console.log(grid(3,3));