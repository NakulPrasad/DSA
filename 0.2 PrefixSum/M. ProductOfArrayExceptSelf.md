# [Product of array except self](https://leetcode.com/problems/product-of-array-except-self/description/)

Given an integer array nums, return an array answer such that answer[i] is eal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```java
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
### Approach : Prefix Sum

```java
/**
 * Intitution : 
 * Time : O(3N)
 * Space : O(2N)
 * 
*/

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int [] prefixLeft = new int[n];
        int [] prefixRight = new int[n];
        int [] ans = new int[n];
        Arrays.fill(prefixLeft, 1);
        Arrays.fill(prefixRight, 1);
        for(int i=1; i<n;i++){
            prefixLeft[i] = prefixLeft[i-1] * nums[i-1];
        }
        for(int i=n-2; i>=0;i--){
            prefixRight[i] = prefixRight[i+1] * nums[i+1];
        }
        // System.out.println(Arrays.toString(prefixLeft));
        // System.out.println(Arrays.toString(prefixRight));
        

        for(int i=0;i<n;i++){
            ans[i] = prefixLeft[i] * prefixRight[i];
        }
        return ans;

    }
}
```
