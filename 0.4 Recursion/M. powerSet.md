# [Power Set](https://www.geeksforgeeks.org/problems/power-set4302/1)

Given a string s of length n, find all the possible non-empty subsequences of the string s in lexicographically-sorted order.

```
Input :
s = "abc"
Output:
a ab abc ac b bc c
Explanation :
There are a total 7 number of subsequences possible for the given string, and they are mentioned above in lexicographically sorted order.
Example 2:

Input:
s = "aa"
Output:
a a aa
Explanation :
There are a total 3 number of subsequences possible for the given string, and they are mentioned above in lexicographically sorted order.
Your Task:
You don't need to read input or print anything. Your task is to complete the function AllPossibleStrings() which takes a string s as the input parameter and returns a list of all possible subsequences (non-empty) that can be formed from s in lexicographically sorted order.

Expected Time Complexity: O( n*2n  )
Expected Space Complexity: O( n * 2n )
```

```
Constraints:
1 <= n <= 16
s constitutes of lower case english alphabets
```

```java
/**
 *
 * Time : O(2^N)
 * Space : O(N)
 */
class Solution {
    public List<String> AllPossibleStrings(String s) {
        // Code here
        List<String> list = new ArrayList<>();
        String output = "";
        helper(list, output, s);
         Collections.sort(list);
        return list;
    }
    public void helper (List<String> list, String output, String input){
      //base case:
      if(input.length() == 0 ){
          list.add(output);
          return;
      }
      //each step we add first character to output2; then update input by deleteing first character;
      String out1 = output, out2 = output;
      out1 += input.charAt(0);
      input = input.substring(1);
          //above should repeat for each generated input;
      helper(list, out1, input);
      helper(list, out2, input);
    }
}
```
