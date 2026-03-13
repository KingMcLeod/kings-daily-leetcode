# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head == None: return False

        left_pointer = head
        right_pointer = head.next

        while right_pointer and right_pointer.next != None:
            if left_pointer == right_pointer:
                return True
            else:
                left_pointer = left_pointer.next
                right_pointer = right_pointer.next.next
        return False