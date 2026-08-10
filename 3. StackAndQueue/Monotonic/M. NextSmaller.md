# Next Smaller Element Left

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  

---

## 📝 Problem Statement

For each element in array print the next greatest element of it's left.

### Examples
```text
input : arr[] = [4, 8, 5, 2, 25]
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
		int [] nums = {4, 8, 5, 2, 25};
		ArrayList<Integer> ans = nextLargerElementLeft(nums);
		System.out.println(ans);
	}
	 public static ArrayList<Integer> nextLargerElementLeft(int[] nums) {
        int n = nums.length;
        ArrayList<Integer> ans = new ArrayList<>(Collections.nCopies(n, -1));
        Stack<Integer> st = new Stack<>();
        
        for (int i = 0; i < n; i++) {
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
