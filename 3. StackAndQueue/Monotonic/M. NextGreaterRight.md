# Next Greater to Right

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  
> **Link:** [Next Greater to Right](https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1)

---

## 📝 Problem Statement

Given an array arr[ ] of integers, the task is to find the next greater element for each element of the array in order of their appearance in the array. 

Next greater element of an element in the array is the nearest element on the right which is greater than the current element.

If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

### Examples
```text
Input: arr[] = [1, 3, 2, 4]
Output: [3, 4, 4, -1]
Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.

Input: arr[] = [6, 8, 0, 1, 3]
Output: [8, -1, 1, 3, -1]
Explanation: The next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 , for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
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
/**
 * Time : N
 * Space : N
 */
class Solution {
    public ArrayList<Integer> nextLargerElement(int[] nums) {
        int n = nums.length;
        ArrayList<Integer> ans = new ArrayList<>(Collections.nCopies(n, -1));
        Stack<Integer> st = new Stack<>();
        
        for (int i = n - 1; i >= 0; i--) {
            int current = nums[i];
            while (!st.isEmpty() && st.peek() <= current) {
                st.pop();
            }
            if (!st.isEmpty()) {
                    ans.set(i, st.peek());
                
            }
            st.push(current);
        }
        
        return ans;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | N | [Provide justification] |
| **Space Complexity** | N | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
