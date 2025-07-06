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
## Approach : Recursion;
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
## Approach : Recusion - fast exponention
---

### 🔢 Problem

We want to calculate:

```
x^10
```

---

### 🧠 Naive Way (Slow)

We just multiply `x` ten times:

```
x * x * x * x * x * x * x * x * x * x    // 10 multiplications
```

→ **O(n)** time

---

### ⚡ Fast Way (Exponentiation by Squaring)

We use this identity:

```
x^n = (x^(n/2))^2       if n is even
x^n = x * (x^(n/2))^2   if n is odd
```

So instead of computing all `n` multiplications, we **break the exponent in half** each time.

---

### 🔄 Step-by-Step: `x^10`

Let's compute it using fast power:

```
x^10 = (x^5)^2              // n even → square x^5
x^5  = x * (x^2)^2          // n odd → x * (x^2)^2
x^2  = (x^1)^2              // n even
x^1  = x                   // base case
```

Now let's plug it back:

```
x^1 = x
x^2 = x^1 * x^1 = x * x
x^5 = x * (x^2)^2 = x * (x * x)^2
x^10 = (x^5)^2
```

So total operations:

* compute x^1 (base)
* square → x^2
* square again → x^4
* multiply with x → x^5
* square → x^10

✅ **Only 4–5 multiplications instead of 10**

---

### 📉 Why Is It Fast?

Because you're dividing the exponent by 2 at every step:

* So for `n = 10`, you do \~4 steps
* For `n = 1,000,000`, only \~20 steps
* In general: **O(log n)** steps

---

### 💡 Visual (Binary Insight)

Any number can be expressed in binary. For example:

```
10 = 1010 (binary)
x^10 = x^(8 + 2)
     = x^8 * x^2
```

So we only compute powers of 2 (`x^1`, `x^2`, `x^4`, ...) and multiply the needed ones together.

---

```java
class Solution {
    public double myPow(double x, int n) {
        // Convert n to long to handle cases like Integer.MIN_VALUE (−2^31)
        long N = n;
        
        // If exponent is negative, invert x and make N positive
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }

        // Call the fast exponentiation function
        return fastPow(x, N);
    }

    // Recursive function to compute x^n using exponentiation by squaring
    public double fastPow(double x, long n) {
        // Base case: anything raised to the power 0 is 1
        if (n == 0) return 1;

        // Recursively compute half = x^(n/2)
        double half = fastPow(x, n / 2);

        // If n is even, x^n = half * half
        // If n is odd, x^n = half * half * x
        if (n % 2 == 0)
            return half * half;
        else
            return half * half * x;
    }
}
```