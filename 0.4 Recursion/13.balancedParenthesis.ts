/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

/**
 * 
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
