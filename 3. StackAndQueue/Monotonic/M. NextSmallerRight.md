# Next Smaller Element Right

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  

---

## 📝 Problem Statement

Given an array of integers, find the closest (not considering distance, but value) smaller on rightof every element. If an element has no smaller on the right side, print -1. .

### Examples
```text
input : arr[] = [4, 5, 2, 10, 8]
output : [-1, -1, 8, 5, -1]

Input: arr[] = [1, 3, 2, 4]
output : [-1, -1, 3, -1]
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
import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
		int [] nums = {4, 5, 2, 10, 8};
		ArrayList<Integer> ans = nextSmallerElementRight(nums);
		System.out.println(ans);
	}
	 public static ArrayList<Integer> nextSmallerElementRight(int[] nums) {
        int n = nums.length;
        ArrayList<Integer> ans = new ArrayList<>(Collections.nCopies(n, -1));
        Stack<Integer> st = new Stack<>();
        
        for (int i = n-1; i>= 0; i--) {
            int current = nums[i];
            while (!st.isEmpty() && st.peek() >= current) {
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
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
