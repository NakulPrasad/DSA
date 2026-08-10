# Fibbonacci

> **Difficulty:** Easy  
> **Topic / Pattern:** Recursion  
> **Link:** [Fibbonacci](https://leetcode.com/problems/fibonacci-number/)

---

## 📝 Problem Statement

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

### Examples
```text
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

---

## 💡 Intuition & Core Approach

Iterative

```
class Solution {
    public int fib(int n) {
        int prev = 0;
        if(n==0) return prev;
        int curr = 1;
        if(n==1) return curr;
        n=n-2;

        while(n-- >=0){
            int currSum = prev + curr;
            prev = curr;
            curr = currSum;
        }
        return curr;
    }
}
```






```
class Solution {
    public int fib(int n) {
        return helper(n);

    }
    int helper(int n){
        if(n<=1)
            return n;
        return fib(n-2)+fib(n-1);
    }
}

```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int fib(int n) {
        return helper(n);

    }
    int helper(int n){
        if(n<=1)
            return n;
        return fib(n-2)+fib(n-1);
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N+1) | [Provide justification] |
| **Space Complexity** | O(N+1) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
