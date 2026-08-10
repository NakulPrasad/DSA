# Contains Duplicate

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays & Hashing  
> **Link:** [LeetCode](https://leetcode.com/problems/contains-duplicate/)

---

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Examples
```text
Input: nums = [1, 2, 3, 1]
Output: true

Input: nums = [1, 2, 3, 4]
Output: false

Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

---

## 💡 Intuition & Core Approach

We can solve this problem using two primary approaches:

### Approach 1: Hash Set (Optimal)
* **The Core Idea:** Traverse the array and keep track of visited numbers using a Hash Set. Since a Set cannot contain duplicate values, if we attempt to add a number that already exists in the set, we know a duplicate is found.
* **Why it's good:** It gives $O(N)$ time complexity at the cost of $O(N)$ space.

### Approach 2: Sorting (Space-Efficient)
* **The Core Idea:** Sort the array first. If there are duplicates, they will end up adjacent to each other. We can then do a single linear scan to check if any adjacent elements are equal.
* **Why it's good:** It uses $O(1)$ extra space, but takes $O(N \log N)$ time.

---

## 💻 Implementation (Java)

### Approach 1: Hash Set (Optimal)
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            // set.add returns false if the element was already present
            if (!set.add(num)) {
                return true;
            }
        }
        return false;
    }
}
```

### Approach 2: Sorting
```java
import java.util.Arrays;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return false;
        }
        
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
```

---

## 📊 Complexity Analysis

### Hash Set Approach
| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(N)$ | We iterate through the array of size $N$ once. Set lookup and insertion operations are $O(1)$ on average. |
| **Space Complexity** | $O(N)$ | In the worst case (all elements unique), we store all $N$ elements in the Set. |

### Sorting Approach
| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(N \log N)$ | Sorting the array takes $O(N \log N)$ time. The subsequent linear scan takes $O(N)$ time. |
| **Space Complexity** | $O(1)$ | No extra memory is used if we sort in-place (or $O(\log N)$ or $O(N)$ depending on the language's sorting implementation space overhead). |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Empty Array or Single Element:** An array with `0` or `1` element cannot contain duplicates. Handled naturally or with a quick check.
* **Null Check:** Always check if the input array is null before accessing properties.