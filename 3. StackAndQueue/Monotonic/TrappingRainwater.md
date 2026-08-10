# Trapping Rain Water

> **Difficulty:** Easy  
> **Topic / Pattern:** StackAndQueue  
> **Link:** [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

---

## 📝 Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Examples
```text
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
```

---

## 💡 Intuition & Core Approach

Stack
- For each index, water store = Minimum of (Max of both - height at i size)
- Store maximum from both left and right for each index
- Take minimum of both maximum that will be height
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
        System.out.println(Arrays.toString(maxL));
        max = height[n-1];
        for(int i = n-1;i>=0;i--){
            maxR[i] = Math.max(height[i], max);
            max = maxR[i];
        }
        var water = new int[n];
        for(int i =0;i<n;i++){
            water[i] = Math.min(maxL[i], maxR[i]) - height[i];
        }
        System.out.println(Arrays.toString(maxR));
        int sum = 0;
        for(int i:water){
            sum+=i;
        }
        return sum;


    }
}
```

---

## 🎨 Visualization / Dry Run

![visualization](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

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
        System.out.println(Arrays.toString(maxL));
        max = height[n-1];
        for(int i = n-1;i>=0;i--){
            maxR[i] = Math.max(height[i], max);
            max = maxR[i];
        }
        var water = new int[n];
        for(int i =0;i<n;i++){
            water[i] = Math.min(maxL[i], maxR[i]) - height[i];
        }
        System.out.println(Arrays.toString(maxR));
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
