# Prefix Sum

https://leetcode.com/discuss/post/6540841/range-queries-prefix-sum-segment-tree-by-undm/


### Q.2 [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/description/)
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
You must design an algorithm where sumRegion works on O(1) time complexity.

### 🔍 Algorithm

```

+---------------+   +---------+----+   +---+-----------+   +---------+----+   +---+----------+
|               |   |         |    |   |   |           |   |         |    |   |   |          |
|   (r1,c1)     |   |         |    |   |   |           |   |         |    |   |   |          |
|   +------+    |   |         |    |   |   |           |   +---------+    |   +---+          |
|   |      |    | = |         |    | - |   |           | - |      (r1,c2) | + |   (r1,c1)    |
|   |      |    |   |         |    |   |   |           |   |              |   |              |
|   +------+    |   +---------+    |   +---+           |   |              |   |              |
|        (r2,c2)|   |       (r2,c2)|   |   (r2,c1)     |   |              |   |              |
+---------------+   +--------------+   +---------------+   +--------------+   +--------------+


```

### 🧾 Pseudo-Code (handle edge case)

```java
Class NumMatrix:

    Method __init__(matrix):
        n = number of rows in matrix
        m = number of columns in matrix
        Create 2D array prefix[n][m]

        For i from 0 to n - 1:
            For j from 0 to m - 1:
                top = prefix[i-1][j] if i > 0 else 0
                left = prefix[i][j-1] if j > 0 else 0
                topLeft = prefix[i-1][j-1] if i > 0 and j > 0 else 0

                prefix[i][j] = matrix[i][j] + top + left - topLeft

    Method sumRegion(row1, col1, row2, col2):
        total = prefix[row2][col2]
        subtractTop = prefix[row1-1][col2] if row1 > 0 else 0
        subtractLeft = prefix[row2][col1-1] if col1 > 0 else 0
        addTopLeft = prefix[row1-1][col1-1] if row1 > 0 and col1 > 0 else 0

        Return total - subtractTop - subtractLeft + addTopLeft

```

### Pseudo-Code 

```java
// make prefix array of n+1 to not handle edge cases.
Class NumMatrix:

    Declare 2D array prefix

    Method NumMatrix(matrix):
        n = number of rows in matrix
        m = number of columns in matrix

        Create prefix as a 2D array of size (n + 1) x (m + 1), initialized to 0

        For i from 1 to n:
            For j from 1 to m:
                prefix[i][j] = matrix[i-1][j-1]
                               + prefix[i-1][j]
                               + prefix[i][j-1]
                               - prefix[i-1][j-1]

    Method sumRegion(row1, col1, row2, col2):
        Return:
            prefix[row2 + 1][col2 + 1]
            - prefix[row1][col2 + 1]
            - prefix[row2 + 1][col1]
            + prefix[row1][col1]


```

```java
import java.util.Arrays;

class NumMatrix {
    int[][] prefix;

    public NumMatrix(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        prefix = new int[n+1][m+1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                prefix[i][j] = matrix[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
    
        return prefix[row2+1][col2+1] - prefix[row1][col2+1]- prefix[row2+1][col1] + prefix[row1][col1];
    }
}
```

### Q.4 [Pivot Index](https://leetcode.com/problems/find-pivot-index/description/)
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

```java
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```
```java
class Solution {
    public int pivotIndex(int[] nums) {
        int totalSum = 0;
            // Step 1: Calculate total sum of the array
        for (int num : nums) {
            totalSum += num;
        }

        int leftSum = 0;

        // Step 2: Iterate through the array to find pivot index
        for (int i = 0; i < nums.length; i++) {
            // Check if left sum equals right sum
            if (leftSum == totalSum - leftSum - nums[i]) {
                return i;
            }
            leftSum += nums[i];
        }

        // Step 3: No pivot index found
        return -1;
    }
}
```
Time : O(1)

Space: O(n) 

EdgeCase : 
1. [-1,-1,-1,-1,0,1]


### Q.5 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
#### Algorithm
Instead of calculating the product of all elements except nums[i] directly (which would require nested loops and be inefficient), we break the product into two parts:
```
ans[i] = (product of all elements to the left of i) × (product of all elements to the right of i)
```
So we:

Precompute the left prefix products.

Precompute the right prefix products.

Multiply them together for each index.
---
#### Pseudo-Code

```java
    Function productExceptSelf(nums):
    n ← length of nums

    Create prefixLeft of size n, filled with 1
    Create prefixRight of size n, filled with 1
    Create ans of size n

    // Build prefixLeft: product of elements to the left of current index
    For i from 1 to n - 1:
        prefixLeft[i] ← prefixLeft[i - 1] × nums[i - 1]

    // Build prefixRight: product of elements to the right of current index
    For i from n - 2 down to 0:
        prefixRight[i] ← prefixRight[i + 1] × nums[i + 1]

    // Multiply left and right prefix products to get result
    For i from 0 to n - 1:
        ans[i] ← prefixLeft[i] × prefixRight[i]

    Return ans
```
Time : O(1)

Space: O(n) 