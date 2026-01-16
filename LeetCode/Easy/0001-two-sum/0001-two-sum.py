class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        compliment_dict = {}

        for i in range(len(nums)):
            num = nums[i]
            compliment = target - num

            if compliment in compliment_dict:
                return [i, compliment_dict[compliment]]
            else:
                compliment_dict[num] = i