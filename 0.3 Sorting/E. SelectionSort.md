# Selection Sort

> **Difficulty:** Easy  
> **Topic / Pattern:** Sorting  

---

## 📝 Problem Statement

- Intitution : move the smallest element to left, sorts the array;  find the minimum element index then swap the first index

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
class SelectionSort
{
	void selectionSort(int arr[])
	{
	    int n = arr.length;
	    for(int i=0;i<n-1;i++){
	        int minI = i;
	        for(int j=i;j<n;j++){
	            if(arr[j] < arr[minI]){
	                minI = j;
	            }
	        }
            swap(arr,i,minI);
	    }
	}
	void swap(int []arr,int i, int j){
	    int temp = arr[i];
	    arr[i] = arr[j];
	    arr[j] = temp;
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
