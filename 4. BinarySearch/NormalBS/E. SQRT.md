# [SQRTx](https://leetcode.com/problems/sqrtx/description/)

Given a non-negative integer `x`, return _the square root of _`x`_ rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

    Input: x = 4Output: 2Explanation: The square root of 4 is 2, so we return 2.

**Example 2:**

    Input: x = 8Output: 2Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

**Constraints:**

- `0 <= x <= 2 - 1`

## Approach : Binary Search

```java
class Solution {
    public int mySqrt(int x) {
        if (x == 0) return 0;

        int l = 1, r = x;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            // System.out.println(mid); // Optional debug print

            long temp = (long) mid * mid; // Use long to prevent overflow

            if (temp <= x) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return r; // r is the floor of sqrt(x)
    }
}

```
