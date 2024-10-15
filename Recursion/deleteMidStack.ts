class Solution {
  // Function to delete middle element of a stack.
  public static deleteMid(s: number[], sizeOfStack: number) {
    // code here
    let mid = Math.floor(sizeOfStack / 2);
    let count = 0;
    this.delete(s, mid, count);
  }

  public static delete(s: number[], mid: number, count: number) {
    if (count === mid) {
      s.pop();
      return;
    }
    let temp: number = s.pop();
    // console.log(count, mid);
    this.delete(s, mid, count + 1);
    s.push(temp);
  }
}
const input = [1, 2, 3, 4];
Solution.deleteMid(input, input.length);
console.log(input);
