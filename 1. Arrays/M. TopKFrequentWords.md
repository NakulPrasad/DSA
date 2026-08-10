# Top K Frequent Words

> **Difficulty:** Medium  
> **Topic / Pattern:** Arrays  
> **Link:** [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/description/)

---

## 📝 Problem Statement

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the freency from highest to lowest. Sort the words with the same freency by their lexicographical order.

### Examples
```text
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```

---

## 💡 Intuition & Core Approach

HASHMAP + MIN HEAP

- Create a map, with the value and occurrences as key, value pair
- Somehow sort according to the descending order of their occurrences and also include these cases, if you wish to
- Case1. if two elements have same occurrences print the elements lexicographically(if strings) or ascending order of the numbers(if integers)
- ase 2: if the occurrences are distinct, print in descending order of the occurrences of the elements.
- Return the first K elements.

```
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

---

## 💻 Implementation (Java)

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

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
