# [Right side view of Tree](https://leetcode.com/problems/binary-tree-right-side-view/description/)

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

### Example 1:
![](https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png)
```
Input: root = [1,2,3,null,5,null,4]

Output: [1,3,4]
```

### Approach : Recursive

```java
/**
 * Intitution : 
 * Time : O(N)
 * Space : O(H)
 * 
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> tree = new ArrayList<>();
        rightView(root, tree, 0);
        return tree;
    }
    public void rightView(TreeNode curr, List<Integer> tree, int depth){
        if(curr == null){
            return ;
        }
        if(depth == tree.size()){
            tree.add(curr.val);
        }
        rightView(curr.right, tree, depth +1);
        rightView(curr.left, tree, depth +1);
    }
}
```