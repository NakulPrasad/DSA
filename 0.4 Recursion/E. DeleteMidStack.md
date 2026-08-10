# Delete Mid of Stack

> **Difficulty:** Easy  
> **Topic / Pattern:** Recursion  
> **Link:** [Delete Mid of Stack](https://www.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1)

---

## 📝 Problem Statement

Given a stack s, delete the middle element of the stack without using any additional data structure.

Middle element:- floor((size_of_stack+1)/2) (1-based indexing) from the bottom of the stack.

Note: The output shown by the compiler is the stack from top to bottom.

### Examples
```text
Examples:

Input: s = [10, 20, 30, 40, 50]
Output: [50, 40, 20, 10]
Explanation: The bottom-most element will be 10 and the top-most element will be 50. Middle element will be element at index 3 from bottom, which is 30. Deleting 30, stack will look like {10 20 40 50}.

Input: s = [10, 20, 30, 40]
Output: [40, 30, 10]
Explanation: The bottom-most element will be 10 and the top-most element will be 40. Middle element will be element at index 2 from bottom, which is 20. Deleting 20, stack will look like {10 30 40}.

Input: s = [5, 8, 6, 7, 6, 6, 5, 10, 12, 9]
Output: [9, 12, 10, 5, 6, 7, 6, 8, 5]

Constraints:
2 ≤ element of stack ≤ 105
2 ≤ s.size() ≤ 104
```

---

## 💡 Intuition & Core Approach

Recursion
```
class Solution {
    public static void deleteMid(Stack<Integer> s, int sizeOfStack) {
        int mid = sizeOfStack / 2;
        delete(s, mid, 0);
    }

    private static void delete(Stack<Integer> s, int mid, int count) {
        if (count == mid) {
            s.pop();
            return;
        }

        int temp = s.pop();
        delete(s, mid, count + 1);
        s.push(temp);
    }
}

```

---

## 💻 Implementation (Java)

```java
class Solution {
    public static void deleteMid(Stack<Integer> s, int sizeOfStack) {
        int mid = sizeOfStack / 2;
        delete(s, mid, 0);
    }

    private static void delete(Stack<Integer> s, int mid, int count) {
        if (count == mid) {
            s.pop();
            return;
        }

        int temp = s.pop();
        delete(s, mid, count + 1);
        s.push(temp);
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
