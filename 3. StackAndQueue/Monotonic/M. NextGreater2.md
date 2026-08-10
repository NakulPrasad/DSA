#  Next Greater Element II

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  
> **Link:** [ Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)

---

## 📝 Problem Statement

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

### Examples
```text
Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number.
The second 1's next greater number needs to search circularly, which is also 2.

Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
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
    public int[] nextGreaterElements(int[] arr) {
        int n = arr.length;
         var ans = new int[n];
        var st = new Stack<Integer>();
        ans[n-1] = -1;
        st.push(arr[n-1]);
       for(int i=2*n-2;i>=0;i--){
           while(!st.isEmpty() && st.peek()<= arr[i%n] ){
               st.pop();
           }
           if(st.isEmpty())
               ans[i%n] = -1;
           else
               ans[i%n] = st.peek();
           st.push(arr[i%n]);
       }

        return ans;

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
