# [Missing And Repeated Number](https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1)

Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

```
Input: arr[] = [2, 2]
Output: [2, 1]
Explanation: Repeating number is 2 and smallest positive missing number is 1.
Input: arr[] = [1, 3, 3]
Output: [3, 2]
Explanation: Repeating number is 3 and smallest positive missing number is 2.
Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5]
Explanation: Repeating number is 1 and the missing number is 5.
```

```
Constraints:
2 ≤ arr.size() ≤ 106
1 ≤ arr[i] ≤ arr.size()
```

## Approach : Hashing

```java
class Solution {
    // Function to find two elements: one repeating and one missing.
    int[] findTwoElement(int[] arr, int n) {
        // Create a helper array of size n+1 to count occurrences
        int[] count = new int[n + 1];

        // Initialize all elements to 1
        for (int i = 1; i <= n; i++) {
            count[i] = 1;
        }

        // Decrement count for each element in the array
        for (int num : arr) {
            count[num]--;
        }

        int repeat = -1;
        int missing = -1;

        // Scan to find repeating (-1) and missing (1) elements
        for (int i = 1; i <= n; i++) {
            if (count[i] == -1) {
                repeat = i;
            } else if (count[i] == 1) {
                missing = i;
            }
        }

        // Return as array [repeating, missing]
        return new int[] {repeat, missing};
    }
}

```
## Approach : XOR
