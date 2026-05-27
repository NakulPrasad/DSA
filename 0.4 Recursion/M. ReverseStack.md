# [Reverse Stack](https://www.geeksforgeeks.org/problems/reverse-a-stack/1)

```
Input: st[] = [1, 2, 3, 4]
Output: [1, 2, 3, 4]
Explanation: After reversing, the elements of stack are in opposite order.
```

## Approach : Recursion

### Intitution
- Remove all elements one by one using recursion.
- While recursion is returning (backtracking), insert each removed element at the bottom of the stack.
- Repeating this for every element automatically reverses the order.

```java
// Time : O(N^2)
// Space : O(n);

FUNCTION reverseStack(stack)

    // Base case:
    // If stack becomes empty, stop recursion
    IF stack is empty
        RETURN

    // Remove top element
    temp = pop top element from stack

    // Recursively reverse remaining stack
    reverseStack(stack)

    // Insert removed element at the bottom
    insertAtBottom(stack, temp)

END FUNCTION



FUNCTION insertAtBottom(stack, element)

    // If stack is empty,
    // place the element at bottom
    IF stack is empty
        push element into stack
        RETURN

    // Remove current top element
    temp = pop top element from stack

    // Recursively move deeper
    // until stack becomes empty
    insertAtBottom(stack, element)

    // Push stored elements back
    // while recursion backtracks
    push temp back into stack

END FUNCTION

```