# Reverse Words in a string

> **Difficulty:** Medium  
> **Topic / Pattern:** Two Pointers  
> **Link:** [Reverse Words in a string](https://leetcode.com/problems/reverse-words-in-a-string/description/)

---

## 📝 Problem Statement

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Examples
```text
Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = " hello world "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Input: s = "a good example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

---

## 💡 Intuition & Core Approach

Regex

```
class Solution {
    public String reverseWords(String s) {
        var sb = new StringBuilder();
        String [] str = s.split("\\s+");
        var l=str.length;
        System.out.println(str);
        while(l-->0){
            sb.append(str[l] + " ");
        }
        return sb.toString().trim();
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public String reverseWords(String s) {
        var sb = new StringBuilder();
        String [] str = s.split("\\s+");
        var l=str.length;
        System.out.println(str);
        while(l-->0){
            sb.append(str[l] + " ");
        }
        return sb.toString().trim();
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
