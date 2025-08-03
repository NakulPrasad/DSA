# [Maximum sum circular subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/description/)

Given a **circular integer array** `nums` of length `n`, return _the maximum possible sum of a non-empty **subarray** of _`nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

**Example 1:**

    Input: nums = [1,-2,3,-2]Output: 3Explanation: Subarray [3] has maximum sum 3.

**Example 2:**

    Input: nums = [5,-3,5]Output: 10Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

**Example 3:**

    Input: nums = [-3,-2,-3]Output: -2Explanation: Subarray [-2] has maximum sum -2.

**Constraints:**

- `n == nums.length`
- `1 <= n <= 3 * 10`
- `-3 * 10 <= nums[i] <= 3 * 10`

## Approach : MAX MIN

- While taking sum of circular subarray we can say, eliminate the minimum sum subarray from total sum
- above case doesn't hold for negative numbers, total will be smaller than the smallest element, hence return maximum sum.

```java
/**
 * Time : O(N)
 * Space : O(1)
 */
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int totalSum = 0;
        int maxSum = nums[0], curMax = 0;
        int minSum = nums[0], curMin = 0;

        for (int num : nums) {
            totalSum += num;

            // Kadane’s algorithm for max subarray sum
            curMax = Math.max(num, curMax + num);
            maxSum = Math.max(maxSum, curMax);

            // Kadane’s algorithm for min subarray sum
            curMin = Math.min(num, curMin + num);
            minSum = Math.min(minSum, curMin);
        }

        // If all numbers are negative, maxSum is the correct result
        if (maxSum < 0) return maxSum;

        // Otherwise, the max could be either wrapped or unwrapped
        return Math.max(maxSum, totalSum - minSum);
    }
}

```
