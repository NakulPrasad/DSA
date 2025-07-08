# Bucket Sort
When a set of data is present within a range and uniformly distributed, we make buckets to store those elements. Later we sort those buckets and then join those sorted buckets. 

Example : 
nums = [20 88 10 83 18 82 60 95] 

![](./images/bucketSort-0.png)

Now we sort these elements in the bucket individually.

![](./images/bucketSort-1.png)

nums = [10 18 20 60 82 83 88 95]

* Use frequency map
* create bucket list : list<list<characters>>
* put elements of frequency map to the bucket list
* Iterate from last as we want high freq first, pick each index list then iterate over the list to get the characters.

```java
import java.io.*;
import java.lang.*;
import java.util.*;

class TUF {
  public static void main(String[] args) {
    int arr[] = {30, 40, 10, 80, 5, 12, 70};
    int n = arr.length;
    int k = 4;
    bucketSort(arr, n, k);

    for (int i = 0; i < n; i++)
      System.out.print(arr[i] + " ");

  }

  static void bucketSort(int arr[], int n, int k) {

    int maxElement = arr[0];
    for (int i = 1; i < n; i++)
      maxElement = Math.max(maxElement, arr[i]);
    maxElement++;

    // Building buckets
    ArrayList<ArrayList<Integer> > buckets = new ArrayList<>();
    
    for (int i = 0; i < n; i++) {
      ArrayList<Integer> temp=new ArrayList<>();
      buckets.add(temp);
      
    }
    // Filling buckets
    for (int i = 0; i < n; i++) {
      int bucketIndex = (arr[i] * k) / maxElement;
      buckets.get((int) bucketIndex).add(arr[i]);
    }
    // Sorting buckets
    for (int i = 0; i < k; i++) {
      Collections.sort(buckets.get(i));
    }

    // Merging buckets
    int index = 0;
    for (int i = 0; i < k; i++) {
      for (int j = 0; j < buckets.get(i).size(); j++) {
        arr[index++] = buckets.get(i).get(j);
      }
    }
  }
}
```