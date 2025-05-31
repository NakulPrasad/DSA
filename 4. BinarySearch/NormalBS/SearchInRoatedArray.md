# Search In Rotated Sorted Array

```java
class Solution {
    public int search(int[] nums, int target) {
        int minI =-1;
        int min = Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            if(nums[i]<min){
                minI = i;
                min = nums[i];
            }
        }
        int leftSearch = BinarySearch(0, minI-1, nums, target);
        System.err.println(leftSearch);
        int rightSearch = BinarySearch(minI, nums.length-1, nums, target);
        
        if(leftSearch ==-1)
        return rightSearch;

        return leftSearch;
        

    }
    int BinarySearch(int l, int r, int[] nums, int target){
        while(l<=r){

        int mid = l + ((r-l)/2);
            if(nums[mid]==target){
                return mid;
            }
            else if(nums[mid] > target){
                r = mid-1;
            }
            else if(nums[mid]<target){
                l = mid+1;
            }
        }
        return -1;
    }
}
```