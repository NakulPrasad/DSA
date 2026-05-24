# [Distinct Subset](https://www.geeksforgeeks.org/problems/subset-sum-ii/1)

You are given an array arr[] of positive integers (which may contain duplicates), your task is to find all the unique or distinct subsets of the array.

Note: You can return the subsets in any order, the driver code will print them in sorted order.

```java
Intuition

To generate all subsets, for every element we have only two choices:

Include the current element in the subset
Exclude the current element from the subset

We use recursion to explore both possibilities for each element.

At every recursive call:

out1 represents the subset where the current element is included.
out2 represents the subset where the current element is excluded.

We continue this process until no elements are left in the input array.
At that point, the generated subset is added to the answer list.

Since the array may contain duplicate elements, duplicate subsets can also be formed.
To avoid this:

We first sort the array so duplicates appear together.
We use a HashSet to store already generated subsets and prevent duplicates from being added again.

The recursion tree explores every possible combination, which gives all unique subsets.

```

```java
class Solution {
    public ArrayList<ArrayList<Integer>> findSubsets(int[] nums) {
        // code here
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        ArrayList<Integer> output = new ArrayList<>();
        Set<ArrayList<Integer>> set = new HashSet<>();
        Arrays.sort(nums);
        helper(nums, output, ans,set);
        return ans;
    }

    private void helper(int[] input, ArrayList<Integer> output, ArrayList<ArrayList<Integer>> ans, Set<ArrayList<Integer>> set) {
        if (input.length == 0) {
            if(!set.contains(output)){
                set.add(output);
                ans.add(output);
                
            }
            return;
        }

        ArrayList<Integer> out1 = new ArrayList<>(output);
        ArrayList<Integer> out2 = new ArrayList<>(output);

        out1.add(input[0]);
        int newInput[] = Arrays.copyOfRange(input, 1, input.length);

        helper(newInput, out1, ans, set);
        helper(newInput, out2, ans, set);

    }
        
    
}

```