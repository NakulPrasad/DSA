# [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/description/)

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
```
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 ```
```
Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
```

```java
/**
 * Time : N
 * Space : 1
 */
class Solution {
    public int characterReplacement(String s, int k) {
        int l=0,r=0, maxLength = 0, maxFreq = 0;
        int n = s.length()-1;
        var hm = new HashMap<Character, Integer> ();
        while(r<=n){
            char ch = s.charAt(r);
            hm.put(ch, hm.getOrDefault(ch, 0)+1);
            maxFreq = Math.max(maxFreq, hm.get(ch));
            int count = (r-l+1) - maxFreq;
            if(count > k){
                char left = s.charAt(l);
                hm.put(left, hm.get(left)-1);
                l++;
            }
            maxLength = Math.max(r-l+1, maxLength);
            r++;

        }
        return maxLength;
    }
} 
```