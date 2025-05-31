### Q.9 [Floor in a Sorted Array](https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1)
Given a sorted array and a value x, the floor of x is the largest element in array smaller than or equal to x. Write efficient functions to find floor of x.

```java
Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output : 2
2 is the largest element in arr[] smaller than 5.
```
![image](NormalBS/Learning/BS_9.jpg)

### Q.10 [Ceil in a Sorted Array](https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1)
Given a sorted array arr[] and an integer x, find the index (0-based) of the smallest element in arr[] that is greater than or equal to x. This element is called the ceil of x. If such an element does not exist, return -1.

Note: In case of multiple occurrences of ceil of x, return the index of the first occurrence.

```java
Input: arr[] = [1, 2, 8, 10, 11, 12, 19], x = 5
Output: 2
Explanation: Smallest number greater than 5 is 8, whose index is 2.

Input: arr[] = [1, 2, 8, 10, 11, 12, 19], x = 20
Output: -1
Explanation: No element greater than 20 is found. So output is -1.

Input: arr[] = [1, 1, 2, 8, 10, 11, 12, 19], x = 0
Output: 0
Explanation: Smallest number greater than 0 is 1, whose indices are 0 and 1. The index of the first occurrence is 0.
```
![image](NormalBS/Learning/BS_10.jpg)

### Q.11 [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)
Given an array of letters sorted in ascending order, find the smallest letter in the the array which is greater than a given key letter.

```java
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
```

![image](NormalBS/Learning/BS_11.jpg)

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




