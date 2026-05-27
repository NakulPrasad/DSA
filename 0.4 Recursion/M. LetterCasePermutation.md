# [Letter Case Permutation](https://www.geeksforgeeks.org/dsa/permute-string-changing-case/)

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. Return the output in any order.

```
 Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
```

# Approach : Recusion

Time : O(2^N)
Space : O(N)

```ts
function letterCasePermutation(s: string): string[] {
  const ans = new Set<string>();
  helper(s, "", ans);
  return Array.from(ans);
}

function helper(input: string, output: string, ans: Set<String>) {
  if (input.length === 0) {
    ans.add(output);
    return;
  }
  helper(input.slice(1), output + input[0].toUpperCase(), ans);
  helper(input.slice(1), output + input[0].toLowerCase(), ans);
}

```
