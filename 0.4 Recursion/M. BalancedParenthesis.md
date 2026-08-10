# Balanced Parenthesis

> **Difficulty:** Medium  
> **Topic / Pattern:** Recursion  
> **Link:** [Balanced Parenthesis](https://www.interviewbit.com/problems/generate-all-parentheses-ii/)

---

## 📝 Problem Statement

- Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
- Input: n = 3
- Output: ["((()))","(()())","(())()","()(())","()()()"]

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

Recursion

We have to make decisions, add open or close parenthesis



- we have to track open and close in each decison making, a valid ans generated when all open and close used.
- invalid output when close appreases before open (close > open);
- to reduce recusion calls, we only make calls when open >=0 and close > open

```

public class Solution {
    public String[] generateParenthesis(int A) {
        ArrayList<String> list = new ArrayList<>();
        helper("", A, A, list);
        String[] ans = list.toArray(new String[0]);
        return ans;
    }
    public void helper(String output, int open, int close, ArrayList<String> list){
        //base case:
        //input is empty
        //when closing exceeds opening then return
        if(open == 0 && close ==0){
            list.add(output);
            return;
        }
        //generating output:
        if(open >=0){
            String output1 = output + "(";
            helper(output1, open-1, close, list);
        }

        if(close > open){
            String output2 = output + ")";
            helper(output2, open, close-1, list);
        }
    }
}

```

---

## 💻 Implementation (Java)

```java
public class Solution {
    public String[] generateParenthesis(int A) {
        ArrayList<String> list = new ArrayList<>();
        helper("", A, A, list);
        String[] ans = list.toArray(new String[0]);
        return ans;
    }
    public void helper(String output, int open, int close, ArrayList<String> list){
        //base case:
        //input is empty
        //when closing exceeds opening then return
        if(open == 0 && close ==0){
            list.add(output);
            return;
        }
        //generating output:
        if(open >=0){
            String output1 = output + "(";
            helper(output1, open-1, close, list);
        }

        if(close > open){
            String output2 = output + ")";
            helper(output2, open, close-1, list);
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
