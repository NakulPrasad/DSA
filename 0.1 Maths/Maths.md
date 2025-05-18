# Maths

### Q.1 Count Digits in Number

```java
class Main {
    // Calculate the count of digits in 'n'
    // using logarithmic operation log10(n) + 1.
    static int countDigits(int n) {
        // Initialize a variable 'cnt' to
        // store the count of digits.
        int cnt = (int) (Math.log10(n) + 1);

        // The expression (int)(Math.log10(n) + 1)
        // calculates the number of digits in 'n'
        // and casts it to an integer.

        // Adding 1 to the result accounts
        // for the case when 'n' is a power of 10,
        // ensuring that the count is correct.

        // Finally, the result is cast
        // to an integer to ensure it is rounded
        // down to the nearest whole number.

        // Return the count of digits in 'n'.
        return cnt;
    }
}
```

### Q.2 Reverse a number

```java
class ReverseNumber {
    public int reverse(int x) {
        int reverse = 0; 
        while (x != 0) {
            int lastDigit = x % 10; // Extract the last digit
            x = x / 10; // Remove the last digit from x
            
            // Check for overflow or underflow before updating reverse
            if (reverse > Integer.MAX_VALUE / 10 || reverse < Integer.MIN_VALUE / 10) {
                return 0; // Return 0 if overflow/underflow is detected
            }
            
            reverse = (reverse * 10) + lastDigit; // Update the reversed number
        }
        return reverse; 
    }
}
```
### Q.3 Check Palindrome

```java
/*
 * Approach : Two Pointers
 * Intution:
 * One pointer at first index another at last, simultaneously compare each letter 
 * 
 * Time Complexity : O(N/2)
 * Space Complexity : O(1)
 */

class CheckPalindrome {
    public boolean isPalindrome(int x) {
        var s = String.valueOf(x);
        var r = s.length() - 1;
        var l = 0;

        while (l < r) {
            if (s.charAt(l++) != s.charAt(r--))
                return false;

        }
        return true;
    }
}
```
```java
/*
 * Approach : Reverse Number
 * 
 * Intution:
 * Reverse the number and compare
 * 
 * Time Complexity : O(N)
 * Space Complexity : O(N)
 * 
 */

 class CheckPalindrome2 {
    public boolean isPalindrome(int x) {
        // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        
        int reverse = 0;
        int temp = x;

        // Reverse the number
        while (temp > 0) {
            int digit = temp % 10;
            reverse = reverse * 10 + digit;
            temp /= 10;
        }

        // Check if the original number and reversed number are the same
        return reverse == x;
    }
}
```
### Q.4 LCM and GCD

```java
/*
 * Approach : Bruteforce
 * Intution:
 * Using formula : lcm(a,b) = |a * b | / GCD (a , b)
 * 
 * For calculating GCD : find the number from 0 to Min(a,b) which divides both a and b.
 * 
 * Time Complexity : O(Min(a,b))
 * Space Complexity : O(1)
 */

class LCMnGCD {
    public static int[] lcmAndGcd(int a, int b) {
    int GCD = gcd(a,b);
    int LCM = lcm(a, b, GCD);
    return new int[]{LCM, GCD};
    
} 
public static int lcm(int a, int b, int GCD){
    return (Math.abs(a*b) / GCD);
    
}
public static int gcd(int a, int b){
    int min = Math.min(a,b);
    for(int i = min; i>0;i--){
        if(a % i == 0 && b % i ==0){
            return i;
        }
    }
    return 1;
}
}

```

### Q.5 [Armstrong Number](https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1)
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
public class ArmstrongNumber {

    public static boolean isArmstrong(int num) {
        // Calculate the number of
        // digits in the given number
        int k = String.valueOf(num).length();
        // Initialize the sum of digits
        // raised to the power of k to 0
        int sum = 0;
        // Copy the value of the input
        // number to a temporary variable n
        int n = num;
        // Iterate through each
        // digit of the number
        while(n > 0){
            // Extract the last
            // digit of the number
            int ld = n % 10;
            // Add the digit raised to
            // the power of k to the sum
            sum += Math.pow(ld, k); 
            // Remove the last digit
            // from the number
            n = n / 10;
        }
        // Check if the sum of digits raised to
        // the power of k equals the original number
        return sum == num ? true : false;
    }
}
                            
                        
```
### Q.6 Print All Divisor

#### Approach : Bruteforce

A brute force approach would be to iterate from 1 to n checking each value if it divides n without leaving a remainder. For each divisor found, store it in an array and a count of divisors is maintained. After iterating through all possible values, the size of the array is updated with the count of divisors and the array is returned.

```java
                                
public class Main {
    public static int[] printDivisors(int n, int[] size) {
        // Allocate memory for
        // the array of divisors
        int[] divisors = new int[n];
        // Initialize the count of divisors
        int count = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                // Add the divisor to the array
                divisors[count++] = i;
            }
        }
        // Update the size parameter
        // with the count of divisors
        size[0] = count;
        // Return the array of divisors
        return divisors;
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

### Q.7 Check for prime

#### Approach Brute force:

We can iterate through numbers from 1 to n, counting how many of these numbers divide n without a remainder. If exactly two numbers do, so n is prime otherwise it is not prime.

```java
                                
public class Main {
    static boolean checkPrime(int n) {
        // count the number of factors.
        int cnt = 0;
        for (int i = 1; i <= n; i++) {
            // If n is divisible by i
            // without any remainder.
            if (n % i == 0) {
                cnt = cnt + 1;
            }
        }

        // If the number of
        // factors is exactly 2
        if (cnt == 2) {
            return true;
        }
        // If the number of
        // factors is not 2.
        else {
            // that the number is not prime.
            return false;
        }
    }
}                      
```

#### Optimal:

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