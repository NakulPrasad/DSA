# [Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1
```

```java
/**
 * Approach : Two Pointer
 * Intitution : Water between two heights is minimum of both * distance between (area), also maximum water can be stored at endpoints, hence reducing from last height;
 * Also need to track maximum area after each pairs.
 * Time : O(N)
 * Space : O(1)
*/
class Solution {
    public int maxArea(int[] height) {
        // 1. Start from end pairs.
        int n = height.length-1;
        int max = Integer.MIN_VALUE;
        int l = 0, r=n;
        while(r>l){
            // 2. calculate area for each pairs and update max area.
            int current = Math.min(height[l], height[r]) * (r-l);             // Area between two points
            max = Math.max(current, max);
            // 3. Discard height if left side is smaller than right : [6,8,1] -> area(6,1) = 1*2L / area(6,8) = 6L // area(8,1) -> 8L 
            if(height[r] > height[l]){
                l++;
            }
            else {
            // reduce to calculate new area.
                r--;
            }
        }
        return max;
    }

}
```