# [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

```java
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]
```
### Approach : HashMap

```java
/**
 * Intitution: For group each member should contains same character of same occurence. We can sort each element and push in hashmap to group it. 
 * Time : O(N*KLogK) //  where k is average length of each string.
 * s.toCharArray() → O(k) 
 * Arrays.sort(temp) → O(k log k) 
 * String.valueOf(temp) → O(k)
 * HashMap operations (get, put, containsKey) → O(1) average case,
 * 
 * Space : O(n * k) // hashmap stores n entries with k elements.
*/
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> hm = new HashMap<>();
        for(String s: strs){
            char[] temp = s.toCharArray();
            Arrays.sort(temp);
            String str = String.valueOf(temp);

            //check if map contains element
            if(hm.containsKey(str)){
                List<String> existing = hm.get(str);
                existing.add(s);
            }
            //if map doesn't contains the element
            else{
                List<String> list = new ArrayList<>();
                list.add(s);
                //push to map
                hm.put(str, list);

            }

        }

        //add values to the final lsit
        List<List<String>> ans = new ArrayList<>();

        for(List<String> list: hm.values()){
            ans.add(list);
        }
        return ans;
    }
}
```