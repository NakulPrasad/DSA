import { getLinkedList } from "./generator";

const input = [10, 20, 30, 80, 8];

const head = getLinkedList(input);

//printing a linkedlist :
let temp = head;

while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}
