# Roman to Integer

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays & Hashing / Math  
> **Link:** [LeetCode](https://leetcode.com/problems/roman-to-integer/)

---

## 📝 Problem Statement

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
| :---: | :---: |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Given a roman numeral, convert it to an integer.

### Subtraction Rules
* `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
* `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
* `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

### Examples
```text
Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4.
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** Traverse the string from right to left (backwards). Keep track of the running sum.
* **Key Observations:**
  - If we see a character whose value is less than the character to its right, we subtract its value from the sum (e.g., in `IV`, `I` (1) is less than `V` (5), so we do $5 - 1 = 4$).
  - Otherwise, we add its value to the sum.
* **Optimization:** Instead of using a `HashMap` which incurs object overhead and lookups, we can use a helper method with a `switch` statement to retrieve values in $O(1)$ time with very low overhead.

---

## 💻 Implementation (Java)

```java
class Solution {
    public int romanToInt(String s) {
        int ans = 0;
        int n = s.length();
        int prevValue = 0;

        // Traverse backwards from right to left
        for (int i = n - 1; i >= 0; i--) {
            int currValue = getValue(s.charAt(i));
            
            if (currValue < prevValue) {
                ans -= currValue; // Perform subtraction (e.g., IV -> 5 - 1)
            } else {
                ans += currValue; // Perform addition
            }
            prevValue = currValue;
        }
        return ans;
    }

    private int getValue(char ch) {
        switch (ch) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(N)$ | We traverse the string of length $N$ exactly once. Character lookups via helper method are $O(1)$. |
| **Space Complexity** | $O(1)$ | No extra space is used except for primitive helper variables. |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Single Character String:** e.g., `"I"` -> loop runs once, returns `1` correctly.
* **Invalid Characters:** The constraints guarantee that `s` only contains valid Roman characters.
* **String Out of Bounds:** Since we check `currValue < prevValue` using a tracked variable rather than accessing `s.charAt(i + 1)`, we prevent any `StringIndexOutOfBoundsException`.

