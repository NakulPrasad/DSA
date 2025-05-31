# Binary Search on Answers
Earlier, we know binary search is applied only on sorted arrays, but in some cases this can be applied to unsorted arrays.

We use some break condition instead of (arr[mid] == target)

# [Peak Element](https://leetcode.com/problems/find-peak-element/description/)

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

```java
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```
![image](images/peak_element-0.jpg)

```java
class Solution {
    public int findPeakElement(int[] nums) {
        int start = 0;
        int end = nums.length-1;
        if (end == 0) return 0;
        while(start<=end){
            int mid = start + (end-start)/2;
            if(mid>0 && mid<nums.length-1){//handle boundary indexes
                if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
                    return mid;
                }
                else if(nums[mid+1]>nums[mid]){
                    start = mid+1;
                }
                else 
                    end = mid-1;
            }
            //boundary cases
            else if(mid ==0){
                if(nums[0] > nums[1])
                return 0;
                else 
                return 1;
            }
            else if(mid == nums.length-1){
                if(nums[nums.length-1] > nums[nums.length-2])
                return nums.length-1;
                else 
                return nums.length-2;
            }

        }
            return -1;
    }
}
```
