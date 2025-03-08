package Maths;

//https://leetcode.com/problems/reverse-integer/description/

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
