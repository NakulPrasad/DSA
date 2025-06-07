# [Floor in a Sorted Array](https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1)
Given a sorted array and a value x, the floor of x is the largest element in array smaller than or equal to x. Write efficient functions to find floor of x.

```java
Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output : 2
2 is the largest element in arr[] smaller than 5.
```

```java
class Solution {
    int findFloor(int[] arr, int n, int x) {
        int l = 0, r = n - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x) {
                return mid;
            } else if (arr[mid] > x) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return r;
    }
}

```