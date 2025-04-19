/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 */

/**
 * @Intitution : move the largest element to right, sorts the array;
 * @Approach : compare two adjacent pairs and swap if left > right;
 * @Complexity : Time : O(N^2), Space : O(1)  
 * 
 * 
*/

function search(nums: number[], target: number): number {
  let n = nums.length - 1;
  let l = 0;
  let r = n;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }
  return -1;
}
