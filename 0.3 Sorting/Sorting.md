# Sorting

### Q.1 Selection Sort

* @Intitution : move the smallest element to left, sorts the array;
* @Approach : find the minimum element index then swap the first index
* @Complexity : Time : O(N^2), Space : O(1)  

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

### Q.2 Bubble Sort 

* @Intitution : move the largest element to right, sorts the array;
* @Approach : compare two adjacent pairs and swap if left > right;
* @Complexity : Time : O(N^2), Space : O(1)  

```java
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
