package Maths;

public class CheckPalindrome {
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
