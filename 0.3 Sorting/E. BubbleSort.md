# Bubble Sort 

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
