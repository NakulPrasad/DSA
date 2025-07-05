# [Power of X ^ N](https://leetcode.com/problems/powx-n/description/)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

```
Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```
# Approach : Recursion;
```java
/**
 *
 * Method : recusion, fails for large inputs
 * Time : O(N), 
 * Space : O(N) stack space;
 */

class Solution {
    public double myPow(double x, int n) {
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        return helper(x, n);
    }
    public double helper(double x, int n){
        if (n == 0) return 1;
        return x * helper(x, n - 1);
    }
}

```