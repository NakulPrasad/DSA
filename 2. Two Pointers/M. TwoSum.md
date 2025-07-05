# Two Sum

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

# [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

Same as two sum but wihout using hashmap

``` 
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```
## Approach : Two Pointers
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        /**
            Approach : Two Pointers
            Intitution: nums[l] + nums[r] == target, if sum exceeds target, take sum with an element before, vice versa.
            Time : O(N)
            Space : O(1)

         */
        int n = numbers.length-1;
        int l = 0;
        int r = n;
        while (l<r){
            if(numbers[l] + numbers[r] == target){
                return new int[]{l+1, r+1};
            }
            else if(numbers[l] + numbers[r] > target){
                r--;
            }
            else {
                l++;
            }
        }
        //if not found 
        return new int[0];
    }
}
```