# [Pivot Index](https://leetcode.com/problems/find-pivot-index/description/)

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

```java
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

```java
class Solution {
    public int pivotIndex(int[] nums) {
        int totalSum = 0;
            // Step 1: Calculate total sum of the array
        for (int num : nums) {
            totalSum += num;
        }

        int leftSum = 0;

        // Step 2: Iterate through the array to find pivot index
        for (int i = 0; i < nums.length; i++) {
            // Check if left sum equals right sum
            if (leftSum == totalSum - leftSum - nums[i]) {
                return i;
            }
            leftSum += nums[i];
        }

        // Step 3: No pivot index found
        return -1;
    }
}
```

Time : O(1)

Space: O(n)

EdgeCase :

1. [-1,-1,-1,-1,0,1]
