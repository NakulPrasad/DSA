# [Implement Priority Queue](https://www.naukri.com/code360/problems/implement-a-priority-queue-using-heap-and-also-implement-getmaxelement-in-the-queue_1743878?interviewProblemRedirection=true&search=Implement%20a&attempt_status=COMPLETED)

Problem statement
You have to implement the pop function of Max Priority Queue and implement using a heap.

Functions :
a) push(int x) : 'x' has to be inserted in the priority queue. This has been implemented already

b) pop() : return the maximum element in the priority queue, if priority queue is empty then return '-1'.

```java

public class Solution {
    // Method to remove and return the root (maximum element) from a max-heap
    public static int pop(List<Integer> heap) {
        int l = heap.size();
        
        // If the heap is empty, return -1
        if (l == 0) return -1;
        
        // Store the root element (maximum in max-heap)
        int largest = heap.get(0);
        
        // Swap the root with the last element
        heap.set(0, heap.get(l - 1));
        
        // Remove the last element (which was originally the root)
        heap.remove(l - 1);
        
        // Restore the heap property by heapifying down from the root
        heapifyDown(heap, 0);
        
        return largest; // Return the popped maximum element
    }

    // Helper method to restore the max-heap property by sifting the element at `index` down
    static void heapifyDown(List<Integer> heap, int index) {
        // Continue the process until the heap property is restored
        while (true) {
            // Get the indexes of the left and right children
            int leftChildIndex = 2 * index + 1;
            int rightChildIndex = 2 * index + 2;
            int largest = index; // Assume current node is the largest

            // Compare with left child
            if (leftChildIndex < heap.size() && heap.get(leftChildIndex) > heap.get(largest)) {
                largest = leftChildIndex;
            }

            // Compare with right child
            if (rightChildIndex < heap.size() && heap.get(rightChildIndex) > heap.get(largest)) {
                largest = rightChildIndex;
            }

            // If the largest is not the current node, swap and continue heapifying
            if (largest != index) {
                int temp = heap.get(largest);
                heap.set(largest, heap.get(index));
                heap.set(index, temp);

                // Move index to the position where the swap occurred
                index = largest;
            } else {
                // If the current node is already the largest, the heap is valid
                break;
            }
        }
    }
}

```