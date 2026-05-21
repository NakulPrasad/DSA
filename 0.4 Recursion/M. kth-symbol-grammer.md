# Kth Grammer

We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

```
Input: n = 2, k = 2
Output: 1
Explanation:
row 1: 0
row 2: 01
```

## Approach

This is observation question, and question is made like recusrion;

observations:
- 1. Number of elements in next row is 2x of previous;
- 2. Next row half is same is prevoius,
- 3. Second half of row is complement of previous row.

Time : O(N) Space : O(N)

### Intitution

- Each row is divided into two halves.
- The first half is exactly same as previous row.
- The second half is the inverse (flip 0 ↔ 1) of previous row.
- If k is in first half, move normally to previous row.
- If k is in second half, move to corresponding position in previous row and flip the result.

```java
Algorithm kthGrammar(n, k)

Step 1: Check base condition
    If n = 1 AND k = 1
        Return 0

Step 2: Find middle position of current row
    mid ← (2^(n-1)) / 2

Step 3: Check whether k lies in first half
    If k ≤ mid
        Return kthGrammar(n - 1, k)

Step 4: Otherwise, it lies in second half
    Else
        Return 1 - kthGrammar(n - 1, k - mid)

End Algorithm
```
