# Two Sum II - Input Array Is Sorted

> **Difficulty:** Medium  
> **Topic / Pattern:** Two Pointers  
> **Link:** [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

---

## 📝 Problem Statement

Same as two sum but wihout using hashmap

### Examples
```text
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

---

## 💡 Intuition & Core Approach

Two Pointers

```
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        /**
            Approach : Two Pointers
            Intitution: nums[l] + nums[r] == target, if sum exceeds target, take sum with an element before, vice versa.
            
            

         */
        int n = numbers.length-1;
        int l = 0;
        int r = n;
        while (l<r){
            if(numbers[l] + numbers[r] == target){
                return new int[]{l+1, r+1};
            }
            else if(numbers[l] + numbers[r] > target){
                r--;
            }
            else {
                l++;
            }
        }
        //if not found
        return new int[0];
    }
}
```

---

## 💻 Implementation (Java)

```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        /**
            Approach : Two Pointers
            Intitution: nums[l] + nums[r] == target, if sum exceeds target, take sum with an element before, vice versa.
            Time : O(N)
            Space : O(1)

         */
        int n = numbers.length-1;
        int l = 0;
        int r = n;
        while (l<r){
            if(numbers[l] + numbers[r] == target){
                return new int[]{l+1, r+1};
            }
            else if(numbers[l] + numbers[r] > target){
                r--;
            }
            else {
                l++;
            }
        }
        //if not found
        return new int[0];
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N) | [Provide justification] |
| **Space Complexity** | O(1) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
