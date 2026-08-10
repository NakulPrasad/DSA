# Find kth character

> **Difficulty:** Easy  
> **Topic / Pattern:** Recursion  
> **Link:** [Find kth character](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/)

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

Recursion



At every level, the string doubles in size and is divided into two equal halves:

- the first half remains the same as the previous level
- the second half is generated from the previous level with characters shifted by one

To find the kth character efficiently, we recursively determine whether `k` lies in the first half or second half of the current level.

- If `k` is in the first half, we recursively search in the same position of the previous level.
- If `k` is in the second half, we map it back to the corresponding position in the first half and add `1` to the answer because characters in the second half are shifted by one.

The midpoint helps us identify which half contains the kth character, reducing the problem size recursively until the base case is reached.

```
class Solution {
    public char kthCharacter(int k) {
        int n = 1;
        while (Math.pow(2, n - 1) < k) {
            n++;
        }

        char ans = (char) ('a' + helper(n, k));
        return ans;
    }
    public int helper(int n, int k){
        //basecase:
        if(n==1 && k==1){
            return 0;
        }
        int mid = (int)Math.pow(2,n-2);
        if(k <=mid){
            return helper(n-1,k);
        }
        return helper(n-1,k-mid) + 1;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public char kthCharacter(int k) {
        int n = 1;
        while (Math.pow(2, n - 1) < k) {
            n++;
        }

        char ans = (char) ('a' + helper(n, k));
        return ans;
    }
    public int helper(int n, int k){
        //basecase:
        if(n==1 && k==1){
            return 0;
        }
        int mid = (int)Math.pow(2,n-2);
        if(k <=mid){
            return helper(n-1,k);
        }
        return helper(n-1,k-mid) + 1;
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
