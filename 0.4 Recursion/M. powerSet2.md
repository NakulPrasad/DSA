[Power Set 2](https://leetcode.com/problems/subsets/description/)

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]
```

```
Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
```

## Approach : Recursion


### Intitution


```java
class Solution {
     public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> output = new ArrayList<>();
        helper(nums, output, ans);
        return ans;
    }

    private void helper(int[] input, List<Integer> output, List<List<Integer>> ans) {
        if (input.length == 0) {
            ans.add(output);
            return;
        }

        List<Integer> out1 = new ArrayList<>(output);
        List<Integer> out2 = new ArrayList<>(output);

        out1.add(input[0]);
        int newInput[] = Arrays.copyOfRange(input, 1, input.length);

        helper(newInput, out1, ans);
        helper(newInput, out2, ans);

    }
}
```
