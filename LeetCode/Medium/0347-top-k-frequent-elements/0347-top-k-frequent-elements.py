class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        import heapq
        
        # variables
        output = []
        max_heap = []
        hash_dict = {}

        for i in range(len(nums)):
            current_num = nums[i]

            if current_num in hash_dict:
                hash_dict[current_num] += 1
            else: 
                hash_dict[current_num] = 1

        for key, freq in hash_dict.items():
            curr_pair = [freq, key]

            if len(max_heap) >= k:
                if max_heap[-1][0] < curr_pair[0]:
                    heapq.heappop_max(max_heap)
                    heapq.heappush_max(max_heap, curr_pair)
            else:
                heapq.heappush_max(max_heap, curr_pair)

        for freq, key in max_heap:
            output.append(key)

        return output

