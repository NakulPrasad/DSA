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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> output = new ArrayList<Integer>();
        inorderHelper(root, output);
        return output;
    }
    public List<Integer> inorderHelper(TreeNode node, List<Integer> output){
        if(node==null)
        return null;
        inorderHelper(node.left, output);
        output.add(node.val);
        inorderHelper(node.right, output);
        return output;
    }

}