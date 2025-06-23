# [Intersection Of two LL](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        
        // Step 1: Calculate lengths
        int lenA = getLength(headA);
        int lenB = getLength(headB);
        
        // Step 2: Traverse the longer list by the difference in lengths
        ListNode currA = headA;
        ListNode currB = headB;
        if (lenA > lenB) {
            int diff = lenA - lenB;
            while (diff > 0) {
                currA = currA.next;
                diff--;
            }
        } else {
            int diff = lenB - lenA;
            while (diff > 0) {
                currB = currB.next;
                diff--;
            }
        }
        
        // Step 3: Traverse both lists in parallel until intersection
        while (currA != null && currB != null) {
            if (currA == currB) {
                return currA;
            }
            currA = currA.next;
            currB = currB.next;
        }
        
        return null; // No intersection found
    }
    
    // Helper function to calculate the length of a linked list
    private int getLength(ListNode head) {
        int length = 0;
        ListNode current = head;
        while (current != null) {
            length++;
            current = current.next;
        }
        return length;
    }
}
```