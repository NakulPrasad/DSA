# Palindrome Number

> **Difficulty:** Easy  
> **Topic / Pattern:** Maths  
> **Link:** [Palindrome Number](https://www.geeksforgeeks.org/problems/palindrome0746/1)

---

## 📝 Problem Statement

You are given an integer n. Your task is to determine whether it is a palindrome.
A number is considered a palindrome if it reads the same backward as forward, like the string examples "MADAM" or "MOM".

### Examples
```text
Examples:

Input: n = 555
Output: true
Explanation: The number 555 reads the same backward as forward, so it is a palindrome.
```

---

## 💡 Intuition & Core Approach

Maths

reverse the number and compare

```
class Solution {
    public boolean isPalindrome(int n) {
        n = Math.abs(n);

        int original = n;
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n /= 10;
        }

        return original == rev;
    }
}
```



String doesn't work for -ve nubmbers
make it postive

```
class Solution {
    public boolean isPalindrome(int n) {
        // code here
        n=Math.abs(n);
        StringBuilder sb = new StringBuilder(String.valueOf(n));
        int l=0,r=sb.length()-1;
        while(l<=r){
            if(sb.charAt(l) != sb.charAt(r))
            return false;

            l++;
            r--;
        }
        return true;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public boolean isPalindrome(int n) {
        // code here
        n=Math.abs(n);
        StringBuilder sb = new StringBuilder(String.valueOf(n));
        int l=0,r=sb.length()-1;
        while(l<=r){
            if(sb.charAt(l) != sb.charAt(r))
            return false;

            l++;
            r--;
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
