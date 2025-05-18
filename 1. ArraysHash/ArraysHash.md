# Arrays and Hash

## Q.1 Contains Duplicate

### Approach : SET
```java
/**
 * Difficulty : Easy
 * Approach : Set doesn't contains duplicates
 * Time : O(1)
 * Space : O(N)
 * 
*/
function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums);
    return nums.length != set.size
};
```
### Approach : Sorting
Sort the array, then find the repeating element
```java
/**
 * Difficulty : Easy
 * Time : O(Nlogn) + O(N) 
 * Space : O(1)
*/
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        if(nums.length ==1) return false; //edge case

        for(int i=0;i<nums.length-1;i++){
            if(nums[i] == nums[i+1])
            return true;
                 
        }
        return false;
    }
}
```
## Q.2 Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

```java
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```
### Approach : Frequency Array / Hashing
```java
/**
 * Difficulty : Easy
 * Intitution : We know alphabets are of 26 characters only, one string increases count, while other decreases.
 * Time : O(1)
 * Space : O(N)
 * 
*/
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        
        // Count the frequency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the frequency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero frequency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```
## Q.3 [Two Sum](https://leetcode.com/problems/two-sum/description/)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
```java
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Approach : HashMap
```java
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hm = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let remain = target - num;
        if(remain in hm) {
            return [hm[remain], i];
        }
        hm[num] = i;
    }
    return [];
};
```

## Q.4 [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

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
 * Time : O(N*KLogK) // s.toCharArray() → O(k) / Arrays.sort(temp) → O(k log k) / String.valueOf(temp) → O(k) /HashMap operations (get, put, containsKey) → O(1) average case, where k is average length of each string.
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


## Q.5 [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

```java
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]
```

Edge Cases : 
- Input : [1,1,2,3] and k = 2 , so 1 has occurred 2 times , 2 has occurred 1 time and 3 has occurred 1 time. So the answer would be [1,2].

- Input : [1,1,2,2,3] and K = 2, so 1 has occurred 2 times , 2 has occurred 2 times and 3 has occurred 1 time. So the answer is [1,2] and if the order of printing is important then first 1 and then 2 should be printed. (bcoz 1<2).

Approach : 

- Create a map, with the value and occurrences as key, value pair
- Somehow sort according to the descending order of their occurrences and also include these cases, if you wish to
- Case1. if two elements have same occurrences print the elements lexicographically(if strings) or ascending order of the numbers(if integers)
- ase 2: if the occurrences are distinct, print in descending order of the occurrences of the elements.
- Return the first K elements.

## Q.5.1 [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/description/)

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
```java
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```
```java
import java.util.*;

class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> frequencyMap = new HashMap<>();
        
        // Count the frequency of each word
        for (String word : words) {
            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
        }
        
        // Create a PriorityQueue to store entries based on frequency and lexicographical order
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(
            (a, b) -> {
                if (a.getValue().equals(b.getValue())) {
                    return a.getKey().compareTo(b.getKey());
                } else {
                    return b.getValue().compareTo(a.getValue());
                }
            }
        );
        
        // Add all entries from the frequencyMap to the PriorityQueue
        pq.addAll(frequencyMap.entrySet());
        
        // Retrieve top k frequent words from the PriorityQueue
        List<String> topKFrequentWords = new ArrayList<>();
        while (k > 0 && !pq.isEmpty()) {
            topKFrequentWords.add(pq.poll().getKey());
            k--;
        }
        
        return topKFrequentWords;
    }
}
```

## Q.6 [String Encode and Decode](https://neetcode.io/problems/string-encode-and-decode)

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

```java
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
```

## Q.7 [Product of array except self](https://leetcode.com/problems/product-of-array-except-self/description/)

## Q.9 [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

```java
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
```java
function longestConsecutive(nums: number[]): number {
    let n=nums.length,max=0
    let set = new Set(nums)
    for(let i of nums){
        let count = 1
        let num:number = i
        if(!set.has(num-1))
        while(set.has(num + 1)){
            num +=1
            count++
        }
        max = Math.max(max,count)
    }
    return max
};
```