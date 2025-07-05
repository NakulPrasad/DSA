# [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

```java
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```
### 🔍 Algorithm

1. Initialize a prefix sum array `prefix` of the same size as the input array `nums`.
2. Set `prefix[0] = nums[0]`.
3. For each index `i` from `1` to `n - 1`, calculate:  
   `prefix[i] = prefix[i - 1] + nums[i]`
4. To get the sum of elements from index `left` to `right`:  
   - If `left == 0`: return `prefix[right]`  
   - Else: return `prefix[right] - prefix[left - 1]`  
     (Subtracting prefix before `left` removes the extra sum.)


```java
class NumArray {
    int prefix[];
    public NumArray(int[] nums) {
        int n = nums.length;
        prefix = new int[n];
        //make prefix arr
        prefix[0] = nums[0];
        for(int i=1; i<n;i++){
            prefix[i] = prefix[i-1] + nums[i];
        }
        System.out.println(Arrays.toString(prefix));
    }
    
    public int sumRange(int left, int right) {
        if(left == 0){
          return prefix[right];
        }
        return prefix[right] - prefix[left-1];
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
```