class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const temp = new ListNode();
  temp.next = head;
  remove(temp, val);
  return temp.next;
}

function remove(temp: ListNode | null, val: number) {
  if (temp === null) {
    return;
  }
  while (temp.next && temp.next.val === val) {
    temp.next = temp.next.next;
  }
  remove(temp.next, val);
}
