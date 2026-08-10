# Subarray sum equals k

> **Difficulty:** Medium  
> **Topic / Pattern:** PrefixSum  
> **Link:** [Subarray sum equals k](https://leetcode.com/problems/subarray-sum-equals-k/description/)

---

## 📝 Problem Statement

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

### Examples
```text
Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
```

---

## 💡 Intuition & Core Approach

Prefix Sum
```
class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1); // Base case: sum 0 exists once
        int sum = 0;
        int count = 0;
        
        for(int num : nums){
            sum += num;
            if(prefixSumCount.containsKey(sum - k)){
                count += prefixSumCount.get(sum - k);
            }
            prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
        }
        
        return count;
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1); // Base case: sum 0 exists once
        int sum = 0;
        int count = 0;
        
        for(int num : nums){
            sum += num;
            if(prefixSumCount.containsKey(sum - k)){
                count += prefixSumCount.get(sum - k);
            }
            prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
        }
        
        return count;
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
