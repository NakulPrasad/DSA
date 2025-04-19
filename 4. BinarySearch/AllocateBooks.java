class Solution 
{
    //Function to find minimum number of pages.
    public static int findPages(int[]pages,int n,int s)
    {
        int sum=0;
        if(n<s)
            return -1;
        int max=pages[0];
        for(int i=0;i<n;i++){
            sum+=pages[i];
            max=(pages[i]>max ? pages[i]:max);
        }
        int low=findMax(pages,n),high=sum,mid=0;
        int res=Integer.MAX_VALUE;
        while(low<=high){
            mid=low+(high-low)/2;
            if(isPossible(pages,n,s,mid)){
                res=mid;
                high=mid-1;
            }
            else
                low=mid+1;
        }
        return res;
    }
        
    static boolean isPossible(int pages[], int n,int s,int curr_min){
        int studReq=1;
        int curr_sum=0;
        for(int i=0;i<n;i++){
            curr_sum+=pages[i];
            if(curr_sum>curr_min){
                studReq++;
                curr_sum=pages[i];
            }
        }
        return studReq<=s;
    }
    static int findMax(int pages[],int n){
        int temp=pages[0];
        for(int i=0;i<n;i++){
            if(pages[i]>temp)
                temp=pages[i];
        }
        return temp;
    }
};