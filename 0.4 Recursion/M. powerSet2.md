# powerSet2

> **Difficulty:** Medium  
> **Topic / Pattern:** Recursion  

---

## 📝 Problem Statement

[Power Set 2](https://leetcode.com/problems/subsets/description/)

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Examples
```text
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]
```

---

## 💡 Intuition & Core Approach

Recursion





```
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

---

## 💻 Implementation (Java)

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
