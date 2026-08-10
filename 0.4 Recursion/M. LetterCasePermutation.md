# Letter Case Permutation

> **Difficulty:** Medium  
> **Topic / Pattern:** Recursion / Backtracking  
> **Link:** [LeetCode](https://leetcode.com/problems/letter-case-permutation/)

---

## 📝 Problem Statement

Given a string `s`, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

### Examples
```text
Input: s = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: s = "3z4"
Output: ["3z4", "3Z4"]
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** We use recursive backtracking to build each permutation character by character.
* **Key Observations:**
  - For each character at `index` in the string:
    - If the character is a digit, we have only one choice: append it and recurse to `index + 1`.
    - If the character is a letter, we have two choices: append the lowercase version and recurse, then backtrack and append the uppercase version and recurse.
  - Base Case: When `index` reaches the length of the string, we have formed a complete permutation, so we add it to our results list.

---

## 💻 Implementation (Java)

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> letterCasePermutation(String s) {
        List<String> ans = new ArrayList<>();
        helper(s, 0, new StringBuilder(), ans);
        return ans;
    }

    private void helper(String s, int index, StringBuilder output, List<String> ans) {
        if (index == s.length()) {
            ans.add(output.toString());
            return;
        }

        char ch = s.charAt(index);

        // Choice 1: Append lowercase (or the digit itself if it is not a letter)
        output.append(Character.toLowerCase(ch));
        helper(s, index + 1, output, ans);
        output.deleteCharAt(output.length() - 1); // backtrack

        // Choice 2: Append uppercase (only if it is a letter)
        if (Character.isLetter(ch)) {
            output.append(Character.toUpperCase(ch));
            helper(s, index + 1, output, ans);
            output.deleteCharAt(output.length() - 1); // backtrack
        }
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(2^L \cdot L)$ | Where $L$ is the length of the string. In the worst case (all letters), there are $2^L$ leaves in the recursion tree, and building each string of length $L$ takes $O(L)$ time. |
| **Space Complexity** | $O(L)$ | The maximum recursion depth is $L$, corresponding to the length of the string. We also use $O(L)$ space for the `StringBuilder`. |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **String with only digits:** e.g., `"1234"` -> Output should just be `["1234"]`. Handled correctly as `Character.isLetter(ch)` will be false for all characters.
* **String with special characters/spaces:** If the input can contain characters other than alphanumeric ones, `Character.isLetter()` properly handles them by not branching.
