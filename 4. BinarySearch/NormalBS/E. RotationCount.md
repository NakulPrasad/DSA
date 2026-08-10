# RotationCount

> **Difficulty:** Easy  
> **Topic / Pattern:** BinarySearch  

---

## 📝 Problem Statement

[Insert problem description here]

### Examples
```text
Input: arr = [5, 1, 2, 3, 4]
Output: 1
Explanation: The given array is 5 1 2 3 4. The original sorted array is 1 2 3 4 5. We can see that the array was rotated 1 times to the right.
Input: arr = [1, 2, 3, 4, 5]
Output: 0
Explanation: The given array is not rotated.
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 🎨 Visualization / Dry Run

![visualization](NormalBS/Learning/BS_6.jpg)

---

## 💻 Implementation (Java)

```java
class Solution {
    public int findKRotation(List<Integer> arr) {
        int n = arr.size();
        int min = Integer.MAX_VALUE;
        int idx = -1;
        while(n-- > 0){
            if(arr.get(n) < min){
                min = arr.get(n);
                idx = n;
            }
        }
        return idx;
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
