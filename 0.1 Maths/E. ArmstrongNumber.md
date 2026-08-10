# Armstrong Number

> **Difficulty:** Easy  
> **Topic / Pattern:** Maths  
> **Link:** [Armstrong Number](https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1)

---

## 📝 Problem Statement

Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

### Examples
```text
Input:N = 153
Output:True
Explanation: 13+53+33 = 1 + 125 + 27 = 153

Input:N = 371
Output: True
Explanation: 33+53+13 = 27 + 343 + 1 = 371
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
    static boolean armstrongNumber(int n) {
        // code here
        int m = n;
        int ld =0;
        int cube =0;
        while(m>0){
            ld = m%10;
            cube += Math.pow(ld, 3);
            m /=10;
        }
        if(cube == n) return true;
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
