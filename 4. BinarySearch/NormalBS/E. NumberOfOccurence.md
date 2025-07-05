# [Number of occurrence](https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1)
Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

```java
Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
Output: 4
Explanation: target = 2 occurs 4 times in the given array so the output is 4.

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
Output: 0
Explanation: target = 4 is not present in the given array so the output is 0.

Input: arr[] = [8, 9, 10, 12, 12, 12], target = 12
Output: 3
Explanation: target = 12 occurs 3 times in the given array so the output is 3
```
```java
class Solution {
    int count(int[] arr, int n, int x) {
        int start = 0, end= n-1, first =-1, last=-1;
        while(start <= end){
            int mid = start + (end-start)/2;
            
            if(arr[mid] == x){
                if(first == -1){
                    first = mid;
                    last = mid;
                    
                }
                else last = mid;
                
                //continue to search left
                int left = mid-1;
                while(left>= start && arr[left] ==x){
                    first=left;
                    left--;
                }
                //continue to search left
                int right = mid+1;
                while(right <= end && arr[right] ==  x){
                    last = right;
                    right++;
                }
                break;
            }
            else if(arr[mid] > x){
                end = mid -1;
            }
            else 
                start = mid+1;
        }
         if (first == -1 || last == -1) // element not found
            return 0;
        else
            return last - first + 1;
    }
}
```