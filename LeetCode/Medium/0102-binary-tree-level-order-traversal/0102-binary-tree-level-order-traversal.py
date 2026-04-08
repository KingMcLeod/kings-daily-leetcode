# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        level_output = [] # return value
        level_queue = deque([root]) # queue system

        while(level_queue):
            level_size = len(level_queue)
            curr_arr = []

            for i in range(level_size):
                curr_pointer = level_queue.popleft()
                curr_arr.append(curr_pointer.val)

                if curr_pointer.left:
                    level_queue.append(curr_pointer.left)
                    
                if curr_pointer.right:
                    level_queue.append(curr_pointer.right)

            level_output.append(curr_arr)

        return level_output

        



        