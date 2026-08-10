# Find Common Characters

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Find Common Characters](https://leetcode.com/problems/find-common-characters/description/)

---

## 📝 Problem Statement

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

### Examples
```text
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
```

---

## 💡 Intuition & Core Approach

Hashing
- we have to maintain common minimum frequency of characters appearing
- once min frequency is found, add characters that many times. 
```
/**
 * 
 * 
 */

class Solution {
    public List<String> commonChars(String[] words) {
        int minfreq[] = new int[26];
        Arrays.fill(minfreq, Integer.MAX_VALUE);
        for(String s: words){
            int freq[] = new int[26];
            for(char ch : s.toCharArray()){
                freq[ch-'a']++;
            }
            for(int i=0;i<26;i++){
                minfreq[i] = Math.min(minfreq[i], freq[i]);
            }
        }

        List<String> ans = new ArrayList<>();
        
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < minfreq[i]; j++) {
                ans.add("" + (char)(i + 'a'));
            }
        }
        return ans;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Time : N*K; where k is average length of words
 * Space : N + N
 */

class Solution {
    public List<String> commonChars(String[] words) {
        int minfreq[] = new int[26];
        Arrays.fill(minfreq, Integer.MAX_VALUE);
        for(String s: words){
            int freq[] = new int[26];
            for(char ch : s.toCharArray()){
                freq[ch-'a']++;
            }
            for(int i=0;i<26;i++){
                minfreq[i] = Math.min(minfreq[i], freq[i]);
            }
        }

        List<String> ans = new ArrayList<>();
        
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < minfreq[i]; j++) {
                ans.add("" + (char)(i + 'a'));
            }
        }
        return ans;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | N | [Provide justification] |
| **Space Complexity** | N + N | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
