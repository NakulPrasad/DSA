# [Sort and Array](https://leetcode.com/problems/sort-an-array/description/)

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.
```

```
Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
```

## Approach : Insertion Sort - TLE

```java
/**
 * Time : N2
 * Space : 1
 */
class Solution {
    public int[] sortArray(int[] nums) {
        sort(nums, 0);
        return nums;
    }
    public void sort(int[] nums, int index){
        //base case:
        if(index == nums.length){
            return;
        }
        int j = index;
        while(j>0 && nums[j] < nums[j-1]){
                swap(nums, j,j-1);
                j--;
        }
        sort(nums, index+1);

    }
    public void swap(int[] nums, int i, int j){
        var temp  = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}

```
## Approach : Recursive Inserrtion sort
Aditya verma
```java
class Solution {

    public int[] sortArray(int[] nums) {

        // Time: O(N^2)
        // Space: O(N)

        // Convert int[] -> ArrayList<Integer>
        ArrayList<Integer> list = Arrays.stream(nums)
                                .boxed()
                                .collect(Collectors.toCollection(ArrayList::new));

        // Sort recursively
        sort(list);

        // Convert ArrayList<Integer> -> int[]
        return list.stream()
                   .mapToInt(Integer::intValue)
                   .toArray();
    }

    void sort(ArrayList<Integer> list) {

        // Base case
        if(list.size() == 0) {
            return;
        }

        // Remove last element
        int lastIndex = list.size() - 1;
        int temp = list.get(lastIndex);
        list.remove(lastIndex);

        // Sort remaining list
        sort(list);

        // Insert element at correct position
        insert(list, temp);
    }

    void insert(ArrayList<Integer> list, int temp) {

        // Correct position found
        if(list.isEmpty() || list.get(list.size() - 1) < temp) {
            list.add(temp);
            return;
        }

        // Remove larger element
        int val = list.get(list.size() - 1);
        list.remove(list.size() - 1);

        // Insert temp recursively
        insert(list, temp);

        // Add removed element back
        list.add(val);
    }
}
```