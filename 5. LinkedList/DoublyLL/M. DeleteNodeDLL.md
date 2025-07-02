# [Delete Node in Doubly LL](https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1)

Given a Doubly Linked list and a position. The task is to delete a node from a given position (position starts from 1) in a doubly linked list and return the head of the doubly Linked list.
```
Examples:

Input: LinkedList = 1 <--> 3 <--> 4, x = 3
Output: 1 <--> 3
Explanation: After deleting the node at position 3 (position starts from 1),the linked list will be now as 1 <--> 3.
```

```java
class Solution {
    public Node deleteNode(Node head, int x) {
        if (head == null) return null;

        // Case 1: Delete the head node
        if (x == 1) {
            head = head.next;
            if (head != null) {
                head.prev = null;
            }
            return head;
        }

        Node curr = head;
        int count = 1;

        // Traverse to the x-th node
        while (curr != null && count < x) {
            curr = curr.next;
            count++;
        }

        // If curr is the node to delete
        if (curr != null) {
            if (curr.prev != null) {
                curr.prev.next = curr.next;
            }
            if (curr.next != null) {
                curr.next.prev = curr.prev;
            }
        }

        return head;
    }
}
```