### Q.6 [Find the Rotation Count in Rotated Sorted array](https://www.geeksforgeeks.org/problems/rotation4723/1)
Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
After 1st Rotation : [9, 2, 4, 6]
After 2nd Rotation : [6, 9, 2, 4]

```java
Input: arr = [5, 1, 2, 3, 4]
Output: 1
Explanation: The given array is 5 1 2 3 4. The original sorted array is 1 2 3 4 5. We can see that the array was rotated 1 times to the right.
Input: arr = [1, 2, 3, 4, 5]
Output: 0
Explanation: The given array is not rotated.
```
![image](NormalBS/Learning/BS_6.jpg)


```java
class Solution {
    public int findKRotation(List<Integer> arr) {
        int n = arr.size();
        int min = Integer.MAX_VALUE;
        int idx = -1;
        while(n-- > 0){
            if(arr.get(n) < min){
                min = arr.get(n);
                idx = n;
            }
        }
        return idx;
    }
}
```