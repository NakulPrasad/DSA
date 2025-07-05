# Check Palindrome

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