import { LinkedListNode, getLinkedList, printLL } from "./generator";

const input = [10, 20, 30, 80, 8];
const head = getLinkedList(input);

//question
let index = 2; // insert at
const value = 444; // insert Value
let temp = head;
//traverse upto a node before, and change pointer
while (temp != null && index-- > 1) {
  temp = temp.next;
}
if (temp != null) {
  const nextNode = temp?.next;
  temp.next = new LinkedListNode(value);
  temp.next.next = nextNode;
}

printLL(head);

//printing length of linked list
let length = 0;
while (head != null) {
  length++;
}
