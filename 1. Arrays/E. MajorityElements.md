# Majority Elements

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Majority Elements](https://leetcode.com/problems/majority-element/description/)

---

## 📝 Problem Statement

Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

    Input: nums = [3,2,3]
    Output: 3

**Example 2:**

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 10`
- `-10 <= nums[i] <= 10`

**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

voting algo

```
public class Solution {
    public int majorityElement(int[] nums) {
        int maje = -1, count = 1;

        for (int i : nums) {
            if (i != maje) {
                count--;
                if (count == 0) {
                    maje = i;
                    count++;
                }
            } else {
                count++;
            }
        }

        return maje;
    }
}

```



```
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return nums[n/2];
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return nums[n/2];
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
