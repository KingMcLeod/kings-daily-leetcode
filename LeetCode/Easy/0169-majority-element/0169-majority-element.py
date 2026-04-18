class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        num_dict = {}

        for num in nums:
            if num in num_dict:
                num_dict[num] += 1
            else:
                num_dict[num] = 1

        highest_num = next(iter(num_dict))

        for num in num_dict:
            if num_dict[num] > num_dict[highest_num]:
                highest_num = num

        return highest_num