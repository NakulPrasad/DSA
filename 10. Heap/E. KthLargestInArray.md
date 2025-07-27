# [Kth Largest In Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

```
Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

## Approach : Heap

Why not simply using sort?

- sorting whole array takes O(nlogn);
- whereas heap reduce to O(nlogK);

```java
/**
 * Time : nlogK
 * Space : K
*/
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int output =-1;
        Queue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        for(int i: nums) maxHeap.offer(i);
        while(k>0){
            output = maxHeap.poll();
             k--;
        }
        return output;
    }
}
```
