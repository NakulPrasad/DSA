# Longest Consecutive Sequence

> **Difficulty:** Medium  
> **Topic / Pattern:** Arrays & Hashing / Hash Set  
> **Link:** [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)

---

## 📝 Problem Statement

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in $O(N)$ time.

### Examples
```text
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** To find the longest consecutive sequence in $O(N)$ time, we need $O(1)$ lookups. A Hash Set provides this capability.
* **Key Observations:**
  - We first load all numbers into a Hash Set.
  - A number `num` is the *start* of a sequence only if `num - 1` is not present in the set.
  - If it is the start, we count how many consecutive numbers exist in the set (`num + 1`, `num + 2`, etc.).
  - If `num - 1` is present in the set, we skip it because it is part of a larger sequence that has already been (or will be) processed starting from its minimum element. This ensures each number is visited at most twice, maintaining $O(N)$ runtime.

---

## 💻 Implementation (Java)

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        int maxLen = 0;

        for (int num : nums) {
            // Check if 'num' is the start of a sequence
            if (!set.contains(num - 1)) {
                int currentNum = num;
                int currentLen = 1;

                // Incrementally search for consecutive elements
                while (set.contains(currentNum + 1)) {
                    currentNum += 1;
                    currentLen += 1;
                }

                maxLen = Math.max(maxLen, currentLen);
            }
        }

        return maxLen;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(N)$ | Although there is a nested while loop, the condition `!set.contains(num - 1)` ensures that we only build sequences starting from their smallest element. Thus, each number is added to the set and checked a constant number of times. |
| **Space Complexity** | $O(N)$ | We store all $N$ elements in the Hash Set. |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Empty Array:** Handled by checking `nums.length == 0` at the start.
* **Duplicate Elements:** Handled naturally because the Hash Set stores only unique values, preventing redundant checks.
* **All elements equal:** Set size will be 1, runs in $O(N)$ and returns `1`.