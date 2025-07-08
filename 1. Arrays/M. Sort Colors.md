# [Sort Colors](https://leetcode.com/problems/sort-colors/description/)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

```
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
```

```
Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
```

```java
class Solution {
    public void sortColors(int[] nums) {
        // Pointer for next position of 0
        int red = 0;

        // Pointer for current element
        int white = 0;

        // Pointer for next position of 2
        int blue = nums.length - 1;

        // Traverse the array
        while (white <= blue) {
            if (nums[white] == 0) {
                // Swap current element with red pointer
                swap(nums, white, red);
                red++;
                white++;
            } else if (nums[white] == 1) {
                // Just move the white pointer ahead
                white++;
            } else {
                // nums[white] == 2
                // Swap current element with blue pointer
                swap(nums, white, blue);
                blue--;
                // Don't increment white, as the swapped element needs to be checked
            }
        }
    }

    // Simple swap helper function
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}

```