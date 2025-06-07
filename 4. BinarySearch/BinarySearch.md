
### Q.12 [Find position of an element in an Infinite Sorted Array](https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/)
Given a sorted array arr[] of infinite numbers. The task is to search for an element k in the array.

```java
Input: arr[] = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], k = 10
Output: 4
Explanation: 10 is at index 4 in array.


Input: arr[] = [2, 5, 7, 9], k = 3
Output: -1
Explanation: 3 is not present in array.
```

#### Intitution: 
Since array is sorted, the first thing clicks into mind is binary search, but the problem here is that we don’t know size of array.
If the array is infinite, that means we don’t have proper bounds to apply binary search. So in order to find position of key, first we find bounds and then apply binary search algorithm.

Let low be pointing to 1st element and high pointing to 2nd element of array, Now compare key with high index element,
-if it is greater than high index element then copy high index in low index and double the high index.
-if it is smaller, then apply binary search on high and low indices found.

![image](NormalBS/Learning/BS_12.jpg)

### Q.13 [Index of First 1 in a Binary Sorted Infinite Array](https://www.geeksforgeeks.org/find-index-first-1-infinite-sorted-array-0s-1s/)

Given an infinite sorted array consisting 0s and 1s. The problem is to find the index of first ‘1’ in that array. As the array is infinite, therefore it is guaranteed that number ‘1’ will be present in the array.

```java
Input : arr[] = {0, 0, 1, 1, 1, 1} 
Output : 2

Input : arr[] = {1, 1, 1, 1,, 1, 1}
Output : 0
```

![image](NormalBS/Learning/BS_13.jpg)

### Q.14 [Minimum Difference Element in a Sorted Array](https://www.geeksforgeeks.org/find-minimum-difference-pair/)

Given an unsorted array, find the minimum difference between any pair in the given array.

```java
Input: {1, 5, 3, 19, 18, 25}
Output: 1
Explanation: Minimum difference is between 18 and 19

Input: {30, 5, 20, 9}
Output: 4
Explanation: Minimum difference is between 5 and 9

Input: {1, 19, -4, 31, 38, 25, 100}
Output: 5
Explanation: Minimum difference is between 1 and -4
```




