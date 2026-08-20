import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.kth = k
        self.topk_list = []
        heapq.heapify(self.topk_list)

        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        heapq.heappush(self.topk_list, val)
        if len(self.topk_list) > self.kth:
            heapq.heappop(self.topk_list)

        return self.topk_list[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)