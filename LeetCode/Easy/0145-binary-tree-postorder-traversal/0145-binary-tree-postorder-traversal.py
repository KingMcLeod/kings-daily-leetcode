# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result_list = []

        def traverse(node):
            if node is None:
                return

            traverse(node.left)
            traverse(node.right)
            result_list.append(node.val)

        traverse(root)

        return result_list