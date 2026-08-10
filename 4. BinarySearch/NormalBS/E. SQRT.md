# SQRTx

> **Difficulty:** Easy  
> **Topic / Pattern:** BinarySearch  
> **Link:** [SQRTx](https://leetcode.com/problems/sqrtx/description/)

---

## 📝 Problem Statement

Given a non-negative integer `x`, return _the square root of _`x`_ rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

    Input: x = 4Output: 2Explanation: The square root of 4 is 2, so we return 2.

**Example 2:**

    Input: x = 8Output: 2Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

**Constraints:**

- `0 <= x <= 2 - 1`

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

Binary Search

```
class Solution {
    public int mySqrt(int x) {
        if (x == 0) return 0;

        int l = 1, r = x;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            // System.out.println(mid); // Optional debug print

            long temp = (long) mid * mid; // Use long to prevent overflow

            if (temp <= x) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return r; // r is the floor of sqrt(x)
    }
}

```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int mySqrt(int x) {
        if (x == 0) return 0;

        int l = 1, r = x;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            // System.out.println(mid); // Optional debug print

            long temp = (long) mid * mid; // Use long to prevent overflow

            if (temp <= x) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return r; // r is the floor of sqrt(x)
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
