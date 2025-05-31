# [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

### Approach : 

### Pseudocode : 

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