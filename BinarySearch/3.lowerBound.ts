/**
 * Given a sorted array arr[] of size n without duplicates, and given a value x.
 * Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x.
 * Find the index of k(0-based indexing).
 *
 * Input: n = 7, x = 5 arr[] = {1,2,8,10,11,12,19}
 * Output: 1
 * Explanation: Largest Number less than 5 is 2 (i.e k = 2), whose index is 1(0-based indexing).
 */

import { log } from "console";

class solution {
  findFloor(arr: number[], n: number, x: number) {
    let l = 0,
      r = n - 1;
    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] > x) {
        r = mid - 1;
      } else if (arr[mid] < x) {
        l = mid + 1;
      }
    }
    return r;
  }
}
const sol = new solution();
const nums = [1, 2, 8, 10, 11, 12, 19];
const x = 5;
const ans = sol.findFloor(nums, nums.length, x);
log(ans);
