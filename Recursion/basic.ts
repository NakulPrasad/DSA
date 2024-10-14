let x = 10;
//program to print upto 10 using recursion;

let count = (x: number) => {
  if (x === 0) return;
  console.log(x);
  count(x - 1);
};

count(x);

// steps to solve a recursion problem
// 1. Basecase
// 2. Hypothesis => what it should return
// 3. Induction => make code to validate hypothesis

//Types of recursion
// 1. BHI method
// 2. Recusion tree
// 3. DP
