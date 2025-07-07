# [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 
```java
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1
```
![image](NormalBS/Learning/BS_7.0.jpg)
![image](NormalBS/Learning/BS_7.1.jpg)

```java
/**
 * Time : logn
 * Space : 1
 */
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
        // System.err.println(leftSearch);
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