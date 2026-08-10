# 3. [ThreeSUM](https://leetcode.com/problems/3sum/description/)

> **Difficulty:** Medium  
> **Topic / Pattern:** Two Pointers  

---

## 📝 Problem Statement

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

### Examples
```text
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

---

## 💡 Intuition & Core Approach

Bruteforce
```
/**
 * Approach : Bruteforce
 * 
 * 
*/
public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;

    Set<List<Integer>> set = new HashSet<>();
    Arrays.sort(nums);  // Sorting helps avoid duplicate triplets easily

    for (int i = 0; i < n - 2; i++) {
        for (int j = i + 1; j < n - 1; j++) {
            for (int k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                    set.add(triplet); // Set ensures uniqueness
                }
            }
        }
    }

    result.addAll(set);
    return result;
}
```



- Using Logic of two sum : 
- nums[i] + nums[j] + nums[k] == 0.
- nums[i] + nums[j] == -nums[k] (target).

```
/**
 * Approach : Two Pointers
 * For each i, j=i+1 and r=last element
 * 
 * 
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums); // Step 1: Sort the array

        int n = nums.length;
        //Step 2 : remove duplicates
        Set<List<Integer>> set = new HashSet<>();
        for (int i = 0; i < n - 2; i++) {

            int target = -nums[i];
            int l = i + 1;
            int r = n - 1;

            while (l < r) {
                int sum = nums[l] + nums[r];
                if (sum == target) {
                    set.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    l++;
                    r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        ans.addAll(set);
        return ans;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Approach : Two Pointers
 * For each i, j=i+1 and r=last element
 * Time : nlogn (sorting) + n
 * Space : 
 */
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums); // Step 1: Sort the array

        int n = nums.length;
        //Step 2 : remove duplicates
        Set<List<Integer>> set = new HashSet<>();
        for (int i = 0; i < n - 2; i++) {

            int target = -nums[i];
            int l = i + 1;
            int r = n - 1;

            while (l < r) {
                int sum = nums[l] + nums[r];
                if (sum == target) {
                    set.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    l++;
                    r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        ans.addAll(set);
        return ans;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N3) | [Provide justification] |
| **Space Complexity** | O(N) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
