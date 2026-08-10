# Longest commong prefix

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Longest commong prefix](https://leetcode.com/problems/longest-common-prefix/description/)

---

## 📝 Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

    Input: strs = ["flower","flow","flight"]Output: "fl"

**Example 2:**

    Input: strs = ["dog","racecar","car"]Output: ""Explanation: There is no common prefix among the input strings.

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

Bruteforce

```
/**
 * 
 * 
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        //T=o(n2), s=O(n)
        if(strs.length <1) return strs[0];

        for(int i=0;i<strs[0].length();i++){
            char ch=strs[0].charAt(i);

            for(int j=0;j<strs.length;j++){
                try{
                    if(strs[j].charAt(i) != ch){
                    if(i<1) return "";
                    return strs[0].substring(0,i);
                    }
                }
                catch(Exception e){
                    return strs[0].substring(0,i);
                }

            }

        }
        return strs[0];
    }
}
```



```
/**
 * 
 * 
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        //sorts lexographically

        Arrays.sort(strs);
        String idx0 = strs[0];
        String idxL = strs[strs.length-1];
        int idx=0;
        for(int i=0; i<idx0.length();i++){
            if(idx0.charAt(i) !=idxL.charAt(i) ){
                break;
            }
            idx++;
        }

        return idx0.substring(0,idx);
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Time : O(nlogN)
 * Space : O(1)
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        //sorts lexographically

        Arrays.sort(strs);
        String idx0 = strs[0];
        String idxL = strs[strs.length-1];
        int idx=0;
        for(int i=0; i<idx0.length();i++){
            if(idx0.charAt(i) !=idxL.charAt(i) ){
                break;
            }
            idx++;
        }

        return idx0.substring(0,idx);
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N2) | [Provide justification] |
| **Space Complexity** | O(N) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
