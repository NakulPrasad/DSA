# [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/) - Root Left Right

Given the root of a binary tree, return the preorder traversal of its nodes' values.

![PreOrder](<../Images/PreOrder-1.jpg>)
```java
/**
 * Iterative
*/
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {

        List<Integer> preorder = new ArrayList<>();

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
![PreOrder](<../Images/PreOrder-2.jpg>)

```java
/**
 * Recursive
*/
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
