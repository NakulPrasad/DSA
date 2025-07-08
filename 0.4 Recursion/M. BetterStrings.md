# [Better String](https://www.geeksforgeeks.org/problems/better-string/1)

 Given a pair of strings of equal lengths, Geek wants to find the better string. The better string is the string having more number of distinct subsequences. If both the strings have equal count of distinct subsequence then return str1.

``` 
 Input:
 str1 = "gfg", str2 = "ggg"
 Output: "gfg"
 Explanation: "gfg" have 6 distinct subsequences whereas "ggg" have 3 distinct
 subsequences.
```
## Approach : Hashset
```java
/**
 * Time : O(2^N) : Gives TLE, TRY DP
 * Space : O(2N)
 */
class Solution {
    public String betterString(String str1, String str2) {
        Set<String> set1 = new HashSet<>();
        Set<String> set2 = new HashSet<>();
        solve(str1, "", set1);
        solve(str2, "", set2);
        if (set1.size() < set2.size()) {
            return str2;
        }
        return str1;

    }

    public void solve(String input, String output, Set<String> set) {
        if (input.length() == 0) {
            set.add(output);
            return;
        }
        String out1 = output;
        String out2 = output + input.charAt(0);

        solve(input.substring(1), out1, set);
        solve(input.substring(1), out2, set);
    }
}
```
