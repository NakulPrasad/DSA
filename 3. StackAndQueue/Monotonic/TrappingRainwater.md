# [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Example 1:

![1](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

```

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

```
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
```
## Approach : Stack
- For each index, water store = Minimum of (Max of both - height at i size)
- Store maximum from both left and right for each index
- Take minimum of both maximum that will be height
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
