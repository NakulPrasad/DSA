# [Armstrong Number](https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1)

Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

```java
Input:N = 153
Output:True
Explanation: 13+53+33 = 1 + 125 + 27 = 153

Input:N = 371
Output: True
Explanation: 33+53+13 = 27 + 343 + 1 = 371
```

```java
class Solution {
    static boolean armstrongNumber(int n) {
        // code here
        int m = n;
        int ld =0;
        int cube =0;
        while(m>0){
            ld = m%10;
            cube += Math.pow(ld, 3);
            m /=10;
        }
        if(cube == n) return true;
        return false;

    }
}
```
