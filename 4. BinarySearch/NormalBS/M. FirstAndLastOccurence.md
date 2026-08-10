# Find first and last positions of an element

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  
> **Link:** [Find first and last positions of an element](https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1)

---

## 📝 Problem Statement

Given a sorted array arr[] with possibly some duplicates, the task is to find the first and last occurrences of an element x in the given array.

Note: If the number x is not found in the array then return both the indices as -1.

### Examples
```text
Input : arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
Output : 2 5
Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5


Input : arr[] = [1, 3, 5, 5, 5, 5, 7, 123, 125 ], x = 7
Output : 6 6
Explanation: First and last occurrence of 7 is at index 6


Input: arr[] = [1, 2, 3], x = 4
Output: -1 -1
Explanation: No occurrence of 4 in the array, so, output is [-1, -1]
```

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 🎨 Visualization / Dry Run

![visualization](images/BS_4.1.jpg)

---

## 💻 Implementation (Java)

```java
class GFG {
    ArrayList<Integer> find(int arr[], int x) {

        ArrayList<Integer> list = new ArrayList<>();
        int start = 0, end= arr.length-1, first =-1, last=-1;
        while(start <= end){
            int mid = start + (end-start)/2;
            
            if(arr[mid] == x){
                if(first == -1){
                    first = mid;
                    last = mid;
                    
                }
                else last = mid;
                
                //continue to search left
                int left = mid-1;
                while(left>= start && arr[left] ==x){
                    first=left;
                    left--;
                }
                //continue to search left
                int right = mid+1;
                while(right <= end && arr[right] ==  x){
                    last = right;
                    right++;
                }
                break;
            }
            else if(arr[mid] > x){
                end = mid -1;
            }
            else 
                start = mid+1;
        }
        list.add(first);
        list.add(last);
        return list;
    
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
