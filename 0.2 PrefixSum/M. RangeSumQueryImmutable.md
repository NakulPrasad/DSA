# Range Sum Query - Immutable

> **Difficulty:** Medium  
> **Topic / Pattern:** PrefixSum  
> **Link:** [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)

---

## 📝 Problem Statement

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

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
class NumArray {
    int prefix[];
    public NumArray(int[] nums) {
        int n = nums.length;
        prefix = new int[n];
        //make prefix arr
        prefix[0] = nums[0];
        for(int i=1; i<n;i++){
            prefix[i] = prefix[i-1] + nums[i];
        }
        System.out.println(Arrays.toString(prefix));
    }
    
    public int sumRange(int left, int right) {
        if(left == 0){
          return prefix[right];
        }
        return prefix[right] - prefix[left-1];
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
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
