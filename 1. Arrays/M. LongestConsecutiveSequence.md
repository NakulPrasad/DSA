# [Longest Consecutive Seqence](https://leetcode.com/problems/longest-consecutive-seqence/description/)

Given an unsorted array of integers nums, return the length of the longest consecutive elements seqence.

You must write an algorithm that runs in O(n) time.

```java
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements seqence is [1, 2, 3, 4]. Therefore its length is 4.
```
```java
function longestConsecutive(nums: number[]): number {
    let n=nums.length,max=0
    let set = new Set(nums)
    for(let i of nums){
        let count = 1
        let num:number = i
        if(!set.has(num-1))
        while(set.has(num + 1)){
            num +=1
            count++
        }
        max = Math.max(max,count)
    }
    return max
};
```