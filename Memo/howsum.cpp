#include<bits/stdc++.h>
 
using namespace std; 
  
vector<int> howsum(int target,vector<int> &nums)
{
    if(target==0) return {};
    if(target<0) return ;

    for(auto x:nums){
        int rem=target-x;
        vector<int> result=howsum(rem,nums);
        if(!result.empty())
        {
            result.push_back(x);
            return result;
        }
    }
    return {};
}

int main()
{
    vector<int> k={2,3};
    vector<int> res=howsum(8,k);
    for(auto x:res)
        cout<<x<<endl;
    return 0;
}