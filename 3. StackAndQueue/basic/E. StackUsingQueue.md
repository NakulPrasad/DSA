# Implement Stack Using Queue

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