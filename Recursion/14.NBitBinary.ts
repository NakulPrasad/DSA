/**
 * Given a positive integer n. Your task is to generate a string list of all n-bit binary numbers where, for any prefix of the number, there are more or an equal number of 1's than 0's. The numbers should be sorted in decreasing order of magnitude.
 * Input:  n = 2
 * Output: {"11", "10"}
 * Explanation: Valid numbers are those where each prefix has more 1s than 0s:
 * 11: all its prefixes (1 and 11) have more 1s than 0s.
 * 10: all its prefixes (1 and 10) have more 1s than 0s.
 * So, the output is "11, 10".
 *
 * Observation:
 * Zero is added only if ones are one more than count of zero.
 *
 * Common Error:
 * On recursion pass n-1 than n--;
 *
 * Time : (2^N)
 * Space : O(N)
 */

function NBitBinary(n: number): string[] {
  let zero = 0;
  let one = 0;
  let ans: string[] = [];
  solve("", zero, one, ans, n);
  return ans;
}

function solve(
  output: string,
  zero: number,
  one: number,
  ans: string[],
  n: number
) {
  if (n === 0) {
    ans.push(output);
    return;
  }
  let out1 = output + "1";
  let out2 = output + "0";

  // console.log(out1, out2, n, zero + one);

  solve(out1, zero, one + 1, ans, n - 1);

  if (zero <= one && one - zero >= 1) {
    solve(out2, zero + 1, one, ans, n - 1);
  }
}

console.log(NBitBinary(3));
