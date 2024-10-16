/**
 *
 * @param x : base number
 * @param n : power
 * @returns X^n
 * Method : recusion, fails for large inputs
 * Time : O(N), Space : O(N) stack space;
 */

function myPow(x: number, n: number): number {
  //for negative powers
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return helper(x, n);
}

function helper(x: number, n: number): number {
  if (n === 0) return 1;
  return x * helper(x, n - 1);
}
