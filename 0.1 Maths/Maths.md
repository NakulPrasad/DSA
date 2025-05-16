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

### Q.5 Armstrong Number

### Q.6 Print All Divisor

### Q.7 Check for prime