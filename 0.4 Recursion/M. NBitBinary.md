# [N-bit binary numbers](https://www.geeksforgeeks.org/problems/print-n-bit-binary-numbers-having-more-1s-than-0s0252/1)

Given a positive integer n. Your task is to generate a string list of all n-bit binary numbers where, for any prefix of the number, there are more or an equal number of 1's than 0's. The numbers should be sorted in decreasing order of magnitude.
```
Example 1:

Input:  
n = 2
Output:
{"11", "10"}
Explanation: Valid numbers are those where each prefix has more 1s than 0s:
11: all its prefixes (1 and 11) have more 1s than 0s.
10: all its prefixes (1 and 10) have more 1s than 0s.
So, the output is "11, 10".
Example 2:

Input:  
n = 3
Output:
{"111", "110", "101"}
Explanation: Valid numbers are those where each prefix has more 1s than 0s.
111: all its prefixes (1, 11, and 111) have more 1s than 0s.
110: all its prefixes (1, 11, and 110) have more 1s than 0s.
101: all its prefixes (1, 10, and 101) have more 1s than 0s.
So, the output is "111, 110, 101".
User Task:
Your task is to complete the function NBitBinary() which takes a single integer n as input and returns the list of strings in decreasing order. You need not take any input or print anything.

Expected Time Complexity: O(|2n|)
Expected Auxiliary Space: O(2n)
```
```
Constraints:
1 <= n <= 15
```
## Approach : Recursion

- Observation:
- Zero is added only if ones are one more than count of zero.

- Common Error:
- On recursion pass n-1 than n--;

```java
class Solution {
/**
 * Time : (2^N)
 * Space : O(N)
 */
    ArrayList<String> NBitBinary(int n) {
        ArrayList<String> ans = new ArrayList<>();
        solve("", 0, 0, ans, n);
        return ans;
    }

    void solve(String output, int zero, int one, ArrayList<String> ans, int n) {
        if (n == 0) {
            ans.add(output);
            return;
        }

        // Always add '1'
        solve(output + "1", zero, one + 1, ans, n - 1);

        // Add '0' only if ones are greater than zeros
        if (one > zero) {
            solve(output + "0", zero + 1, one, ans, n - 1);
        }
    }
}

```
