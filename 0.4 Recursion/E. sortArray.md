# [Sort and Array](https://leetcode.com/problems/sort-an-array/description/)

## Approach : Insertion Sort - TLE

```java
/**
 * Time : N2
 * Space : 1
 */
class Solution {
    public int[] sortArray(int[] nums) {
        int index = nums.length - 1;
        helper(nums, index);
        return nums;
    }

    private void helper(int[] nums, int index) {
        if (index == 0) {
            return;
        }

        helper(nums, index - 1);

        for (int i = index; i > 0; i--) {
            if (nums[i] < nums[i - 1]) {
                swap(nums, i, i - 1);
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}

```
