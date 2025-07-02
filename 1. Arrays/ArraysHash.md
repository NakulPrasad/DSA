# Arrays and Hash

## 1 Contains Duplicate

### Approach : SET
```java
/**
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
## 2 Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

```java
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```
### Approach : Freqency Array / Hashing
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
        
        // Count the freency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the freency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero freency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```
## 3 [Two Sum](https://leetcode.com/problems/two-sum/description/)
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



## 5 [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

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

### Approach : HASHMAP + MIN HEAP

- Create a map, with the value and occurrences as key, value pair
- Somehow sort according to the descending order of their occurrences and also include these cases, if you wish to
- Case1. if two elements have same occurrences print the elements lexicographically(if strings) or ascending order of the numbers(if integers)
- ase 2: if the occurrences are distinct, print in descending order of the occurrences of the elements.
- Return the first K elements.

```java
class Solution {
    /**
        * Approach : save the frequency count of each element in hashmap; use min heap with number like (frequency, key);
        * suppose {1 : 8, 5: 1, 2:1} then in heap (12, 15, 81)
        * Time : O(N) - creating map *  O(log N) - insert in heap
        * Space : O(N) - hashmap + O(k) priority queue

     */
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> hm = new HashMap<>();
        for(int i: nums){
            hm.put(i, hm.getOrDefault(i, 0)+1);
        }
        //min priority queue as removing can be done on top of heap;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a,b) -> a[0] - b[0]);
            int [] ans = new int[k];

        for(Map.Entry<Integer, Integer> entry : hm.entrySet()){
            int key = entry.getKey();
            int value = entry.getValue();
            heap.offer(new int[]{value, key});

            //remove from heap if exceed k
            if(heap.size() > k){
                heap.poll();
            }
        }
        
        //put elements from heap
        for(int i=0; i< k;i++){
            ans[i] = heap.poll()[1];
        }
        return ans;
    }
}
```
## 5.1 [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/description/)

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the freency from highest to lowest. Sort the words with the same freency by their lexicographical order.
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
### Approach : HASHMAP + MIN HEAP

- Create a map, with the value and occurrences as key, value pair
- Somehow sort according to the descending order of their occurrences and also include these cases, if you wish to
- Case1. if two elements have same occurrences print the elements lexicographically(if strings) or ascending order of the numbers(if integers)
- ase 2: if the occurrences are distinct, print in descending order of the occurrences of the elements.
- Return the first K elements.

```java
import java.util.*;

class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> freencyMap = new HashMap<>();
        
        // Count the freency of each word
        for (String word : words) {
            freencyMap.put(word, freencyMap.getOrDefault(word, 0) + 1);
        }
        
        // Create a Priorityeue to store entries based on freency and lexicographical order
        Priorityeue<Map.Entry<String, Integer>> p= new Priorityeue<>(
            (a, b) -> {
                if (a.getValue().eals(b.getValue())) {
                    return a.getKey().compareTo(b.getKey());
                } else {
                    return b.getValue().compareTo(a.getValue());
                }
            }
        );
        
        // Add all entries from the freencyMap to the Priorityeue
        paddAll(freencyMap.entrySet());
        
        // Retrieve top k frequent words from the Priorityeue
        List<String> topKFrequentWords = new ArrayList<>();
        while (k > 0 && !pisEmpty()) {
            topKFrequentWords.add(ppoll().getKey());
            k--;
        }
        
        return topKFrequentWords;
    }
}
```

## 6 [String Encode and Decode](https://neetcode.io/problems/string-encode-and-decode)

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

```java
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
```

## 7 [Product of array except self](https://leetcode.com/problems/product-of-array-except-self/description/)

Given an integer array nums, return an array answer such that answer[i] is eal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```java
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
### Approach : Prefix Sum

```java
/**
 * Intitution : 
 * Time : O(3N)
 * Space : O(2N)
 * 
*/

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int [] prefixLeft = new int[n];
        int [] prefixRight = new int[n];
        int [] ans = new int[n];
        Arrays.fill(prefixLeft, 1);
        Arrays.fill(prefixRight, 1);
        for(int i=1; i<n;i++){
            prefixLeft[i] = prefixLeft[i-1] * nums[i-1];
        }
        for(int i=n-2; i>=0;i--){
            prefixRight[i] = prefixRight[i+1] * nums[i+1];
        }
        // System.out.println(Arrays.toString(prefixLeft));
        // System.out.println(Arrays.toString(prefixRight));
        

        for(int i=0;i<n;i++){
            ans[i] = prefixLeft[i] * prefixRight[i];
        }
        return ans;

    }
}
```

## 9 [Longest Consecutive Seqence](https://leetcode.com/problems/longest-consecutive-seqence/description/)

Given an unsorted array of integers nums, return the length of the longest consecutive elements seqence.

You must write an algorithm that runs in O(n) time.

```java
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements seqence is [1, 2, 3, 4]. Therefore its length is 4.
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