/**
 * Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest element in arr[] that is less than or equal to k. 
 * This element is called the "floor" of k. If such an element does not exist, return -1.
 * 
 * Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 0
 * Output: -1
 * Explanation: No element less than 0 is found. So output is -1.
 * 
 * Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 5
 * Output: 1
 * Explanation: Largest Number less than 5 is 2 , whose index is 1.
 */

/**
 * @Intitution : use binary search
 * @Approach : compare middle element with target, if less than target move left to mid+1
 * @Complexity : Time : O(logN), Space : O(1)  
 * 
 * 
*/

function findFloor(arr: number[], n: number, x: number): number {
        // your code here
        let l = 0, r= n-1;
        while(l<=r){
            let mid = Math.floor(l + (r-l)/2);
            if(arr[mid] === x){
                return mid;
            }
            else if(arr[mid] > x){
                r= mid-1;
            }
            else if(arr[mid] < x){
                l=mid+1;
            }
        }
        return r;
    }
