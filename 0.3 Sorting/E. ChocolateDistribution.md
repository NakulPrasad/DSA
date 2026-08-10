# Chocholate Distribution Problem

> **Difficulty:** Easy  
> **Topic / Pattern:** Sorting  
> **Link:** [Chocholate Distribution Problem](https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1)

---

## 📝 Problem Statement

Given an array arr[] of positive integers, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets among m students such that

- i. Each student gets exactly one packet.
- ii. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum and return that minimum possible difference.

### Examples
```text
Input: arr = [3, 4, 1, 9, 56, 7, 9, 12], m = 5
Output: 6
Explanation: The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following m packets :[3, 4, 9, 7, 9].

Input: arr = [7, 3, 2, 4, 9, 12, 56], m = 3
Output: 2
Explanation: The minimum difference between maximum chocolates and minimum chocolates is 4 - 2 = 2 by choosing following m packets :[3, 2, 4].

Input: arr = [3, 4, 1, 9, 56], m = 5
Output: 55
Explanation: With 5 packets for 5 students, each student will receive one packet, so the difference is 56 - 1 = 55.
```

---

## 💡 Intuition & Core Approach

sort the array, return the minimum difference of maximum chocholate and minimum chocolate packet

```
/**
 * 
 * 
 */
class Solution {
    public int findMinDiff(int arr[], int m) {
        // code here
        Arrays.sort(arr);
        int min =Integer.MAX_VALUE;
        int l = arr.length-1;
        for(int i=0;i<=l-1;i++){
            if(i+m-1 <=l)
            min = Math.min(Math.abs(arr[i] - arr[i+m-1]), min);
        }
        return min;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Time : N + NlogN
 * Space :1
 */
class Solution {
    public int findMinDiff(int arr[], int m) {
        // code here
        Arrays.sort(arr);
        int min =Integer.MAX_VALUE;
        int l = arr.length-1;
        for(int i=0;i<=l-1;i++){
            if(i+m-1 <=l)
            min = Math.min(Math.abs(arr[i] - arr[i+m-1]), min);
        }
        return min;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | N + NlogN | [Provide justification] |
| **Space Complexity** | 1 | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
