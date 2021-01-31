#include<bits/stdc++.h>
 
using namespace std; 

unsigned long long fib(int m, vector <unsigned long long> &k)
{
    if(m<=k.size()) return k[m-1];
    m-=k.size();
    while(m--)
    {
        int n=k.size();
        k.push_back(k[n-1]+k[n-2]);
    }
    return k[k.size()-1];
}

int main()
{
    vector <unsigned long long> k;
    k.push_back(1);
    k.push_back(1);
    int m,n,o;
    cin>>m>>n>>o;
    cout<<fib(m,k)<<endl;
    cout<<fib(n,k)<<endl;
    cout<<fib(o,k)<<endl;
    int i=1;
    for(auto x:k)
        cout<<i++<<"  "<<x<<endl;
    return 0;
}