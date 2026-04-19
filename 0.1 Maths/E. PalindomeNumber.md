# [Palindrome Number](https://www.geeksforgeeks.org/problems/palindrome0746/1)

You are given an integer n. Your task is to determine whether it is a palindrome.
A number is considered a palindrome if it reads the same backward as forward, like the string examples "MADAM" or "MOM".

```
Examples:

Input: n = 555
Output: true
Explanation: The number 555 reads the same backward as forward, so it is a palindrome.

```

## Approach : Maths

reverse the number and compare

```java
class Solution {
    public boolean isPalindrome(int n) {
        n = Math.abs(n);

        int original = n;
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n /= 10;
        }

        return original == rev;
    }
}
```

## Approach : String

String doesn't work for -ve nubmbers
make it postive

```java
class Solution {
    public boolean isPalindrome(int n) {
        // code here
        n=Math.abs(n);
        StringBuilder sb = new StringBuilder(String.valueOf(n));
        int l=0,r=sb.length()-1;
        while(l<=r){
            if(sb.charAt(l) != sb.charAt(r))
            return false;

            l++;
            r--;
        }
        return true;
    }
}
```
