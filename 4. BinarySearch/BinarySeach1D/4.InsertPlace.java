package BinarySearch.BinarySeach1D;
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 */

/*
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

class Solution {
    public int searchInsert(int[] arr, int target) {
        int n = arr.length;
        int l = 0, r=n-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == target ){
                return mid;
            }
            else if(arr[mid] <target){
                l = mid +1;
            }
            else if(arr[mid] > target){
                r = mid -1;
            }
        }
        return l;
    }
}