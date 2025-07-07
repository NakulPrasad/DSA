# [Intersection Of two LL](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

## Approach : Fast and Slow pointer

- Has same concept as difference in length
- Iterate both lists, if one pointer(dummyA) is at end of list1, then point dummyA to head of list 2;

```java
/**
 * Time : N
 * Space : 1
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode dummyA = headA, dummyB = headB;
        while(dummyA != dummyB){
            dummyA = (dummyA == null)?headB:dummyA.next;
            dummyB = (dummyB == null)?headA:dummyB.next;
        }
        return dummyA;
    }
}
```

## Approach : Differnce in Length

- Traverse in both lists and find the size;
- Calculate size difference and move dummy Node pointer of large list by difference we get.
- Now both points to same length in both lists.
- Move both pointer simultaneously, and check if they are equal and stops when (dummyA == dummyB)

```java
/**
 * Time : 2*max(list1,list2) size
 * Space : 1
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;

        // Step 1: Calculate lengths
        int lenA = getLength(headA);
        int lenB = getLength(headB);

        // Step 2: Traverse the longer list by the difference in lengths
        ListNode dummyA = headA;
        ListNode dummyB = headB;
        if (lenA > lenB) {
            int diff = lenA - lenB;
            while (diff > 0) {
                dummyA = dummyA.next;
                diff--;
            }
        } else {
            int diff = lenB - lenA;
            while (diff > 0) {
                dummyB = dummyB.next;
                diff--;
            }
        }

        // Step 3: Traverse both lists in parallel until intersection
        while (dummyA != null && dummyB != null) {
            if (dummyA == dummyB) {
                return dummyA;
            }
            dummyA = dummyA.next;
            dummyB = dummyB.next;
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

## Approach : Hashset

```java
/**
 * Time : N+M - iterating both list
 * Space : N - hashset
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        var hs = new HashSet<ListNode>();
        while(headA != null){
            hs.add(headA);
            headA = headA.next;
        }
        while(headB != null){
            if(hs.contains(headB))
                return headB;
            headB = headB.next;
        }
        return null; // not found intersection
    }
}
```
