/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 */

class Solution {
  mySqrt(x: number): number {
    let l = 1, r = x;
    
    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      //   console.log(mid);
      let temp = mid * mid;
      if (temp <= x) {
        l = mid + 1;
      } else if (temp > x) {
        r = mid - 1;
      }
    }
    return r;
  }
}

