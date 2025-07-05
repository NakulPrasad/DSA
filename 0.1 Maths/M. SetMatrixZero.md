# [Set Matrix Zeros](https://leetcode.com/problems/set-matrix-zeroes/description/)
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
---
![alt text](https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg)
```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```
```java
class Solution {
    public void setZeroes(int[][] matrix) {
        
        for(int i=0;i<matrix.length;i++){ //row
            for(int j=0;j< matrix[i].length;j++){ //column
                if(matrix[i][j] == 0) {
                    setRowZero(i, matrix);
                    setColZero(j, matrix);
                }
            }
        }
        //func to set zero to -1;
        for(int i=0;i<matrix.length;i++){ //row
            for(int j=0;j< matrix[i].length;j++){ //column
               if(matrix[i][j] == Integer.MIN_VALUE+1134){
                matrix[i][j] = 0;
               }
            }
        }
        
    }
    // function to make row zero
    void setRowZero(int i,int[][]matrix ){
        for(int x=0;x<matrix[0].length;x++){
            if(matrix[i][x] !=0){
                matrix[i][x] =Integer.MIN_VALUE+1134;
            }
        }
    }

    void setColZero(int j, int[][]matrix){
        for(int x=0;x<matrix.length;x++){
            if(matrix[x][j] !=0){
                matrix[x][j] =Integer.MIN_VALUE+1134;
            }
        }
    }
}

```