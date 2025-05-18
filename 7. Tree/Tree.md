# Trees

Generic TreeNode class in Java

```java
public class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    // Constructor
    TreeNode(T data) {
        this.data = data;
    }
    TreeNode(int data, TreeNode left, TreeNode right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Main class to demonstrate usage
public class Main {
    public static void main(String[] args) {
        TreeNode<Integer> root = new TreeNode<>(10);
        TreeNode<Integer> nodeA = new TreeNode<>(5);
        TreeNode<Integer> nodeB = new TreeNode<>(6);

        root.setLeft(nodeA);
        root.setRight(nodeB);
    }
}

```

## Inorder Traversal

![Image](<Images/1. InOrder.jpg>)

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> output = new ArrayList<Integer>();
        inorderHelper(root, output);
        return output;
    }
    public List<Integer> inorderHelper(TreeNode node, List<Integer> output){
        if(node==null)
        return null;
        inorderHelper(node.left, output);
        output.add(node.data);
        inorderHelper(node.right, output);
        return output;
    }

}
```

### Iterative Inorder

```java

public class BinaryTreeInorderTraversal {

    // Function to perform inorder traversal
    // of the tree and store values in 'arr'
    public static void inorder(Node root, List<Integer> arr) {
        // If the current node is null
        // (base case for recursion), return
        if (root == null) {
            return;
        }
        // Recursively traverse the left subtree
        inorder(root.left, arr);
        // Push the current node's
        // value into the list
        arr.add(root.data);
        // Recursively traverse
        // the right subtree
        inorder(root.right, arr);
    }

    // Function to initiate inorder traversal
    // and return the resulting list
    public static List<Integer> inOrder(Node root) {
        // Create an empty list to
        // store inorder traversal values
        List<Integer> arr = new ArrayList<>();
        // Call the inorder traversal function
        inorder(root, arr);
        // Return the resulting list
        // containing inorder traversal values
        return arr;
    }

    // Main function
    public static void main(String[] args) {
        // Creating a sample binary tree
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        // Getting inorder traversal
        List<Integer> result = inOrder(root);

        // Displaying the inorder traversal result
        System.out.print("Inorder Traversal: ");
        // Output each value in the
        // inorder traversal result
        for (int data : result) {
            System.out.print(data + " ");
        }
        System.out.println();
    }
}
```

## Preorder Traversal

![PreOrder](<./Images/PreOrder-1.jpg>)
```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {

        List<Integer> preorder = new ArrayList<>();

        // If the root is null, return
        // an empty traversal result
        if (root == null) {
            return preorder;
        }

        
        Stack<TreeNode> st = new Stack<>();

        st.push(root);

        // Perform iterative preorder traversal
        while (!st.empty()) {

            root = st.pop();

            preorder.add(root.val);

            if (root.right != null) {
                st.push(root.right);
            }

            if (root.left != null) {
                st.push(root.left);
            }
        }

        return preorder;
    }
}

```
![PreOrder](<./Images/PreOrder-2.jpg>)

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>(); 
        preorderHelper(root, result); 
        return result;
    }
    
    private void preorderHelper(TreeNode node, List<Integer> result) {
        if (node == null) {
            return; 
        }
        
        result.add(node.val);
        
        preorderHelper(node.left, result); // Recursively traverse the left subtree
        preorderHelper(node.right, result); // Recursively traverse the right subtree
    }
}
```
