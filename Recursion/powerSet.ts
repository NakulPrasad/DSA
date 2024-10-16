/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * input : "abc"
 * output : ["a", "b", "c", "ab","bc","abc"]
 *
 * Time : O(2^N)
 * Space : O(N)
 **/

class powerSet {
  solve(input: string): string[] {
    const ans: string[] = [];
    const output = "";
    this.helper(input, output, ans);
    return ans;
  }
  helper(input: string, output: string, ans: string[]) {
    //base case
    if (input.length === 0) {
      ans.push(output);
      return;
    }
    //each will break in 2 decisions
    let out1 = output;
    let out2 = output;
    //each step we add first character to output2; then update input by deleteing first character;
    out2 += input[0];
    input = input.substring(1);

    //above should repeat for each generated input;
    this.helper(input, out1, ans);
    this.helper(input, out2, ans);
  }
}

// const solution = new powerSet();
// const input = "abc";
// const ans = solution.solve(input);
// console.log(ans);
