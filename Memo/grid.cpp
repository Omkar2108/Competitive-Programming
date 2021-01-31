#include<bits/stdc++.h>
 
using namespace std; 
  
long grid (int m,int n,map<string,int> &k)
{
    string x= to_string(m)+','+ to_string(n);
    if(k.count(x))  return k[x];
    if(m==1 && n==1) return 1;
    if(m==0 || n==0) return 0;
    k.insert({x,grid(m-1,n,k)+grid(m,n-1,k)});
    return k[x];
}

int main()
{
    map<string,int> k;
    cout<<grid(2,3,k)<<endl;
    cout<<grid(6,6,k)<<endl;
    cout<<grid(18,18,k)<<endl;
    return 0;
}