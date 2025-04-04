package StackAndQueue.Learning;

// Implement Stack Using Arrays

class MyStack {
    private int[] arr;
    private int top;

    public MyStack() {
        arr = new int[1000];
        top = -1;
    }

    public void push(int x) {
        // Your Code
        this.top += 1;
        this.arr[top] = x;
    }

    public int pop() {
        // Your Code
        if(top <0)return -1; 
        int temp = arr[top];
        this.top -= 1;
        return temp;
    }
}