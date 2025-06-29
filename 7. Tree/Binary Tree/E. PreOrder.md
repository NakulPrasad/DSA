# [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/) - Root Left Right

Given the root of a binary tree, return the preorder traversal of its nodes' values.

![PreOrder](<../Images/PreOrder.jpg>)
### Example 2:
![Tree](https://assets.leetcode.com/uploads/2024/08/29/tree_2.png)
```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [1,2,4,5,6,7,3,8,9]
```
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

## Approach : Recursive
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
