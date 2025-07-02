# [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

Given an integer array nums, find the subarray with the largest sum, and return its sum.
```
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```
## Approach : Greedy
```java
/**
 * Intitution : Adding element to sum, if sum becomes negative then its better to drop previous element and start a new subarray
 * Time : O(N)
 * Space : O(1)
 */
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length; 
        
        int max = nums[0];   
        int sum = 0;         
        
        for (int i = 0; i < n; i++) {
            sum += nums[i];  
            
            max = Math.max(sum, max);
            
            // If current sum becomes negative, reset it to 0
            // because negative sum will reduce future subarrays
            if (sum < 0) {
                sum = 0;
            }
        }
        
        return max;
    }
}

```