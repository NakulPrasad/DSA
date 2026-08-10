# Find Target in a Sorted Array

> **Difficulty:** Easy  
> **Topic / Pattern:** Binary Search  
> **Link:** [GeeksforGeeks](https://www.geeksforgeeks.org/problems/binary-search-1587115620/1)

---

## 📝 Problem Statement

Given a sorted array `arr` and an integer `k`, find the position (0-based indexing) at which `k` is present in the array using binary search.

Note: If multiple occurrences are there, please return the smallest index.

### Examples
```text
Input: arr[] = [1, 2, 3, 4, 5], k = 4
Output: 3
Explanation: 4 appears at index 3.

Input: arr[] = [11, 22, 33, 44, 55], k = 445
Output: -1
Explanation: 445 is not present.

Input: arr[] = [1, 1, 1, 1, 2], k = 1
Output: 0
Explanation: 1 appears at index 0.
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** Perform a standard Binary Search, but when the target is found, record the index as a candidate (`idx = mid`) and continue searching in the left half (`r = mid - 1`) to find the smallest (first) index.
* **Key Steps:**
  - Initialize pointer `l = 0` and `r = nums.length - 1`.
  - While `l <= r`, compute `mid = l + (r - l) / 2`.
  - If `nums[mid] == target`, update `idx = mid` and move the right pointer `r = mid - 1` to search for first occurrence.
  - If `nums[mid] < target`, move `l = mid + 1`.
  - If `nums[mid] > target`, move `r = mid - 1`.

---

## 🎨 Visualization / Dry Run

![image](images/find-target-in-arrray.jpg)

---

## 💻 Implementation (Java)

```java
class Solution {
    public int binarysearch(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        int idx = -1;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                idx = mid; // Record candidate index
                r = mid - 1; // Move left to search for first occurrence
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return idx;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(\log N)$ | The search space is halved in each step. |
| **Space Complexity** | $O(1)$ | Constant extra space is used. |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Target not found:** Return `-1` when the loop terminates without finding the target.
* **Integer Overflow:** Avoid `(l + r) / 2` to prevent overflow, use `l + (r - l) / 2` instead.

