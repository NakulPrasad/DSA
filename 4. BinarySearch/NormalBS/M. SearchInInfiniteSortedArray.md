# [Find position of an element in an Infinite Sorted Array](https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/)

Given a sorted array arr[] of infinite numbers. The task is to search for an element k in the array.

```java
Input: arr[] = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], k = 10
Output: 4
Explanation: 10 is at index 4 in array.


Input: arr[] = [2, 5, 7, 9], k = 3
Output: -1
Explanation: 3 is not present in array.
```
## Approach Binary Search
Since array is sorted, the first thing clicks into mind is binary search, but the problem here is that we don’t know size of array.
If the array is infinite, that means we don’t have proper bounds to apply binary search. So in order to find position of key, first we find bounds and then apply binary search algorithm.

Let low be pointing to 1st element and high pointing to 2nd element of array, Now compare key with high index element,
-if it is greater than high index element then copy high index in low index and double the high index.
-if it is smaller, then apply binary search on high and low indices found.
- Increase the end index, such that the 'target' lies left side of the end index and greater than start

```java
import java.util.*;
public class solution {
  public static int binarySearch(int[] arr, int low, int high, int key) {
    while (low <= high) {

      int mid = (low + high) / 2;
      if (arr[mid] < key) {
        low = mid + 1;
      } else if (arr[mid] > key) {
        high = mid - 1;
      } else {
        return mid;
      }

    }
    return -1;
  }
  public static int findIndex(int[] arr, int key) {
    int low = 0;
    int high = 1;
    while (arr[high] < key) {
      low = high;
      high = 2 * high;
    }
    return binarySearch(arr, low, high, key);
  }
  public static void main(String args[]) {
    // Your code goes here
    int[] arr = {3,5,7,9,10,90,100,130,140,160,170};

    int ans = findIndex(arr, 130);

    System.out.println("Element found at index " + ans);
  }
}
```
