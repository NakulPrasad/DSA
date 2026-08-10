# Q.16 [Find Maximum Element in bitonic array](https://www.geeksforgeeks.org/problems/maximum-value-in-a-bitonic-array3001/1)

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  

---

## 📝 Problem Statement

Given a bitonic array find the maximum value of the array.

Bitonic means first increasing then decreasing.

### Examples
```text
Input: 1 4 8 3 2
Output: 8

Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
Output: 8

Input: arr[] = [10, 20, 30, 40, 50]
Output: 50

Input: arr[] = [120, 100, 80, 20, 0]
Output: 120
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
// User function Template for Java

class Solution {
    public int findMaximum(int[] nums) {
        // code here
          int start = 0;
        int end = nums.length-1;
        if (end == 0) return 0;
        while(start<=end){
            int mid = start + (end-start)/2;
            if(mid>0 && mid<nums.length-1){//handle boundary indexes
                if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
                    return nums[mid];
                }
                else if(nums[mid+1]>nums[mid]){
                    start = mid+1;
                }
                else 
                    end = mid-1;
            }
            //boundary cases
            else if(mid ==0){
                if(nums[0] > nums[1])
                return nums[0];
                else 
                return nums[1];
            }
            else if(mid == nums.length-1){
                if(nums[nums.length-1] > nums[nums.length-2])
                return nums[nums.length-1];
                else 
                return nums[nums.length-2];
            }

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
