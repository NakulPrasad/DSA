# [Balanced Parenthesis](https://www.interviewbit.com/problems/generate-all-parentheses-ii/)

- Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
- Input: n = 3
- Output: ["((()))","(()())","(())()","()(())","()()()"]

## Approach : Recursion

We have to make decisions, add open or close parenthesis

### Algorithm

- we have to track open and close in each decison making, a valid ans generated when all open and close used.
- invalid output when close appreases before open (close > open);
- to reduce recusion calls, we only make calls when open >=0 and close > open

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
