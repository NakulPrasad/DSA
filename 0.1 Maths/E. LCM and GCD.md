# LCM and GCD

> **Difficulty:** Easy  
> **Topic / Pattern:** Maths  
> **Link:** [LCM and GCD](https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1)

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

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 💻 Implementation (Java)

```java
/*
 * Approach : Bruteforce
 * Intution:
 * Using formula : lcm(a,b) = |a * b | / GCD (a , b)
 * 
 * For calculating GCD : find the number from 0 to Min(a,b) which divides both a and b.
 * 
 * Time Complexity : O(Min(a,b))
 * Space Complexity : O(1)
 */

class LCMnGCD {
    public static int[] lcmAndGcd(int a, int b) {
    int GCD = gcd(a,b);
    int LCM = lcm(a, b, GCD);
    return new int[]{LCM, GCD};
    
} 
public static int lcm(int a, int b, int GCD){
    return (Math.abs(a*b) / GCD);
    
}
public static int gcd(int a, int b){
    int min = Math.min(a,b);
    for(int i = min; i>0;i--){
        if(a % i == 0 && b % i ==0){
            return i;
        }
    }
    return 1;
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
