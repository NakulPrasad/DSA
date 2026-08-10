# Power of Two

> **Difficulty:** Easy  
> **Topic / Pattern:** Recursion / Bit Manipulation  
> **Link:** [LeetCode](https://leetcode.com/problems/power-of-two/)

---

## 📝 Problem Statement

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.

### Examples
```text
Input: n = 1
Output: true
Explanation: 2^0 = 1

Input: n = 16
Output: true
Explanation: 2^4 = 16

Input: n = 3
Output: false
```

---

## 💡 Intuition & Core Approach

### Approach 1: Recursion
* **The Core Idea:** A number $n$ is a power of two if it can be repeatedly divided by $2$ without any remainder until we reach $1$.
* **Key Observations:**
  - Base Case 1: If $n = 1$, return `true`.
  - Base Case 2: If $n \le 0$ or $n \% 2 \ne 0$ (for $n > 1$), it cannot be a power of two, so return `false`.
  - Recursive Step: Check if `n / 2` is a power of two.

### Approach 2: Bit Manipulation (O(1) Optimal)
* **The Core Idea:** Numbers that are powers of two have exactly one set bit in their binary representation (e.g., $8 = 1000_2$, $16 = 10000_2$). 
* If we subtract $1$ from a power of two, all bits after the set bit become $1$, and the set bit becomes $0$ (e.g., $7 = 0111_2$).
* Thus, performing a bitwise AND between $n$ and $n-1$ will yield $0$ if and only if $n$ is a power of two: $n \ \& \ (n-1) == 0$.

---

## 💻 Implementation (Java)

### Approach 1: Recursion
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n == 1) {
            return true;
        }
        if (n <= 0 || n % 2 != 0) {
            return false;
        }
        return isPowerOfTwo(n / 2);
    }
}
```

### Approach 2: Bit Manipulation (Optimal)
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}
```

---

## 📊 Complexity Analysis

### Recursive Approach
| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(\log N)$ | In each recursive step, the number $n$ is halved. |
| **Space Complexity** | $O(\log N)$ | The recursion stack size is proportional to $\log N$. |

### Bit Manipulation Approach
| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | Constant time bitwise check. |
| **Space Complexity** | $O(1)$ | No extra memory used. |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Non-positive Numbers:** $0$ and negative numbers are not powers of two. Handled by checking `n > 0` or `n <= 0`.
* **Odd Numbers:** Handled by checking `n % 2 != 0`.

