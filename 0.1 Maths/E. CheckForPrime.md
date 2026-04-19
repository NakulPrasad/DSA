# [Check for prime](https://www.geeksforgeeks.org/problems/prime-number2314/1)

Given a number n, determine whether it is a prime number or not.
Note: A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

```
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.
Input: n = 25

Constraints:
1 ≤ n ≤ 109
```

## Approach Brute force:

We can iterate through numbers from 1 to n, counting how many of these numbers divide n without a remainder. If exactly two numbers do, so n is prime otherwise it is not prime.

```java
                                
class Solution {
    static boolean isPrime(int n) {
        // code here
        int count = 1;
        for(int i=2; i<=n;i++){
            if(n%i == 0) count ++;
            
        }
        if(count == 2) return true;
        return false;
        
    }
}                
```
## Optimal:

We can optimise the algorithm by only iterating up to the square root of n when checking for factors. This is because if n has a factor greater than its square root, it must also have a factor smaller than its square root.

This property is symmetric about the square root of n by traversing just the first half we can avoid redundant iteration and computations improving the efficiency of the algorithm. Discusses in detail here:
![](https://static.takeuforward.org/content/prime-image1-VXvmlqqE)

```java

public class Main {
    static boolean checkPrime(int n){ 

        int cnt = 0;

        // Loop through numbers from 1
        // to the square root of n.
        for(int i = 1; i <= Math.sqrt(n); i++){ 

            // If n is divisible by i
            // without any remainder.
            if(n % i == 0){ 

                // Increment the counter.
                cnt = cnt + 1;

                // If n is not a perfect square,
                // count its reciprocal factor.
                if(n / i != i){
                    cnt = cnt + 1;
                }
            }
        }

        // If the number of
        // factors is exactly 2.
        if(cnt == 2){
             // that the number is prime.
            return true;
        }
        // If the number of
        // factors is not 2.
        else{ 
            // that the number is not prime.
            return false; 
        }
    }
}
```