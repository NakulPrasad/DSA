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