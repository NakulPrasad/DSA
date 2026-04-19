# [Power of Three](https://leetcode.com/problems/power-of-three/description/)

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

```
Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
```

Follow up: Could you solve it without loops/recursion?

## Approach : Recursion

in js n%3==0 check isn't requred.
check is required in java.

```java
class Solution {
    public boolean isPowerOfThree(int n) {
        if(n ==1) return true;
        else if(n ==0) return false;
        return n%3==0 && isPowerOfThree(n/3);
    }
}
```
