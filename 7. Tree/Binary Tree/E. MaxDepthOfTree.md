

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        int depth = helper(root);
        return depth;
    }
    
    int helper(TreeNode node){
        if(node ==null)return 0;
        int l = helper(node.left);
        int r = helper(node.right);
        return Math.max(l,r)+1;
    }
}
```