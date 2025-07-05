# Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

```java
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```
### Approach : Freqency Array / Hashing
```java
/**
 * Difficulty : Easy
 * Intitution : We know alphabets are of 26 characters only, one string increases count, while other decreases.
 * Time : O(1)
 * Space : O(N)
 * 
*/
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        
        // Count the freency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the freency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero freency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```