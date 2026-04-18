class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}

        for i in range(len(nums)): 
            curr_num = nums[i]
            compliment = target - curr_num
            
            if compliment in num_dict:
                return [i, num_dict[compliment]]
            else:
                num_dict[curr_num] = i