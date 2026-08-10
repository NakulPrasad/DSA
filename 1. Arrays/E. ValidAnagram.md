# Valid Anagram

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

---

## 📝 Problem Statement

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### Examples
```text
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```

---

## 💡 Intuition & Core Approach

Freqency Array / Hashing
```
/**
 * Difficulty : Easy
 * Intitution : We know alphabets are of 26 characters only, one string increases count, while other decreases.
 * 
 * 
 * 
*/
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        
        // Count the freency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the freency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero freency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Difficulty : Easy
 * Intitution : We know alphabets are of 26 characters only, one string increases count, while other decreases.
 * Time : O(1)
 * Space : O(N)
 * 
*/
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        
        // Count the freency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the freency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero freency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(1) | [Provide justification] |
| **Space Complexity** | O(N) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
