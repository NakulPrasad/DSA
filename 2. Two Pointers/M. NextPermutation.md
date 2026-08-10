# Next Permutation

> **Difficulty:** Medium  
> **Topic / Pattern:** Two Pointers  
> **Link:** [Next Permutation](https://leetcode.com/problems/next-permutation/description/)

---

## 📝 Problem Statement

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

### Examples
```text
Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
```

---

## 💡 Intuition & Core Approach

Two POinter


```
/**
 * 
 * 
 */
class Solution {
    public void nextPermutation(int[] arr) {
        //find pivot idex -> if not then array is sorted and just reverse the array
        //find next larger element than pivot at right side of pivot index
        //swap with that idex
        //reverse the string after the pivot index.
        //example : 1 3 5 4 2

        int l = arr.length-1;
        int pivot =-1;// stores the index
        int nextL = -1;
        for(int i=l-1;i>=0;i--){
            if(arr[i] < arr[i+1]){
                pivot = i;
                break;
            }
        }
        //check for pivot exists or not
        if(pivot ==-1) {
            reverse(0,l,arr);
        return;
        }

        //find next largest and swap
        for(int i=pivot+1;i<= l;i++){
            if(arr[i] > arr[pivot]){
                nextL = i;
            }
            // nextL = Math.max(arr[pivot], arr[i]);
        }
        swap(pivot, nextL, arr);
        reverse(pivot+1,l, arr);

    }

    void swap(int s, int e, int[] arr){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }
    void reverse(int s, int e, int[] arr){
        while(s < e){

            swap(s,e, arr);
            s++;
            e--;
        }
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Time : N
 * Space : 1
 */
class Solution {
    public void nextPermutation(int[] arr) {
        //find pivot idex -> if not then array is sorted and just reverse the array
        //find next larger element than pivot at right side of pivot index
        //swap with that idex
        //reverse the string after the pivot index.
        //example : 1 3 5 4 2

        int l = arr.length-1;
        int pivot =-1;// stores the index
        int nextL = -1;
        for(int i=l-1;i>=0;i--){
            if(arr[i] < arr[i+1]){
                pivot = i;
                break;
            }
        }
        //check for pivot exists or not
        if(pivot ==-1) {
            reverse(0,l,arr);
        return;
        }

        //find next largest and swap
        for(int i=pivot+1;i<= l;i++){
            if(arr[i] > arr[pivot]){
                nextL = i;
            }
            // nextL = Math.max(arr[pivot], arr[i]);
        }
        swap(pivot, nextL, arr);
        reverse(pivot+1,l, arr);

    }

    void swap(int s, int e, int[] arr){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }
    void reverse(int s, int e, int[] arr){
        while(s < e){

            swap(s,e, arr);
            s++;
            e--;
        }
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | N | [Provide justification] |
| **Space Complexity** | 1 | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
