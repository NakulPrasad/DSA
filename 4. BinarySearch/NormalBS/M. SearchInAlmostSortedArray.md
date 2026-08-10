# Search in an almost Sorted Array

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  
> **Link:** [Search in an almost Sorted Array](https://www.geeksforgeeks.org/problems/search-in-an-almost-sorted-array/1)

---

## 📝 Problem Statement

Given an array which is sorted, but after sorting some elements are moved to either of the adjacent positions, i.e., arr[i] may be present at arr[i+1] or arr[i-1]. Write an efficient function to search an element in this array. Basically the element arr[i] can only be swapped with either arr[i+1] or arr[i-1].

For example consider the array {2, 3, 10, 4, 40}, 4 is moved to next position and 10 is moved to previous position.

### Examples
```text
Example :
Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 40
Output: 2 
Output is index of 40 in given array
```

---

## 💡 Intuition & Core Approach

Binary Search 
```
class Solution {
    public int findTarget(int arr[], int target) {
        int l=0,r=arr.length-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == target){
                return mid;
            }
            else if(mid -1 >= l && arr[mid-1] == target){
                return mid-1;
            }
            else if(mid +1 <= r && arr[mid+1] == target){
                return mid+1;
            }
            else if(arr[mid] > target){
                r = mid-2;
            }
            else 
                l = mid+2;
        }
        return -1;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int findTarget(int arr[], int target) {
        int l=0,r=arr.length-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == target){
                return mid;
            }
            else if(mid -1 >= l && arr[mid-1] == target){
                return mid-1;
            }
            else if(mid +1 <= r && arr[mid+1] == target){
                return mid+1;
            }
            else if(arr[mid] > target){
                r = mid-2;
            }
            else 
                l = mid+2;
        }
        return -1;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
