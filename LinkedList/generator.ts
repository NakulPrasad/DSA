export class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

export class dllNode {
  prev: dllNode | null;
  data: number;
  next: dllNode | null;
  constructor(data: number) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

export const getLinkedList = (input: Array<number>): LinkedListNode | null => {
  if (input.length === 0) return null;

  const head = new LinkedListNode(input[0]);
  let tempNode = head;

  for (let i = 1; i < input.length; i++) {
    const current = new LinkedListNode(input[i]);
    tempNode.next = current;
    tempNode = current;
  }

  return head;
};

export const getDLL = (input: Array<number>) => {
  if (input.length === 0) return null;

  const head = new dllNode(input[0]);
  let currentNode = head;
  let prevNode = head;

  for (let i = 1; i < input.length; i++) {
    const nextNode = new dllNode(input[i]);
    currentNode.next = nextNode;
    currentNode = currentNode.next;
    currentNode.prev = prevNode;
    prevNode.next = nextNode;
    prevNode = prevNode.next;
  }
  return head;
};

export const printLL = (temp: LinkedListNode | dllNode | null) => {
  const ans = [];
  while (temp != null) {
    ans.push(temp.data);
    temp = temp.next;
  }
  console.log(ans);
};
