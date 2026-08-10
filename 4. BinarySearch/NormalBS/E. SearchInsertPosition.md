# Search Insert Postion

> **Difficulty:** Easy  
> **Topic / Pattern:** BinarySearch  
> **Link:** [Search Insert Postion](https://leetcode.com/problems/search-insert-position/description/)

---

## 📝 Problem Statement

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

    Input: nums = [1,3,5,6], target = 5Output: 2

**Example 2:**

    Input: nums = [1,3,5,6], target = 2Output: 1

**Example 3:**

    Input: nums = [1,3,5,6], target = 7Output: 4

**Constraints:**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- `nums` contains **distinct** values sorted in **ascending** order.
- `-10 <= target <= 10`

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 💻 Implementation (Java)

```java
class Solution {
    public int searchInsert(int[] arr, int target) {
        int n = arr.length;
        int l = 0, r=n-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == target ){
                return mid;
            }
            else if(arr[mid] <target){
                l = mid +1;
            }
            else if(arr[mid] > target){
                r = mid -1;
            }
        }
        return l;
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
