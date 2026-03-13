class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        hash_dict = {}

        for i in range(len(nums)):
            current_num = nums[i]

            if current_num in hash_dict:
                hash_dict[current_num] += 1
            else: 
                hash_dict[current_num] = 1

        top_k = sorted(hash_dict.items(), key=lambda item: item[1], reverse=True)[:k]
        print(top_k)

        return [num for num, freq in top_k]