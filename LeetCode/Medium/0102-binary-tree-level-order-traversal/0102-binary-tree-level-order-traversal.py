# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        from collections import deque

        if root is None:
            return []

        level_queue = deque()
        result_list = []
        
        level_queue.append(root)

        while len(level_queue) > 0:
            level_size = len(level_queue)
            level_list = []

            for i in range(level_size):
                
                popped = level_queue.pop()
                
                if popped.left is not None:
                    level_queue.appendleft(popped.left)

                if popped.right is not None:
                    level_queue.appendleft(popped.right)

                level_list.append(popped.val)
            
            result_list.append(level_list)

        return result_list