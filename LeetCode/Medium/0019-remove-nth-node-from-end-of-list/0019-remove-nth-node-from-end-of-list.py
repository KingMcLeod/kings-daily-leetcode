# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0)
        dummy.next = head
        ptr_1 = dummy
        ptr_2 = dummy
        
        count = 0

        # while count != n:
        #     ptr_1 = ptr_1.next
        #     count += 1


        while ptr_1.next is not None:
            ptr_1 = ptr_1.next

            if count >= n:
                ptr_2 = ptr_2.next

            count += 1

        ptr_2.next = ptr_2.next.next
        return dummy.next