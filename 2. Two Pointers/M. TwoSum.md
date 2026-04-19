# [Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
w

```

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
```

```java
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hm = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int remain = target - num;

            if (hm.containsKey(remain)) {
                return new int[] { hm.get(remain), i };
            }

            hm.put(num, i);
        }

        return new int[0]; // Return empty array if no pair found
    }
}
```
