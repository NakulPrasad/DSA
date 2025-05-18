/**
 * Print all permutations of a string keeping the sequence but changing cases.
 * Input : ABC
 * Output : abc Abc aBc ABc abC AbC aBC ABC
 *
 * Time : O(2^N)
 * Space : O(N)
 */
class solution {
  solve(s: string): string[] {
    const ans: string[] = [];
    this.helper(s, "", ans);
    return ans;
  }
  helper(input: string, out: string, ans: string[]) {
    if (input.length === 0) {
      ans.push(out);
      return;
    }
    let out1 = out + input[0].toLowerCase();
    let out2 = out + input[0].toUpperCase();
    this.helper(input.slice(1), out1, ans);
    this.helper(input.slice(1), out2, ans);
  }
}

const sol = new solution();
const input = "abc";
console.log(sol.solve(input));
