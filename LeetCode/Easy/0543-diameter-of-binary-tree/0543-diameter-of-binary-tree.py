# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter_result = 0
        node = root

        def traverse(node):
            nonlocal diameter_result
            curr_diameter = 0

            if node is None:
                return 0

            if node.left == None and node.right == None:
                return 0

            left_height = traverse(node.left)
            right_height = traverse(node.right)

            if node.left is not None:
                curr_diameter += 1 + left_height

            if node.right is not None:
                curr_diameter += 1 + right_height

            diameter_result = max(curr_diameter, diameter_result)

            return 1 + max(left_height, right_height)

        traverse(node)

        return diameter_result