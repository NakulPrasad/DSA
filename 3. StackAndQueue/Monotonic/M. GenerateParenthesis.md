# Generate Parentheses

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  

---

## 📝 Problem Statement

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Examples
```text
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]
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
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        solve("", n, n, ans);
        return ans;
    }

    private void solve(String output, int open, int close, List<String> ans) {
        // Base case
        if (open == 0 && close == 0) {
            ans.add(output);
            return;
        }

        // Add opening bracket if any left
        if (open > 0) {
            solve(output + "(", open - 1, close, ans);
        }

        // Add closing bracket only if it doesn't exceed opening count
        if (close > 0 && open < close) {
            solve(output + ")", open, close - 1, ans);
        }
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
