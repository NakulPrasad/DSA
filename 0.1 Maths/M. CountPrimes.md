# Count Prime

> **Difficulty:** Medium  
> **Topic / Pattern:** Maths  
> **Link:** [Count Prime](https://leetcode.com/problems/count-primes/)

---

## 📝 Problem Statement

[Insert problem description here]

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

Bruteforce
```
class Solution {
    public int countPrimes(int n) {
        int count =0;
        for(int i=1;i<n;i++){
            boolean ans = helper(i);
            if(ans) count++;
        }
        return count;
    }

    boolean helper(int n){
       int count = 1;
        for(int i=2; i<=n;i++){
            if(n%i == 0) count ++;
            
        }
        if(count == 2) return true;
        return false;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int countPrimes(int n) {
        int count =0;
        for(int i=1;i<n;i++){
            boolean ans = helper(i);
            if(ans) count++;
        }
        return count;
    }

    boolean helper(int n){
       int count = 1;
        for(int i=2; i<=n;i++){
            if(n%i == 0) count ++;
            
        }
        if(count == 2) return true;
        return false;
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
