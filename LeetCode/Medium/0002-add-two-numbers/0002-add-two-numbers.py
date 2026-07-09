# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # creating new linked list
        dummy = ListNode(0)
        ptr_1 = l1
        ptr_2 = l2
        ptr_3 = dummy
        carry_over = 0

        while ptr_1 is not None or ptr_2 is not None:
            ptr_1_val = 0
            ptr_2_val = 0

            if ptr_1 is not None:
                ptr_1_val = ptr_1.val
            
            if ptr_2 is not None:
                ptr_2_val = ptr_2.val

            node_sum = ptr_1_val + ptr_2_val + carry_over
            carry_over = node_sum // 10
            node_sum = node_sum % 10

            node = ListNode(node_sum)
            ptr_3.next = node
            ptr_3 = ptr_3.next

            if ptr_1 is not None:
                ptr_1 = ptr_1.next
            
            if ptr_2 is not None:
                ptr_2 = ptr_2.next
        if carry_over > 0:
            node = ListNode(carry_over)
            ptr_3.next = node
            
        return dummy.next