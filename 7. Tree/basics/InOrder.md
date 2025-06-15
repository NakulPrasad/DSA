# [Inorder](https://leetcode.com/problems/binary-tree-inorder-traversal/) Left Root Right
Given the root of a binary tree, return the inorder traversal of its nodes' values.

### Example 1:
![](https://assets.leetcode.com/uploads/2024/08/29/screenshot-2024-08-29-202743.png)
```
Input: root = [1,null,2,3]

Output: [1,3,2]
```
### Example 2:
![](https://assets.leetcode.com/uploads/2024/08/29/tree_2.png)
```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,2,6,5,7,1,3,9,8]
```
![Image](<../Images/InOrder.jpg>)

## Approach : Recursive

```java
/**
 * Recursive
*/
public class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    TreeNode(T data) {
        this.data = data;
    }
    TreeNode(int data, TreeNode left, TreeNode right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
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
## Approach : Iterative

```java
/**
 * Iterative
*/
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorder = new ArrayList<>();
        Stack<TreeNode> st = new Stack<>();

        TreeNode curr = root;

        while (curr != null || !st.isEmpty()) {
            // Reach the leftmost node of the current node
            while (curr != null) {
                st.push(curr);
                curr = curr.left;
            }

            // Current must be null at this point
            curr = st.pop();
            inorder.add(curr.val);

            // Now, visit the right subtree
            curr = curr.right;
        }

        return inorder;
    }
}

```