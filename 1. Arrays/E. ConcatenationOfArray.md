# Concatenation of Array

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/description/)

---

## 📝 Problem Statement

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (**0-indexed**).

Specifically, `ans` is the **concatenation** of two `nums` arrays.

Return _the array _`ans`.

**Example 1:**

    Input: nums = [1,2,1]Output: [1,2,1,1,2,1]Explanation: The array ans is formed as follows:- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]- ans = [1,2,1,1,2,1]

**Example 2:**

    Input: nums = [1,3,2,1]Output: [1,3,2,1,1,3,2,1]Explanation: The array ans is formed as follows:- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]- ans = [1,3,2,1,1,3,2,1]

**Constraints:**

- `n == nums.length`
- `1 <= n <= 1000`
- `1 <= nums[i] <= 1000`

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 💻 Implementation (Java)

```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] newArr = new int[2 * n];

        for (int i = 0; i < 2 * n; i++) {
            newArr[i] = nums[i % n];
        }

        return newArr;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
