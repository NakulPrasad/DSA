# Types
- **Fixed-size window**: The size of the window remains constant.
- **Variable-size window**: The window can expand or contract based on the problem's requirements.

# Fixed-sized window

### Q.1 [Max Sum Subarray of size K](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1)
Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.

Note: A subarray is a contiguous part of any given array.

```java
Input: arr[] = [100, 200, 300, 400] , k = 2
Output: 700
Explanation: arr3  + arr4 = 700, which is maximum.

Input: arr[] = [100, 200, 300, 400] , k = 4
Output: 1000
Explanation: arr1 + arr2 + arr3 + arr4 = 1000, which is maximum.

Input: arr[] = [100, 200, 300, 400] , k = 1
Output: 400
Explanation: arr4 = 400, which is maximum.
```

### Q.2 [First negative in every window of size k](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1)

Given an array arr[]  and a positive integer k, find the first negative integer for each and every window(contiguous subarray) of size k.

Note: If a window does not contain a negative integer, then return 0 for that window.

```java
Input: arr[] = [-8, 2, 3, -6, 10] , k = 2
Output: [-8, 0, -6, -6]
Explanation:
Window [-8, 2] First negative integer is -8.
Window [2, 3] No negative integers, output is 0.
Window [3, -6] First negative integer is -6.
Window [-6, 10] First negative integer is -6.

Input: arr[] = [12, -1, -7, 8, -15, 30, 16, 28] , k = 3
Output: [-1, -1, -7, -15, -15, 0] 
Explanation:
Window [12, -1, -7] First negative integer is -1.
Window [-1, -7, 8] First negative integer is -1.
Window [-7, 8, -15] First negative integer is -7.
Window [8, -15, 30] First negative integer is -15.
Window [-15, 30, 16] First negative integer is -15.
Window [30, 16, 28] No negative integers, output is 0.

Input: arr[] = [12, 1, 3, 5] , k = 3
Output: [0, 0] 
Explanation:
Window [12, 1, 3] No negative integers, output is 0.
Window [1, 3, 5] No negative integers, output is 0.
```

### Q.3 
### Q.4 
### Q.5 
### Q.6 
### Q.7 
### Q.8 
### Q.9 
### Q.10 