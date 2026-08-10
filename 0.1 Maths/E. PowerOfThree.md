# Power of Three

> **Difficulty:** Easy  
> **Topic / Pattern:** Maths  
> **Link:** [Power of Three](https://leetcode.com/problems/power-of-three/description/)

---

## 📝 Problem Statement

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

### Examples
```text
Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
```

---

## 💡 Intuition & Core Approach

Recursion

in js n%3==0 check isn't requred.
check is required in java.

```
class Solution {
    public boolean isPowerOfThree(int n) {
        if(n ==1) return true;
        else if(n ==0) return false;
        return n%3==0 && isPowerOfThree(n/3);
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public boolean isPowerOfThree(int n) {
        if(n ==1) return true;
        else if(n ==0) return false;
        return n%3==0 && isPowerOfThree(n/3);
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
