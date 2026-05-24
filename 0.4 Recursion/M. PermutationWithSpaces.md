# [Permutation With Spaces](https://www.geeksforgeeks.org/problems/permutation-with-spaces3627/1)

Given a string s, you need to print all possible strings that can be made by placing spaces (zero or one) in between them. The output should be printed in sorted increasing order of strings.

```
Example 1:

Input:
s = "ABC"
Output: (A B C)(A BC)(AB C)(ABC)
Explanation:
ABC
AB C
A BC
A B C
These are the possible combination of "ABC".
Example 2:

Input:
s = "BBR"
Output: (B B R)(B BR)(BB R)(BBR)

Your Task:
You don't need to read input or print anything. Your task is to complete the function permutation() which takes the string s as input parameters and returns the sorted array of the string denoting the different permutations (DON'T ADD '(' and ')' it will be handled by the driver code only).

Expected Time Complexity: O(2s)
Expected Auxiliary Space: O(1)
```

```
CONSTRAINTS:
1 <= |s| < 10
s only contains lowercase and Uppercase English letters.
```
## Approach : Recursion
Intitution : 

To generate all subsets, for every element we have only two choices:

1. **Include** the current element in the subset
2. **Exclude** the current element from the subset

We use recursion to explore both possibilities for each element.

At every recursive call:

* `out1` represents the subset where the current element is included.
* `out2` represents the subset where the current element is excluded.

We continue this process until no elements are left in the input array.
At that point, the generated subset is added to the answer list.

Since the array may contain duplicate elements, duplicate subsets can also be formed.
To avoid this:

* We first sort the array so duplicates appear together.
* We use a `HashSet` to store already generated subsets and prevent duplicates from being added again.

The recursion tree explores every possible combination, which gives all unique subsets.

```java
/**
 * Time : O(2^N)
 * Space : O(N)
 */
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
```
