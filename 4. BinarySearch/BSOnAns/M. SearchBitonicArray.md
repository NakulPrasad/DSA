# Q.17 Find an element in Bitonic array

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  

---

## 📝 Problem Statement

Given a bitonic sequence of n distinct elements, and an integer x, the task is to write a program to find given element x in the bitonic sequence in O(log n) time.

### Examples
```text
Input :  arr[] = {-3, 9, 18, 20, 17, 5, 1}, key = 20
Output : Found at index 3


Input :  arr[] = {5, 6, 7, 8, 9, 10, 3, 2, 1}, key = 30
Output : Not Found
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
public class Main {
  static int BinarySearch(int nums[], int low, int high, int key) {
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (nums[mid] == key) {
        return mid;
      }
      if (nums[mid] > key) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }

  static int findBitonicPoint(int nums[], int n, int start, int end) {
    int l = start, r = end;
    while (l <= r) {
        int mid = l + (r - l) / 2;

        if (mid > 0 && mid < n - 1) {
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                return mid;
            } else if (nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else if (mid == 0) {
            return (nums[0] > nums[1]) ? 0 : 1;
        } else if (mid == n - 1) {
            return (nums[n - 1] > nums[n - 2]) ? n - 1 : n - 2;
        }
    }
    return -1;
}

  // Function to search key in bitonic numsay
  static int searchBitonic(int nums[], int n, int key, int index) {
    if (key > nums[index]) {
      return -1;
    } else if (key == nums[index]) {
      return index;
    } else {
      int temp = BinarySearch(nums, 0, index - 1, key);
      if (temp != -1) {
        return temp;
      }

      // Search in right of k
      return BinarySearch(nums, index + 1, n - 1, key);
    }
  }

  // Driver code
  public static void main(String args[]) {
    int nums[] = {-8, 1, 2, 3, 4, 5, -2, -3};
    int key = 5;
    int n, l, r;
    n = nums.length;
    l = 0;
    r = n - 1;
    int index;
    index = findBitonicPoint(nums, n, l, r);

    int x = searchBitonic(nums, n, key, index);

    if (x == -1) {
      System.out.println("Element Not Found");
    } else {
      System.out.println("Element Found at index " + x);
    }
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
