/**
 * Observation:
 * - Reapeatedliy diving by 2 the number leaves 1 if its perfect root
 * - number become negative if not perfect square.
 *
 * Method : recursion
 * Time : O(N)
 * Space : O(N)
 */

function isPowerOfTwo(n: number): boolean {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}
