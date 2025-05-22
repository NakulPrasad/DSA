# Stack 

## 1. Implement Stack Using Arrays

As we know stack works on the principle of last in first out, so we have to put elements in an array such that it keeps track of the most recently inserted element. Hence we can think of using a Top variable which will help in keeping track of recent elements inserted in the array.

```java
class MyStack {
    private int[] arr;
    private int top;

    public MyStack() {
        // 1. Declare an array of particular size.
        arr = new int[1000];
        top = -1; // tracks top element
    }

    public void push(int x) {
        this.top += 1;
        this.arr[top] = x;
    }

    public int pop() {
        if(top <0)return -1; 
        int temp = arr[top];
        this.top -= 1;
        return temp;
    }
}
```
## 2. Implement Queue using Arrays

```java
class Queue {
    private int arr[];
    private int start, end, currSize, maxSize;
    public Queue() {
        arr = new int[16];
        start = -1;
        end = -1;
        currSize = 0;
    }

    public Queue(int maxSize) {
        this.maxSize = maxSize;
        arr = new int[maxSize];
        start = -1;
        end = -1;
        currSize = 0;
    }
    public void push(int newElement) {
        if (currSize == maxSize) {
            System.out.println("Queue is full\nExiting...");
            System.exit(1);
        }
        if (end == -1) {
            start = 0;
            end = 0;
        } else
            end = (end + 1) % maxSize;
        arr[end] = newElement;
        System.out.println("The element pushed is " + newElement);
        currSize++;
    }
    public int pop() {
        if (start == -1) {
            System.out.println("Queue Empty\nExiting...");
            System.exit(1);
        }
        int popped = arr[start];
        if (currSize == 1) {
            start = -1;
            end = -1;
        } else
            start = (start + 1) % maxSize;
        currSize--;
        return popped;
    }
    public int top() {
        if (start == -1) {
            System.out.println("Queue is Empty");
            System.exit(1);
        }
        return arr[start];
    }
    public int size() {
        return currSize;
    }

}
```
## 3. Implement Stack Using Queue

```java
class MyStack {

    private Queue<Integer> que = new LinkedList<>();

    public void push(int x) {
        que.add(x);
        int size = que.size();
        // Rotate the queue to make the recently added element at the front
        for (int i = 0; i < size - 1; i++) {
            que.add(que.remove());
        }
    }

    public int pop() {
        if (!que.isEmpty()) {
            return que.remove();
        }
        return -1; // You should handle this case or throw an exception
    }

    public int top() {
        if (!que.isEmpty()) {
            return que.peek();
        }
        return -1; // You should handle this case or throw an exception
    }

    public boolean empty() {
        return que.isEmpty();
    }
}
```
## 4. Implement Queue using stack

```java
// import java.util.*;
class MyQueue {
    private Stack<Integer> sta;
    private Stack<Integer> stb;

    public MyQueue() {
        sta = new Stack<>();
        stb = new Stack<>();
    }
    
    public void push(int x) {
        sta.push(x);
    }
    
    public int pop() {
        if(stb.isEmpty())
        while(!sta.isEmpty())
        stb.push(sta.pop());
        return stb.pop();
    }
    
    public int peek() {
        if(stb.isEmpty())
        while(!sta.isEmpty())
        stb.push(sta.pop());
        return stb.peek();
    }
    
    public boolean empty() {
        if(stb.isEmpty())
        while(!sta.isEmpty())
        stb.push(sta.pop());
        return stb.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```

## 5. Implement stack using Linkedlist

## 6. Implement Queue using Linkedlist 

## 7. Balanced Parenthesis
Given a string `s` containing just the  characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.doc

### Approach : Stack

### Pseudocode  

```java
/**
 * Intitution : 
 * Time : O(N)
 * Space : O(N)
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

## 8. Min Stack

```java
class MinStack {
    Stack<Integer> normal = new Stack<>();
    Stack<Integer> min = new Stack<>();
    public MinStack() {
        
    }
    
    public void push(int val) {
        normal.push(val);
        if(min.isEmpty()) min.push(val);
        else
        min.push(Math.min(min.peek(), val));
    }
    
    public void pop() {
        if(!normal.isEmpty() && !min.isEmpty()){

        normal.pop();
        min.pop();
        }
    }
    
    public int top() {
        if(!normal.isEmpty())
        return normal.peek();
        return 0;
    }
    
    public int getMin() {
        if(!min.isEmpty())
        return min.peek();
        return 0;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```