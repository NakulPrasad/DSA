# [Reverse a DLL](https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1)

Given a doubly linked list. Your task is to reverse the doubly linked list and return its head.
```
Examples:

Input: LinkedList: 3 <-> 4 <-> 5
Output: 5 <-> 4 <-> 3
```
```java
class Solution {
    public DLLNode reverseDLL(DLLNode head) {
        DLLNode curr = head;
        DLLNode newHead = null;

        while (curr != null) {
            // Swap next and prev
            DLLNode temp = curr.next;
            curr.next = curr.prev;
            curr.prev = temp;

            // Move to next node (which is prev now)
            newHead = curr;
            curr = curr.prev;
        }

        return newHead;
    }
}
```