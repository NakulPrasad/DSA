# [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/description/)

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

```
Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6

Example 2:

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
```

## Approach : Bruteforce 

```java
class Solution {
    public double[] medianSlidingWindow(int[] arr, int k) {
        int left = 0;
        int right = 0;
        double[] ans = new double[arr.length - k + 1];
        
        while (right < arr.length) {
            // Check if the window has reached the desired size
            if (right - left + 1 == k) {
                // Create a copy of the current window
                int[] temp = Arrays.copyOfRange(arr, left, right + 1);
                
                // Sort the window
                Arrays.sort(temp);
                
                // Calculate median index based on window size (k)
                int medianIdx;
                if (k % 2 == 0) {
                    medianIdx = (k / 2) - 1;
                    ans[left] = ((double)temp[medianIdx] + temp[medianIdx + 1]) / 2; // Median for even k
                } else {
                    medianIdx = k / 2;
                    ans[left] = temp[medianIdx]; // Median for odd k
                }
                
                left++; // Move the window by increasing left pointer
            }
            right++; // Expand the window by increasing right pointer
        }
        return ans;
    }
}
```