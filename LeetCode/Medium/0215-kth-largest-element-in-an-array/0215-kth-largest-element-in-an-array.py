"""
nums = [3,2,1,5,6,4], k = 2
            ^
heap = [2, 3] heap[0] > nums[i]

"""
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq

        min_heap = []

        for i in range(len(nums)):
            curr_num = nums[i]
           
            if len(min_heap) >= k:
                if min_heap[0] < curr_num:
                    heapq.heapreplace(min_heap, curr_num)
            else:
                heapq.heappush(min_heap, curr_num)
            
        return min_heap[0]

        