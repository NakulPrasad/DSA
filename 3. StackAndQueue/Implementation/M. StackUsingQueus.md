# [Stack Using Queues](https://leetcode.com/problems/implement-stack-using-queues/description/)

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

**Notes:**

- You must use **only** standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

**Example 1:**

    Input["MyStack", "push", "push", "top", "pop", "empty"][[], [1], [2], [], [], []]Output[null, null, null, 2, 2, false] ExplanationMyStack myStack = new MyStack();myStack.push(1);myStack.push(2);myStack.top(); // return 2myStack.pop(); // return 2myStack.empty(); // return False

**Constraints:**

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

**Follow-up:** Can you implement the stack using only one queue?

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
