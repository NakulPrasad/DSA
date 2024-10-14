// Find largest element
let arr: number[] = [1, 8, 7, 56, 90];

// Bruteforce
// O(N)
// Maintaing a max variable

// let max = -Infinity;
// for (let i of arr) {
//   max = Math.max(i, max);
// }
// console.log(max);

// Binary Search
let l = 0,
  r = arr.length,
  max = -Infinity;

//bs needed sorted array
// arr.sort((a, b) => a - b);
//if we sort then max will be last element.

while (l < r) {
  let mid = r - (r - l) / 2;
  if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
    max = Math.max(arr[mid], max);
    l++;
    r--;
  } else if (arr[mid] < arr[mid + 1]) {
    l = mid + 1;
  } else if (arr[mid] > arr[mid - 1]) {
    r = mid - 1;
  }
}
console.log(max);
