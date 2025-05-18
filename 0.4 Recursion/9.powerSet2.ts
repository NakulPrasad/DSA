/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Time : O(2^N)
 * Space : O(N)
 */

function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  let output: number[] = [];
  helper(nums, output, ans);
  return ans;
}

function helper(input: number[], output: number[], ans: number[][]) {
  //base case
  if (input.length === 0) {
    ans.push(output);
    return;
  }
  //each will break in 2 decisions
  let out1 = [...output];
  let out2 = [...output];
  //each step we add first character to output2; then update input by deleteing first character;
  out2.push(input[0]);
  input = input.slice(1);

  //above should repeat for each generated input;
  helper(input, out1, ans);
  helper(input, out2, ans);
}
