class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        num_dict = dict()

        for i in range(len(nums)):
            curr_num = nums[i] # store current num
            compliment = target - curr_num # find compliment for pair

            if compliment in num_dict: # if we've seen the second num alrady...
                return [i, num_dict[compliment]] # then, return the index pos of both nums
            else:
                num_dict[curr_num] = i # else, store the index pos of current num