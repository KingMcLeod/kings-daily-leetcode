# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result_list = []

        def traverse(node):
            if node is None:
                return
            # print(node.val) pre order
            traverse(node.left)
            # print(node.val) inorder
            result_list.append(node.val)
            traverse(node.right)
            # print(node.val) # post order

        traverse(root)

        return result_list