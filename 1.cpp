#include<bits/stdc++.h>
 
using namespace std; 
  
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        unsigned long long n,k;
        cin>>n>>k;
        if(n==1)
            cout<<k<<endl;
        else if(n==k)
            cout<<1<<endl;
        else
        {
            int tar=k;
            if(n>k)
            {
                if(n%k==0)
                {
                    cout<<1<<endl;
                }
                else
                {
                    cout<<2<<endl;
                }
                
            }
            else
            {
                for(long i=2;;i++)
                {
                    if((n*i)>=tar)
                    {
                        cout<<i<<endl;
                        break;
                    }
                }
            }
            
        }   
        
    }
    return 0;
}