# Balanced Parenthesis
Given a string `s` containing just the  characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.doc

```java
/**
 * Intitution:
 * This one is different as output format is different than what's input.
 *
 * Approach:
 * We maintain count of open and close brackets, when both count is zero we get a possible answer, store in list/array;
 * we know that first bracket will always be an "Open bracket", hence we remove the possiblity of starting with close bracket.
 *
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
