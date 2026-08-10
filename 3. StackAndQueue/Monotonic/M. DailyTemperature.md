# Daily Temperature

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  
> **Link:** [Daily Temperature](https://leetcode.com/problems/daily-temperatures/description/)

---

## 📝 Problem Statement

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

### Examples
```text
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
```

---

## 💡 Intuition & Core Approach

Stack

This problem is same as finding next greater element right. Here we calculate distances from each index to its NGEs.

```
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>(); // Stores indices

        for (int i = n - 1; i >= 0; i--) {
            // Pop all days with temperatures less than or equal to today's
            while (!stack.isEmpty() && temperatures[i] >= temperatures[stack.peek()]) {
                stack.pop();
            }

            // If stack is not empty, calculate the wait time
            if (!stack.isEmpty()) {
                result[i] = stack.peek() - i;
            }

            // Push today's index onto the stack
            stack.push(i);
        }

        return result;
    }
}

```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>(); // Stores indices

        for (int i = n - 1; i >= 0; i--) {
            // Pop all days with temperatures less than or equal to today's
            while (!stack.isEmpty() && temperatures[i] >= temperatures[stack.peek()]) {
                stack.pop();
            }

            // If stack is not empty, calculate the wait time
            if (!stack.isEmpty()) {
                result[i] = stack.peek() - i;
            }

            // Push today's index onto the stack
            stack.push(i);
        }

        return result;
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
