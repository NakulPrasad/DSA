# Missing And Repeated Number

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Missing And Repeated Number](https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1)

---

## 📝 Problem Statement

Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

### Examples
```text
Input: arr[] = [2, 2]
Output: [2, 1]
Explanation: Repeating number is 2 and smallest positive missing number is 1.
Input: arr[] = [1, 3, 3]
Output: [3, 2]
Explanation: Repeating number is 3 and smallest positive missing number is 2.
Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5]
Explanation: Repeating number is 1 and the missing number is 5.
```

---

## 💡 Intuition & Core Approach

Hashing

```
class Solution {
    // Function to find two elements: one repeating and one missing.
    int[] findTwoElement(int[] arr, int n) {
        // Create a helper array of size n+1 to count occurrences
        int[] count = new int[n + 1];

        // Initialize all elements to 1
        for (int i = 1; i <= n; i++) {
            count[i] = 1;
        }

        // Decrement count for each element in the array
        for (int num : arr) {
            count[num]--;
        }

        int repeat = -1;
        int missing = -1;

        // Scan to find repeating (-1) and missing (1) elements
        for (int i = 1; i <= n; i++) {
            if (count[i] == -1) {
                repeat = i;
            } else if (count[i] == 1) {
                missing = i;
            }
        }

        // Return as array [repeating, missing]
        return new int[] {repeat, missing};
    }
}

```

---

## 💻 Implementation (Java)

```java
class Solution {
    // Function to find two elements: one repeating and one missing.
    int[] findTwoElement(int[] arr, int n) {
        // Create a helper array of size n+1 to count occurrences
        int[] count = new int[n + 1];

        // Initialize all elements to 1
        for (int i = 1; i <= n; i++) {
            count[i] = 1;
        }

        // Decrement count for each element in the array
        for (int num : arr) {
            count[num]--;
        }

        int repeat = -1;
        int missing = -1;

        // Scan to find repeating (-1) and missing (1) elements
        for (int i = 1; i <= n; i++) {
            if (count[i] == -1) {
                repeat = i;
            } else if (count[i] == 1) {
                missing = i;
            }
        }

        // Return as array [repeating, missing]
        return new int[] {repeat, missing};
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
