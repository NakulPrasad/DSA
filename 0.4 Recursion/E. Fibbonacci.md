# [Fibbonacci](https://leetcode.com/problems/fibonacci-number/)

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
```

```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

## Approach : Iterative

```java
class Solution {
    public int fib(int n) {
        int prev = 0;
        if(n==0) return prev;
        int curr = 1;
        if(n==1) return curr;
        n=n-2;

        while(n-- >=0){
            int currSum = prev + curr;
            prev = curr;
            curr = currSum;
        }
        return curr;
    }
}
```

## Approach : Recursion

Time : O(N+1)
Space : O(N+1)

```java
class Solution {
    public int fib(int n) {
        return helper(n);

    }
    int helper(int n){
        if(n<=1)
            return n;
        return fib(n-2)+fib(n-1);
    }
}

```
