"""
P:
    input: arr of ints (nums), int (k)
    output: arr of ints (top k elements)
    task: find the top k frequent elements and return them (any order is fine)

E:
    - input arr will never be empty (guaranteed at least 1 element)
    - output will be unique (no dupes?)

D:
    min_heap: [1,1,1,2,2,3]
    max_heap: [3,2,2,1,1,1]

A:
    1. import heapq library
    2. create an empty freq_dict, max_heap, & output_arr
    3. iterate through nums and build out freq_dict
        - if num already exists in dict, increment its count
        - if num doesn't exist, add it with count of 1
    4. iterate through freq_dict and push every [freq, key] pair into max_heap
        - max_heap auto-sorts so highest frequency floats to the top
    5. pop k times from max_heap
        - each pop returns the highest frequency pair [freq, key]
        - append only the key (the actual number) to output_arr
    6. return output_arr
"""

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        import heapq

        # variables
        freq_dict = {}
        max_heap = []
        output_arr = []

        # build out freq dict (key: num, val: freq)
        for num in nums:
            if num in freq_dict:
                freq_dict[num] += 1
            else:
                freq_dict[num] = 1

        # push all (freq, num) pairs into max heap
        # heap auto-sorts so highest freq floats to top
        for key, freq in freq_dict.items():
            heapq.heappush_max(max_heap, [freq, key])

        # pop k times — each pop gives us the next highest freq element
        # we only want the num (key), not the freq, so we grab index [1]
        for _ in range(k):
            freq, key = heapq.heappop_max(max_heap)
            output_arr.append(key)

        return output_arr