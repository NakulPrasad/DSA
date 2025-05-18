/*
 * Given a string s, you need to print all possible strings that can be made by placing spaces (zero or one) in between them. The output should be printed in sorted increasing order of strings.
 * 
 * Input: s = "ABC"
 * Output: (A B C)(A BC)(AB C)(ABC)
 * Explanation:
 * ABC, AB C, A BC, A B C
 * These are the possible combination of "ABC".
 * 
 * Time : O(2^N)
 * Space : O(N)
 */

import java.io.*;
import java.util.*;

class Solution {

    ArrayList<String> permutation(String s) {
        // Code Here
        ArrayList<String> ans = new ArrayList<>();
        String output = s.charAt(0) + "";
        solve(s.substring(1), output, ans);
        Collections.sort(ans);
        return ans;
    }

    void solve(String input, String output, ArrayList<String> ans) {
        if (input.length() == 0) {
            ans.add(output);
            return;
        }
        String out1 = output + input.charAt(0);
        String out2 = output + " " + input.charAt(0);

        solve(input.substring(1), out1, ans);
        solve(input.substring(1), out2, ans);
    }
}
