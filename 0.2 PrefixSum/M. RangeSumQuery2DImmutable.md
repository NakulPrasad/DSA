# Q.2 [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/description/)

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
