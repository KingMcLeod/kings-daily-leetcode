class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        elif len(nums) == 2:
            return max(nums[0], nums[1])
            
        first_house_sums = [nums[0], max(nums[0], nums[1])]
        last_house_sums = [nums[1], max(nums[1], nums[2])]

        # first house included + last house excluded process
        for i in range(2, len(nums) - 1):
            curr_sum = nums[i]

            first_house_sums.append(max(curr_sum + first_house_sums[i - 2], first_house_sums[i - 1]))

        # first house excluded + last house included process
        for i in range(3, len(nums)):
            curr_sum = nums[i]

            last_house_sums.append(max(curr_sum + last_house_sums[i - 3], last_house_sums[i - 2]))

        return max(first_house_sums[-1], last_house_sums[-1])

        """
        first_house_sums: [1, 2]
        last_house_sums: [2, 3]


        """