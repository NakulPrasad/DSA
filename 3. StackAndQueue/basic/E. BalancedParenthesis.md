# [Balanced Parenthesis](https://leetcode.com/problems/valid-parentheses/description/)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.doc

## Approach : Stack
 * We maintain count of open and close brackets, when both count is zero we get a possible answer, store in list/array;
 * we know that first bracket will always be an "Open bracket", hence we remove the possiblity of starting with close bracket.

```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([])"
Output: true
```

```java
/**
 * Time : O(N)
 * Space : O(N)
 *
*/
class Solution {
    public boolean isValid(String s) {
        var st = new Stack<Character>();
        for(char c : s.toCharArray()){
	         if(c == '{')  st.push('}');
		          else if(c=='[')  st.push(']');
			        else if(c== '(') st.push(')');

			        else if(st.isEmpty() || st.pop() != c)
		        return false;
        }
        return st.isEmpty();
    }
}
```
## Approach : Regex
- loop upto mid and use regex;
```java
/**
 * Time : n/2
 * space : 1
 */
class Solution {
    public boolean isValid(String s) {
        int l = s.length()/2;
        while(l-- > 0){
            s = s.replaceAll("\\(\\)|\\{\\}|\\[\\]","");
        }
        return s.isEmpty();
    }
}
```