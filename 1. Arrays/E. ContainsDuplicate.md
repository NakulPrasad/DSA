# [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## Approach : SET

- Set doesn't contains duplicates
```java
/** 
 * Time : O(1)
 * Space : O(N)
 * 
*/
function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums);
    return nums.length != set.size
};
```
## Approach : Sorting
- Sort the array, then find the repeating element
```java
/**
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