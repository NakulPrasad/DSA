# Order Not Known

> **Difficulty:** Easy  
> **Topic / Pattern:** BinarySearch  

---

## 📝 Problem Statement

Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order.

![image](images/order-not-known.jpg)

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

## 🎨 Visualization / Dry Run

![visualization](images/order-not-known.jpg)

---

## 💻 Implementation (Java)

```java
class Solution {
public:
    int search(vector<int>& nums, int target) {
      int start= 0;
      int end= nums.size()-1;
      if (nums[0]>nums[1]){ // desending
        while (start <= end)
        {
            int mid = start + (end-start)/2;
            if (target==nums[mid])
                return mid;
            else if (target<nums[mid])
                start= mid+1; // little variation
            else 
                end= mid-1;
        }
        return -1;
      }
      if (nums[0]<nums[1]){ // ascending 
         while (start <= end)
        {
            int mid = start + (end-start)/2;
            if (target==nums[mid])
                return mid;
            else if (target<nums[mid])
                end= mid-1;
            else 
                start= mid+1;
        }
        return -1;
      }

    }
};
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
