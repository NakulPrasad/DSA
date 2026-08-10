# Distinct Subset

> **Difficulty:** Medium  
> **Topic / Pattern:** Recursion  
> **Link:** [Distinct Subset](https://www.geeksforgeeks.org/problems/subset-sum-ii/1)

---

## 📝 Problem Statement

You are given an array arr[] of positive integers (which may contain duplicates), your task is to find all the unique or distinct subsets of the array.

Note: You can return the subsets in any order, the driver code will print them in sorted order.

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
    public ArrayList<ArrayList<Integer>> findSubsets(int[] nums) {
        // code here
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        ArrayList<Integer> output = new ArrayList<>();
        Set<ArrayList<Integer>> set = new HashSet<>();
        Arrays.sort(nums);
        helper(nums, output, ans,set);
        return ans;
    }

    private void helper(int[] input, ArrayList<Integer> output, ArrayList<ArrayList<Integer>> ans, Set<ArrayList<Integer>> set) {
        if (input.length == 0) {
            if(!set.contains(output)){
                set.add(output);
                ans.add(output);
                
            }
            return;
        }

        ArrayList<Integer> out1 = new ArrayList<>(output);
        ArrayList<Integer> out2 = new ArrayList<>(output);

        out1.add(input[0]);
        int newInput[] = Arrays.copyOfRange(input, 1, input.length);

        helper(newInput, out1, ans, set);
        helper(newInput, out2, ans, set);

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
