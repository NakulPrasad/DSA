# [Check Kth Bit Set Or Not ](https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1)

Given two positive integer **n**and **k**, check if the **k** index bit of **n**is set or not.  
** Note: **A bit is called set if it is 1.

**Examples :**

    Input: n = 4, k = 0Output: falseExplanation: Binary representation of 4 is 100, in which 0 index bit from LSB is not set. So, return false.

    Input: n = 4, k = 2Output: trueExplanation: Binary representation of 4 is 100, in which 2 index bit from LSB is set. So, return true.

    Input: n = 500, k = 3Output: falseExplanation: Binary representation of 500 is 111110100, in which 3rd index bit from LSB is not set. So, return false.

**Constraints:**  
1 ≤ n ≤ 10  
0 ≤ k ≤ 31

## Approach : Bit Manipulation

```java
class CheckBit {
    static boolean checkKthBit(int n, int k) {
        return ((n & (1 << k)) != 0);
    }
}
```
