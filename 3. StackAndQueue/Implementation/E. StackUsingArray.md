# [Implement Stack Using Arrays](https://www.geeksforgeeks.org/problems/implement-stack-using-array/1)

As we know stack works on the principle of last in first out, so we have to put elements in an array such that it keeps track of the most recently inserted element. Hence we can think of using a Top variable which will help in keeping track of recent elements inserted in the array.

- create and array of size 100, and top variable;
- push : increase top by 1 and insert to array
- pop : remove element from array at index 'top' and return that;
- top : return arr[top];

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