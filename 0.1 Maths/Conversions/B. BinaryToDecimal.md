# Binary to Decimal

> **Difficulty:** Basic  
> **Topic / Pattern:** Maths  
> **Link:** [Binary to Decimal](https://www.geeksforgeeks.org/problems/binary-number-to-decimal-number3525/1)

---

## 📝 Problem Statement

Given a string b representing a Binary Number, The problem is to find its decimal equivalent.

### Examples
```text
Input : b = 111
Output : 7
Explanation : The decimal equivalent of the binary number 111 is 22 + 21 + 20 = 7.
Input : b = 1010
Output : 10
Explanation : The decimal equivalent of the binary number 1010 is 23 + 21 = 10.
Input: b = 100001
Output: 33
Explanation : The decimal equivalent of the binary number 100001 is 25 + 20 = 33.
```

---

## 💡 Intuition & Core Approach

Maths

- Extract last digit
- left shift means raising in power 2


12 = 1100
2^0*0 + 2^1*0 + 2^2*1 + 2^2*2

```
class Solution {
    public int binaryToDecimal(String b) {
        // Code here
        StringBuilder sb = new StringBuilder(b);
        int ans = 0;
        int l = sb.length()-1;
        int last = 0;
        int power = 0;
        while(l >=0){
            last = sb.charAt(l) - '0';
            ans += (1 << power) * last;
            l--;
            power ++;

        }
        return ans;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int binaryToDecimal(String b) {
        // Code here
        StringBuilder sb = new StringBuilder(b);
        int ans = 0;
        int l = sb.length()-1;
        int last = 0;
        int power = 0;
        while(l >=0){
            last = sb.charAt(l) - '0';
            ans += (1 << power) * last;
            l--;
            power ++;

        }
        return ans;
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
