# [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
```
Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## Approach : BruteForce

```java
/**
 * Difficulty : Easy
 * Intitution : 
 * Time : O(N2)
 * Space : O(1)
 */
class Solution {
    
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int n = nums.length-1;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<=n;j++){
                if(nums[i] == nums[j] && Math.abs(i-j)<= k){
                    return true;
                }
            }
        }
        return false;
    }
}
```
## Approach : Sliding Window
-  We can mantain a window of size abs(i-j); add elements to a set to check for duplicates.
```java
/**
 * Diffuiculty : Easy
 * Time : O(N)
 * Space : O(k) 
 */
class Solution {
    
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int l=0, r=0,n=nums.length-1;
        Set<Integer> set = new HashSet<>();
        while(r<=n){
            int ws = Math.abs(r-l);
        
            if(ws <=k){
                if(set.contains(nums[r])){
                return true;
                };
                set.add(nums[r]);
                r++;
                
            }
            else if(ws >k){
                set.remove(nums[l]);
                l++;
            }
        }
        return false;
    }
}
```