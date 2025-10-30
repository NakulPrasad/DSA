# [Permutation of strings](https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1))

Given a string S, the task is to write a program to print all permutations of
a given string.

    Input: S = “ABC”
    Output: “ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”

    Input: s = "AAA"
    Output: ["AAA"]
    Explanation: No other unique permutations can be formed as all the characters are same.

**Constraints:**  
1 &lt;= s.size() &lt;= 9  
s contains only Uppercase english alphabets

## Approach : Recursion

- In normal recursion, we were generating new string in each recursion call,
- this will increase the memory usage.
- In backtracking, we got to know we can swap the character of string, this
- will reduce the memory usage.

```java
class PermutationOfString {
   public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       String input = sc.nextLine();
       var ans = permutationOfString(input);
       System.out.println(Arrays.toString(ans.toArray()));
       sc.close();

   }

   public static List<String> permutationOfString(String s) {
       var ans = new ArrayList<String>();
       var start = 0;
       var sb = new StringBuilder(s);

       solve(sb, start, ans);
       return ans;
   }

   public static void solve(StringBuilder sb, int start, List<String> ans) {
       int len = sb.length() - 1;
       // base case
       if (start == len) {
           ans.add(sb.toString());
           return;
       }
       // taking all combinations
       var map = new HashSet<Character>();
       for (int i = start; i <= len; i++) {
           if (!map.contains(sb.charAt(i))) {
               swap(start, i, sb);
               // System.out.println(sb);
               solve(sb, start + 1, ans);
               swap(i, start, sb); // this is backtracking step;
           }
           map.add(sb.charAt(i));

       }

   }

   public static void swap(int start, int end, StringBuilder sb) {
       char temp = sb.charAt(start);
       sb.setCharAt(start, sb.charAt(end));
       sb.setCharAt(end, temp);
   }
}

/*
* Recussion tree:
* ABC
* / | \
* ABC BAC CBA
* / \ / \ / \
* ABC ACB BAC BCA CBA CAB
*
*/
```

## Approach : Backtracking

```java
class Solution {
    public ArrayList<String> findPermutation(String s) {
        StringBuilder sb = new StringBuilder(s);
        ArrayList<String> ans = new ArrayList<>();
        helper(sb, 0, ans);
        return ans;
    }

    void helper(StringBuilder sb, int start, ArrayList<String> ans,) {
        if (start == sb.length() - 1) {
            ans.add(sb.toString());
            return;
        }

        Set<Character> used = new HashSet<>();  // To avoid duplicate chars at current recursion depth
        for (int i = start; i < sb.length(); i++) {
            if (!used.contains(sb.charAt(i))) {
                used.add(sb.charAt(i));
                swap(sb, start, i);
                helper(sb, start + 1, ans);
                swap(sb, start, i);  // backtrack
            }
        }
    }

    void swap(StringBuilder sb, int i, int j) {
        char temp = sb.charAt(i);
        sb.setCharAt(i, sb.charAt(j));
        sb.setCharAt(j, temp);
    }
}

```
