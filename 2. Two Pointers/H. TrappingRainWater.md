# Trapping Rain Water

> **Difficulty:** Hard  
> **Topic / Pattern:** Two Pointers  
> **Link:** [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

---

## 📝 Problem Statement

[Insert problem description here]

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

```
class Solution {

    public int trap(int[] height) {
        int n = height.length;
        var maxL = new int[n];
        var maxR = new int[n];
        int max = Integer.MIN_VALUE;
        for(int i =0;i<n;i++){
            maxL[i] = Math.max(height[i], max);
            max = maxL[i];
        }
        // System.out.println(Arrays.toString(maxL));
        max = height[n-1];
        for(int i = n-1;i>=0;i--){
            maxR[i] = Math.max(height[i], max);
            max = maxR[i];
        }
        var water = new int[n];
        for(int i =0;i<n;i++){
            water[i] = Math.min(maxL[i], maxR[i]) - height[i];
        }
        // System.out.println(Arrays.toString(maxR));
        int sum = 0;
        for(int i:water){
            sum+=i;
        }
        return sum;


    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {

    public int trap(int[] height) {
        int n = height.length;
        var maxL = new int[n];
        var maxR = new int[n];
        int max = Integer.MIN_VALUE;
        for(int i =0;i<n;i++){
            maxL[i] = Math.max(height[i], max);
            max = maxL[i];
        }
        // System.out.println(Arrays.toString(maxL));
        max = height[n-1];
        for(int i = n-1;i>=0;i--){
            maxR[i] = Math.max(height[i], max);
            max = maxR[i];
        }
        var water = new int[n];
        for(int i =0;i<n;i++){
            water[i] = Math.min(maxL[i], maxR[i]) - height[i];
        }
        // System.out.println(Arrays.toString(maxR));
        int sum = 0;
        for(int i:water){
            sum+=i;
        }
        return sum;


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
