//sort array in incresing using recursion using bubble sort;
//gives tle for large inputs
let nums = [5, 56, 0, 98];

function sortArray(nums: number[]): number[] {
  let index = nums.length - 1;
  helper(nums, index);
  return nums;
}
function helper(nums: number[], index: number): void {
  if (index === 0) {
    return;
  }
  helper(nums, index - 1);
  for (let i = index; i > 0; i--) {
    if (nums[i] < nums[i - 1]) {
      swap(i, i - 1, nums);
    }
  }
}
function swap(i: number, j: number, nums: number[]): void {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let ans = sortArray(nums);
console.log(ans);
