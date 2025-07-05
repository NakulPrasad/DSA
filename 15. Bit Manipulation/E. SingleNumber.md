# [Single Number](https://leetcode.com/problems/single-number/description/)

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

```
Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4
```

```java
/** 
 * Intitution : Take xor or all, same number cancels the xor leaves the element that occured only once.
 * Time : N
 * Space : 1
*/
class Solution {
    public int singleNumber(int[] arr) {
         int ans = 0;
        for(int i : arr){
            ans ^= i;
        }
        return ans;
    }
}
```