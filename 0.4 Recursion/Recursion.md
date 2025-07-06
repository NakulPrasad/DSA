# Recursion

x = 10;
```
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

```