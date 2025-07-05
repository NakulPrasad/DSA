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