class TreeNode<T> {
  private data: T;
  private left: TreeNode<T> | null;
  private right: TreeNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  setLeft(node: TreeNode<T>) {
    this.left = node;
  }
  setRight(node: TreeNode<T>) {
    this.right = node;
  }
}

const root = new TreeNode(10);
const nodeA = new TreeNode(5);
const nodeB = new TreeNode(6);
root.setLeft(nodeA);
root.setRight(nodeB);
