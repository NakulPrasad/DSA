# [Sort a stack](https://www.geeksforgeeks.org/problems/sort-a-stack/1)

## Algorithm

1. Firstly, We will pop out the top element of the stack and pass the remaining stack to the same function i.e (recursive call).
2. Continue the above process until the stack becomes empty.
3. The moment the stack becomes empty we will call an insert function to insert the elements again in the stack in sorted order.
4. Insert function inserts the elements at their correct place recursively.

## Pseudo-Code

```java

FUNCTION sortStack(stack):
    IF stack is empty:
        RETURN

    top = POP the top element from stack

    CALL sortStack(stack)    // Recursively sort the rest of the stack

    CALL insertInSortedOrder(stack, top)


FUNCTION insertInSortedOrder(stack, element):
    IF stack is empty OR element > TOP of stack:
        PUSH element onto stack
        RETURN

    top = POP the top element from stack

    CALL insertInSortedOrder(stack, element)   // Recursive call with remaining stack

    PUSH top back onto stack



```
