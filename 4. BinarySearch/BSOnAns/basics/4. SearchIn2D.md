
# [Search in a row wise and column wise sorted matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

Given a matrix mat[][] and an integer x, the task is to check if x is present in mat[][] or not. Every row and column of the matrix is sorted in increasing order.

```java
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

![image](images/search-in-2d-matrix.jpg)

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