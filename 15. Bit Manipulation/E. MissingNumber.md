# [Missing Number](https://leetcode.com/problems/missing-number/description/)

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

```
Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

```java
/**
 * Intitution: Taking xor of same number cancel each other
 * Complexity: Time : O(2N), Space : O(1)
 *
 */

class MissingNumber {
    public int missingNumber(int[] nums) {
        int xor = 0;
        for(int i: nums){
            xor ^= i;
        }
        for(int i=0;i<=nums.length;i++){
            xor ^= i;
        }
        return xor;
    }
}
```
