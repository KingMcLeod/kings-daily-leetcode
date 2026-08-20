import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.kth = k
        self.scores_list = nums
        heapq.heapify(self.scores_list)

        while len(self.scores_list) > self.kth:
            heapq.heappop(self.scores_list)

    def add(self, val: int) -> int:
        if len(self.scores_list) < self.kth:
            heapq.heappush(self.scores_list, val)
        elif val > self.scores_list[0]:
            heapq.heappop(self.scores_list)
            heapq.heappush(self.scores_list, val)
    
        return self.scores_list[0]




# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)