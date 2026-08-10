# Valid Palindrome 

> **Difficulty:** Easy  
> **Topic / Pattern:** Two Pointers  
> **Link:** [Valid Palindrome ](https://leetcode.com/problems/valid-palindrome/description/)

---

## 📝 Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Examples
```text
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

---

## 💡 Intuition & Core Approach

```
class Solution {
    public boolean isPalindrome(String s) {
        Stack<Integer> st = new Stack<>();
        s = s.replaceAll("[^A-Za-z0-9]","").toLowerCase();
        int start = 0;
        int end =s.length()-1;
        while(start<end){
            // System.out.println(start +" "+end);
            if(s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public boolean isPalindrome(String s) {
        Stack<Integer> st = new Stack<>();
        s = s.replaceAll("[^A-Za-z0-9]","").toLowerCase();
        int start = 0;
        int end =s.length()-1;
        while(start<end){
            // System.out.println(start +" "+end);
            if(s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
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
