# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        left_leaves = []

        def traverse(node):
            if node is None:
                return

            if node.left is not None:
                left_node = node.left

                if left_node.left == None and left_node.right == None:
                    left_leaves.append(left_node.val)
                else:
                    traverse(node.left)

            if node.right is not None:
                traverse(node.right)

        traverse(root)

        return sum(left_leaves)