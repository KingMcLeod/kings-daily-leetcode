"""
P:
    input: arr of ints (nums), int (k)
    output: int (kth largest int)
    task: find the kth largest element in the arr without sorting
E:
    - we encounter duplicates (treat them as unique values still)
    - input arr will never be empty, guaranteed at least 1 value

    Example:
    min_heap = [5, 6]
D:
    ints, arr, heap, 

A: Time: O(N*logk, Space: O(k)
    1. create a heap (import)
    2. lopo through the nums
        2a. check if heap length >= k:
            - if isn't, push value and continue
            - if it is: check to see if the min_heap[0] > curr_num:
                  - if it is, continue
                  - if not, readjust heap (pop & push)
    3. return first element in heap (kth largest)
"""

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq

        # variable(s)
        min_heap = []

        for i in range(len(nums)):
            curr_num = nums[i]

            if len(min_heap) < k:
                heapq.heappush(min_heap, curr_num)
            else:
                if min_heap[0] < curr_num:
                    heapq.heappushpop(min_heap, curr_num)

        return min_heap[0]

