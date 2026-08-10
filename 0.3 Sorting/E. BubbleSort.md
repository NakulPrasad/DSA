# Bubble Sort 

> **Difficulty:** Easy  
> **Topic / Pattern:** Sorting  

---

## 📝 Problem Statement

[Insert problem description here]

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 💻 Implementation (Java)

```java
/**
 * Intitution : move the largest element to right, sorts the array;
 * Approach : compare two adjacent pairs and swap if left > right;
 * Complexity : Time : O(N^2), Space : O(1)  
 */
class BubbleSort {
    public static void bubbleSort(int arr[]) {
        for(int i=0;i<arr.length;i++){
            for(int j=1;j<arr.length;j++){
                if(arr[j-1] > arr[j]){
                    swap(j-1, j, arr);
                }
            }
        }
    }
    public static void swap(int i, int j, int arr[]){
        var x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N^2), Space  O(1) | [Provide justification] |
| **Space Complexity** | O(1) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
