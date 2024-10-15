function kthGrammar(n: number, k: number): number {
  let mid = Math.pow(2, n - 1) / 2;
  let ans = helper(n, k, mid);
  return ans;
}

function helper(n, k, mid): number {
  if (n == 1 && k == 1) {
    return 0;
  }
  mid = Math.pow(2, n - 1) / 2;
  if (k <= mid) {
    return helper(n - 1, k, mid);
  } else if (k > mid) {
    return 1 - helper(n - 1, k - mid, mid);
  }
}

// This is observation question, and question is made like recusrion;
// observations:
// 1. Number of elements in next row is 2x of previous;
// 2. Next row half is same is prevoius,
// 3. Second half of row is complement of previous row.
//Time : O(N) Space : O(N)
