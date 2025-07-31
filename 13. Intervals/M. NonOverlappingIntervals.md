# [Non Overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return _the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping_.

**Note** that intervals which only touch at a point are **non-overlapping**. For example, `[1, 2]` and `[2, 3]` are non-overlapping.

**Example 1:**

    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

**Example 2:**

    Input: intervals = [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

**Example 3:**

    Input: intervals = [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

**Constraints:**

- `1 <= intervals.length <= 10`
- `intervals[i].length == 2`
- `-5 * 10 <= starti < endi <= 5 * 10`

## Edge Cases :

    intervals = [[1,100],[11,22],[1,11],[2,12]]

    Output: 2

## Approach : Linear Search

```java
/**
 * Time : O (NLogN)
 * Space : O (1)
 */
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) return 0;

        // Step 1: Sort by end time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        // Step 2: Initialize count and the end of the last added interval
        int count = 0;
        int end = intervals[0][1];

        // Step 3: Iterate from the second interval onward
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < end) {
                // Overlap: increment count (we're removing this interval)
                count++;
            } else {
                // No overlap: update the end
                end = intervals[i][1];
            }
        }

        return count;
    }
}

```
