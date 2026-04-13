# Print All Divisor

## Approach : Bruteforce

A brute force approach would be to iterate from 1 to n checking each value if it divides n without leaving a remainder. For each divisor found, store it in an array and a count of divisors is maintained. After iterating through all possible values, the size of the array is updated with the count of divisors and the array is returned.

```java

class Solution {
    public static void print_divisors(int n) {
        // code here
        List<Integer> list = new ArrayList<>();
        for(int i=1;i<=n;i++){
            if(n % i == 0){
                list.add(i);
            }
        }
        for(int i: list){
            System.out.print(i + " ");
        }
    }
}


```

#### Approach : Optimal

We can optimise the previous approach by using the property that for any non-negative integer n, if d is a divisor of n then n/d is also a divisor of n.

This property is symmetric about the square root of n by traversing just the first half we can avoid redundant iteration and computations improving the efficiency of the algorithm.

![image](https://static.takeuforward.org/content/print-all-divisors-image1-fh-zLEup)

```java

import java.util.ArrayList;

public class Main {
    public static ArrayList<Integer> findDivisors(int n) {
        ArrayList<Integer> divisors = new ArrayList<>();

        // Iterate up to the square
        // root of n to find divisors
        // Calculate the square root of n
        int sqrtN = (int) Math.sqrt(n);

        // Loop from 1 to the
        // square root of n
        for (int i = 1; i <= sqrtN; ++i) {
            // Check if i divides n
            // without leaving a remainder
            if (n % i == 0) {
                // Add divisor i to the list
                divisors.add(i);

                // Add the counterpart divisor
                // if it's different from i
                if (i != n / i) {
                    // Add the counterpart
                    // divisor to the list
                    divisors.add(n / i);
                }
            }
        }

        // Return the list of divisors
        return divisors;
    }
}
```
