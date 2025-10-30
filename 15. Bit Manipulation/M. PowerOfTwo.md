# [Power Of Two](https://leetcode.com/problems/power-of-two/description/)

Given an integer `n`, return _`true` if it is a power of two. Otherwise, return `false`_.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2`.

**Example 1:**

    Input: n = 1
    Output: true
    Explanation: 2 = 1

**Example 2:**

    Input: n = 16
    Output: true
    Explanation: 2 = 16

**Example 3:**

    Input: n = 3Output: false

**Constraints:**

- `-2 <= n <= 2 - 1`

**Follow up:**
Could you solve it without loops/recursion?

## Approach : Bit Manipulation
for power of 2 numbers;
taking (n & n-1) gives 0;
edge case n=0;

```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        return (n > 0 && (n & n-1) ==0)? true : false;
    }
}
```
