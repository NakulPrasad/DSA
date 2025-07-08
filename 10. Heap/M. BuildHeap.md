# [Build Heap](https://www.naukri.com/code360/problems/build-heap_975375?leftPanelTabValue=PROBLEM)

You are given an integer array with N elements. Your task is to build a max binary heap from the array.

A max-heap is a complete binary tree in which the value of each internal node is greater than or equal to the values of the children of that node.

Note :
You do not need to print anything, just return the vector representation of the heap such that the input array follows 0 - based indexing and :

The left child of the ith node is at (2 \* i + 1)th index.

The right child of the ith node is at (2 \* i + 2)th index.

Parent of the node present at ith index is at (i - 1) / 2 indexes.
Detailed explanation ( Input/output format, Notes, Images )

```
Constraints :
1 <= T <= 10
1 <= N <= 10^4
-10^9 <= data <= 10^9
```

```
Sample Input 1:
1
5
4 10 3 5 1
Sample Output 1:
1
Explanation For Sample Input 1:
One possible max-heap representation of array = 10 5 3 4 1
```
### Example 2
![](https://ninjasfiles.s3.amazonaws.com/asset_0000000000000450_1621577290_buildheap-e1-6490.png)
```
Sample Input 2:
1
11
1 3 5 4 6 13 10 9 8 15 17
Sample Output 2:
1
```

```java

```
