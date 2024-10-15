let x = 10;
//program to print upto 10 using recursion;

let count = (x: number) => {
  if (x === 0) return;
  console.log(x);
  count(x - 1);
};

count(x);

//program to print increasing
x = 10;
function increasing(x: number) {
  if (x === 0) return;
  increasing(x - 1);
  console.log(x);
}
increasing(x);

// steps to solve a recursion problem
// 1. Basecase
// 2. Hypothesis => what it should return
// 3. Induction => make code to validate hypothesis

//Types of recursion
// 1. BHI method =>easy
// 2. Recusion tree =>medium
// 3. DP => hard
