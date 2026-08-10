# SearchIn2D

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  

---

## 📝 Problem Statement

# [Search in a row wise and column wise sorted matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

Given a matrix mat[][] and an integer x, the task is to check if x is present in mat[][] or not. Every row and column of the matrix is sorted in increasing order.

### Examples
```text
Input: x = 62, mat[][] = [[3, 30, 38],
                          [20, 52, 54],
                          [35, 60, 69]]
Output: false
Explanation: 62 is not present in the matrix.


Input: x = 55, mat[][] = [[18, 21, 27],
                          [38, 55, 67]]
Output: true
Explanation: mat[1][1] is equal to 55.


Input: x = 35, mat[][] = [[3, 30, 38],
                          [20, 52, 54],
                          [35, 60, 69]]
Output: true
Explanation: mat[2][0] is equal to 35.
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 🎨 Visualization / Dry Run

![visualization](images/search-in-2d-matrix.jpg)

---

## 💻 Implementation (Java)

```java
class Solution {

    public boolean searchMatrix(int[][] matrix, int target) {
        boolean ans = false;
        int row = matrix.length;
        int col = matrix[0].length;
        //i= row/ j=col
        int i=0,j=col-1; 
        while(i>=0 && i<row && j>=0 && j<col){
            if(matrix[i][j] == target)
            return true;
            else if (matrix[i][j] > target)
                j--;
            else
                i++;
        }
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
