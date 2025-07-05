# [Sort Characters by frequency](https://leetcode.com/problems/sort-characters-by-frequency/description/)

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

```
Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```
### Approach : Bucket Sort

```java
/**
 * Intituiton : 
 * Time : N
 * Space : N
*/
public class Solution {
    public String frequencySort(String s) {
        int n = s.length();
        Map<Character, Integer> freqMap = new HashMap<>();

        // Count frequency of each character
        for (char ch : s.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        // Bucket where index = frequency, each bucket holds characters
        List<List<Character>> buckets = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; i++) {
            buckets.add(new ArrayList<>());
        }

        // Place characters into buckets based on frequency
        for (Map.Entry<Character, Integer> entry : freqMap.entrySet()) {
            char ch = entry.getKey();
            int freq = entry.getValue();
            buckets.get(freq).add(ch);
        }

        // Build result from highest frequency to lowest
        StringBuilder result = new StringBuilder();
        for (int i = n; i >= 0; i--) {
            for (char ch : buckets.get(i)) {
                for (int j = 0; j < i; j++) {
                    result.append(ch);
                }
            }
        }

        return result.toString();
    }
}
```
