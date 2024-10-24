/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

/**
 * Intitution:
 * This one is different as output format is different than what's input.
 *
 * Approach:
 * We maintain count of open and close brackets, when both count is zero we get a possible answer, store in list/array;
 * we know that first bracket will always be an "Open bracket", hence we remove the possiblity of starting with close bracket.
 *
 * Time Complexity : O(2^N)
 */
class balancedParenthesis {
  generateParenthesis(n: number): string[] {
    let ans: string[] = [];
    let open = n;
    let close = n;
    this.solve("", open, close, ans);
    return ans;
  }
  solve(output: string, open: number, close: number, ans: string[]) {
    if (open === 0 && close === 0) {
      ans.push(output);
      return;
    }
    if (open >= 0) {
      let output1 = output + "(";
      this.solve(output1, open - 1, close, ans);
    }
    if (close >= 0 && open < close) {
      let output2 = output + ")";
      this.solve(output2, open, close - 1, ans);
    }
  }
}
