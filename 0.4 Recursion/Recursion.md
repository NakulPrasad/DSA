# Recursion

> **Difficulty:** Easy  
> **Topic / Pattern:** Recursion  

---

## 📝 Problem Statement

Recursion is a process in which a method calls itself continuously. A method that calls itself is called a recursive method.

---

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

calls itself continuously. A method that calls itself is called a recursive method.

---



```
public class RecursionExample {
    public static void main(String[] args) {
        int x = 10;
        increasing(x);
    }

    public static void increasing(int x) {
        // 1. Base case
        if (x == 0) {
            return;
        }
        
        // 2. Recursive call (Hypothesis)
        increasing(x - 1);
        
        // 3. Operation (Induction)
        System.out.println(x);
    }
}
```

---



1. **Base Case:** The condition under which the recursion terminates (preventing infinite loops / stack overflow).
2. **Hypothesis:** Assume the recursive call works correctly for a smaller subproblem (e.g., `increasing(x - 1)` correctly prints $1$ to $x-1$).
3. **Induction:** Link the base case and hypothesis to solve the overall problem (e.g., print the current number `x` after printing $1$ to $x-1$).

---


1. **IBH Method (Induction, Hypothesis, Base Case):** Best for simple recursive traversal, sorting stack/array, reversing things.
2. **Recursion Tree Method:** Useful for backtracking, subsets, combinations, permutations, and understanding divide-and-conquer.
3. **Dynamic Programming (DP):** Used when subproblems overlap, requiring memoization or tabulation to optimize time complexity.

---

## 💻 Implementation (Java)

```java
public class RecursionExample {
    public static void main(String[] args) {
        int x = 10;
        increasing(x);
    }

    public static void increasing(int x) {
        // 1. Base case
        if (x == 0) {
            return;
        }
        
        // 2. Recursive call (Hypothesis)
        increasing(x - 1);
        
        // 3. Operation (Induction)
        System.out.println(x);
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
