# [Search a 2d matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m \* n)) time complexity.

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

```

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
```

```java
class Solution {

    public boolean searchMatrix(int[][] matrix, int target) {
        boolean ans = false;
        int row = matrix.length;
        int col = matrix[0].length;
        //binary search
        //search with-in the boundary of matrix
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