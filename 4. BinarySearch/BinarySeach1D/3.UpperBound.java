package BinarySearch.BinarySeach1D;

/**
 Given an unsorted array arr[] of integers and an integer x, find the floor and ceiling of x in arr[].
 
 Floor of x is the largest element which is smaller than or equal to x. Floor of x doesn’t exist if x is smaller than smallest element of arr[].
 Ceil of x is the smallest element which is greater than or equal to x. Ceil of x doesn’t exist if x is greater than greatest element of arr[].
 
 Return an array of integers denoting the [floor, ceil]. Return -1 for floor or ceiling if the floor or ceiling is not present.
 */


/**
 Input: x = 10 , arr[] = [5, 6, 8, 8, 6, 5, 5, 6]
 Output: 8, -1
 Explanation: Floor of 10 is 8 but ceil of 10 is not possible.
 */

/**
 * @Intitution : We have to sort array to use binary search
 * @Approach : compare middle element with target, if less than target, save the index as floor then move left to mid+1
 * @Complexity : Time : O(NlogN) Sorting, Space : O(1)  
 * 
 * 
*/

import java.util.Arrays;

class Solution {
    public int[] getFloorAndCeil(int x, int[] arr) {

        Arrays.sort(arr);
        int n = arr.length;
        int l=0,r=n-1;
        int floor = -1, ceil = -1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == x){
                floor = x;
                ceil = x;
                return new int[]{floor, ceil};
            }
            else if(arr[mid] < x){
                floor = arr[mid];
                l = mid+1;
                
            }
            else if(arr[mid] > x) {
                ceil = arr[mid];
                r=mid-1;
            }
        }
        return new int[]{floor, ceil};
    }
}