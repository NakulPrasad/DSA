package StackAndQueue.PrefixInfixPostfix;

import java.util.*;

class Solution {
    // Function to convert an infix expression to a postfix expression.
    public static String infixToPostfix(String s) {
        // Your code here
        int n = s.length();
        StringBuilder ans = new StringBuilder("");
        Stack<Character> stack = new Stack()<>();
        for(int i=0; i<n;i++){
            char ch = s.charAt(i);
            
            //if its operatant add to answer
            if(Character.isLetter(ch) || Character.isDigit(ch)){
                ans.append(ch);
            }
            
            //if '(' push to stack
            else if(ch == '('){
                stack.push(ch);
            }
            
            //else if ')' pop till '(' and add to ans then pop the '(' from stack also
            else if(ch ==')'){
                while(!stack.isEmpty() && stack.peek() != '('){
                    ans.append(stack.pop());
                    
                }
                stack.pop(); //removes ')' from stack
                
            }
            else{
                //got operator of lower value
                while(!stack.isEmpty() && weight(ch) <= weight(stack.peek())){
                    ans.append(stack.pop());
                    
                }
                stack.push(ch); //push the current lower value operator to stack
            }
            
            
        }
        
        //pop all element remained in stack after bracket got closed
             while (!stack.isEmpty()) {
            ans.append(stack.pop());
        }
        return ans.toString();
        
    }
    
    public static int weight (Character ch){
        switch(ch){
            case '^':
                return 3;
            case '*' :
                return 2;
            case '/' :
                return 2;
            case '+':
                return 1;
            case '-' :
                return 1;
            default :
                return -1;
        }
    }
}
