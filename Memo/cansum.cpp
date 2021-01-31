#include<bits/stdc++.h>
 
using namespace std; 

bool cansum(int target,int a[],int n)
{
    if(target==0) return true;
    if(target<0) return false;
    for(int i=0;i<n;i++)
    {
       int rem=target-a[i];
       if(cansum(rem,a,n)==true)
       {
           return true;
       }
    }

    return false;
}

int main()
{
    int a[]={7,14};
    int n = sizeof(a)/sizeof(a[0]);
    auto srt=clock();
    cout<<cansum(300,a,n);
    auto sp=clock();
    cout<<endl<<float(sp-srt)/CLOCKS_PER_SEC;
    return 0;
}