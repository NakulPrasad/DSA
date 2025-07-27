```java
import java.util.*;

public class Solution {

    static class MinHeap {
        List<Integer> heap;

        MinHeap(int size) {
            heap = new ArrayList<>(size);
        }

        // Remove and return the minimum element (root of the heap)
        int extractMinElement() {
            if (heap.isEmpty()) return -1; // or throw exception
            int min = heap.get(0);
            int last = heap.size() - 1;
            heap.set(0, heap.get(last));
            heap.remove(last);
            heapifyDown(0);
            return min;
        }

        // Delete element at a specific index
        void deleteElement(int ind) {
            if (ind >= heap.size()) return;
            heap.set(ind, Integer.MIN_VALUE); // smallest possible value
            heapifyUp(ind); // bring it to top
            extractMinElement(); // remove it
        }

        // Maintain heap property downwards
        void heapifyDown(int index) {
            int size = heap.size();
            while (index < size) {
                int left = 2 * index + 1;
                int right = 2 * index + 2;
                int smallest = index;

                if (left < size && heap.get(left) < heap.get(smallest)) {
                    smallest = left;
                }
                if (right < size && heap.get(right) < heap.get(smallest)) {
                    smallest = right;
                }
                if (smallest != index) {
                    swap(index, smallest);
                    index = smallest;
                } else {
                    break;
                }
            }
        }

        // Maintain heap property upwards
        void heapifyUp(int index) {
            while (index > 0) {
                int parent = (index - 1) / 2;
                if (heap.get(index) < heap.get(parent)) {
                    swap(index, parent);
                    index = parent;
                } else {
                    break;
                }
            }
        }

        // Swap values at two indices
        void swap(int i, int j) {
            int temp = heap.get(i);
            heap.set(i, heap.get(j));
            heap.set(j, temp);
        }

        // Insert a new value
        void insert(int val) {
            heap.add(val);
            heapifyUp(heap.size() - 1);
        }
    }
}

```
