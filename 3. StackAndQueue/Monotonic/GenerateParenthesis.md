# Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]
```
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