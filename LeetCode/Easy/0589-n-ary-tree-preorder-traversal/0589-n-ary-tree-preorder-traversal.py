"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        result_list = []

        def traverse(node):
            if node is None:
                return

            result_list.append(node.val)

            if node.children is not None:
                for node in node.children:
                    traverse(node)

        traverse(root)

        return result_list